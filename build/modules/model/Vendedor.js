"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Usuario = require('./Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);


class Vendedor extends _Usuario2.default { // eslint-disable-line no-unused-vars
    
    
    // dao: DAOVendedor

     setTipo (tipo){
      this.tipo = tipo
    }

     getTipo () {
      return this.tipo
    }

     setNomeLoja (nomeLoja){
      this.nomeLoja = nomeLoja
    }

     getNomeLoja () {
      return this.nomeLoja
    }
/*
    public setNomeCompleto (nomeCompleto: DAOCLiente): void{
      this.nomeCompleto = nomeCompleto
    }

    public getdao (): DAOCLiente {
      return this.nomeCompleto
    }
*/
} exports.default = Vendedor;
