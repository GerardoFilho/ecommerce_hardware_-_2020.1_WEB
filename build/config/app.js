"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-new */
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _config = require('./config'); var _config2 = _interopRequireDefault(_config);
var _routes = require('./routers/routes'); var _routes2 = _interopRequireDefault(_routes);
var _database = require('./database'); var _database2 = _interopRequireDefault(_database);
var _middlewares = require('./middlewares'); var _middlewares2 = _interopRequireDefault(_middlewares);

class App {
    

     constructor () {
      this.express = _express2.default.call(void 0, )
      new (0, _middlewares2.default)(this.express)
      new (0, _config2.default)(this.express)
      new (0, _routes2.default)(this.express)
      new (0, _database2.default)()
    }
}

exports. default = new App().express
