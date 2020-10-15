"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-new */
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cliente = require('./usuario/cliente'); var _cliente2 = _interopRequireDefault(_cliente);
var _usuario = require('./usuario/usuario'); var _usuario2 = _interopRequireDefault(_usuario);
var _functions = require('./functions'); var _functions2 = _interopRequireDefault(_functions);
var _nvidia = require('./produtos/videocard/nvidia'); var _nvidia2 = _interopRequireDefault(_nvidia);
var _iphone = require('./produtos/smartphone/iphone'); var _iphone2 = _interopRequireDefault(_iphone);
var _xiaomi = require('./produtos/smartphone/xiaomi'); var _xiaomi2 = _interopRequireDefault(_xiaomi);
var _samsung = require('./produtos/smartphone/samsung'); var _samsung2 = _interopRequireDefault(_samsung);


class Routes {
  
  
  __init() {this.options = { logged: false }}

   constructor (expr_) {;Routes.prototype.__init.call(this);
    this.func = new (0, _functions2.default)()
    this.express = expr_

    this.index()
    new (0, _cliente2.default)(this.express, this.func)
    new (0, _usuario2.default)(this.express, this.func)

    new (0, _nvidia2.default)(this.express, this.func)

    new (0, _iphone2.default)(this.express, this.func)
    new (0, _xiaomi2.default)(this.express, this.func)
    new (0, _samsung2.default)(this.express, this.func)

    this.express.use(_express2.default.json)
  }

   index () {
    this.express.get('/', (req, res) => {
      this.func.globalRender(req, res, 'index')
    })
  }
} exports.default = Routes;
