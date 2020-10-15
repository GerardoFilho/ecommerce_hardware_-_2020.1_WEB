"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ClienteController = require('../../../modules/controller/ClienteController'); var _ClienteController2 = _interopRequireDefault(_ClienteController);


class RouterCliente {
    
    
    

     constructor (express, func) {
      this.func = func
      this.express = express
      this.ctrlCliente = new (0, _ClienteController2.default)()

      this.meucadastro()
      this.cadastro()
      this.minhaconta()
      this.editarcadastro()
      this.meuspedidos()
      this.trocarsenha()
      this.excluirconta()
      this.fecharpedido()
    }

     minhaconta () {
      this.express.get('/minhaconta', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.func.globalRender(req, res, 'user/minhaconta')
      })
    }

     editarcadastro () {
      this.express.get('/editarcadastro', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.ctrlCliente.view(req, res, 'user/editarcadastro')
      })
      this.express.post('/editarcadastro', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.ctrlCliente.update(req)
        res.redirect(req.get('referer'))
      })
    }

     meuspedidos () {
      this.express.get('/meuspedidos', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.func.globalRender(req, res, 'user/meuspedidos')
      })
    }

     trocarsenha () {
      this.express.get('/trocarsenha', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.func.globalRender(req, res, 'user/trocarsenha')
      })
      this.express.post('/trocarsenha', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.ctrlCliente.updatePassword(res, req)
        this.func.globalRender(req, res, 'user/trocarsenha')
      })
    }

     excluirconta () {
      this.express.get('/excluirconta', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.func.globalRender(req, res, 'user/excluirconta')
      })

      this.express.post('/excluirconta', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.ctrlCliente.delete(req, res)
      })
    }

     meucadastro () {
      this.express.get('/meucadastro', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.ctrlCliente.view(req, res, 'user/meucadastro')
      })
    }

     cadastro () {
      this.express.get('/cadastro', (req, res) => {
        this.func.globalRender(req, res, 'user/cadastro')
      })

      this.express.post('/cadastro', (req, res) => {
        this.ctrlCliente.register(req, res)
      })
    }

     fecharpedido () {
      this.express.get('/fecharpedido', (req, res) => {
        this.func.globalRender(req, res, 'fecharpedido')
      })
    }
} exports.default = RouterCliente;
