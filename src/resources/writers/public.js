const Router = require('@koa/router');

// require('./user.handler');


const router = new Router();

require('./create-writer').register(router);
require('./get-writer').register(router);
require('./delete-writer').register(router);
require('./update-writer').register(router);

module.exports = router.routes();
