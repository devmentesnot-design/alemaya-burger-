const handleRequest = require('../server');

module.exports = async (req, res) => {
  try {
    if (req.headers && req.headers['x-forwarded-uri']) {
      req.url = req.headers['x-forwarded-uri'];
    } else if (req.headers && req.headers['x-matched-path'] && req.headers['x-matched-path'] !== '/api/index.js') {
      req.url = req.headers['x-matched-path'];
    }
    await handleRequest(req, res);
  } catch (err) {
    console.error('[Vercel Serverless Error]:', err);
    if (!res.writableEnded) {
      res.writeHead(500, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({
        success: false,
        error: err.message || 'Internal Server Error'
      }));
    }
  }
};
