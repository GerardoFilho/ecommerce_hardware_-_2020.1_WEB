"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);


class DAOCliente {
    

     constructor () {
      var models = _mongoose2.default.modelNames()
      models.find(e => e === 'cliente')

      if (models.length === 0) {
        const schema = new _mongoose2.default.Schema({
          usuario: { type: String, required: true },
          senha: { type: String, required: true },
          email: { type: String },
          nome: { type: String },
          endereco: { type: String },
          estado: { type: String },
          cidade: { type: String },
          cep: { type: String },
          cpf: { type: Number }
        })

        _mongoose2.default.model('cliente', schema, 'cliente')
      }

      this.Model = _mongoose2.default.model('cliente')
    }

     create (cliente) {
      return new this.Model(cliente).save()
    }

     read (usuario_) {
      return this.Model.find({ usuario: usuario_ }).cursor().next()
    }

     update (cliente, userOld) {
      return this.Model.updateOne({ usuario: userOld }, cliente)
    }

     delete (usuario_) {
      return this.Model.deleteOne({ usuario: usuario_ })
    }
} exports.default = DAOCliente;
