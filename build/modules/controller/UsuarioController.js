"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _DAOCliente = require('../DAO/DAOCliente'); var _DAOCliente2 = _interopRequireDefault(_DAOCliente);


class UsuarioController {constructor() { UsuarioController.prototype.__init.call(this); }
    __init() {this.cliente = new (0, _DAOCliente2.default)()}
/*
    public findClient (id: number) {
      this.cliente.getAsyncCliente(1).then(res => {
        console.log(res)
      })
    }
    */
} exports.default = UsuarioController;
