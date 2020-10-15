"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);


class Middlewares {
    
    __init() {this.dir = 'src/public'}

     constructor (expr) {;Middlewares.prototype.__init.call(this);
      this.express = expr
      this.start()
    }

     start () {
      this.express.use(_express2.default.static(this.dir))
    }
} exports.default = Middlewares;
