const handleRequest = require('../server');

module.exports = async (req, res) => {
  try {
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
