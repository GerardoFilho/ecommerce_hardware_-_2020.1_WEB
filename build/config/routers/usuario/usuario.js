"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ClienteController = require('../../../modules/controller/ClienteController'); var _ClienteController2 = _interopRequireDefault(_ClienteController);


class RouterUsuario {
  
  
  

   constructor (express, func) {
    this.func = func
    this.express = express
    this.ctrlCliente = new (0, _ClienteController2.default)()

    this.login()
    this.logoff()
  }

   login () {
    this.express.get('/login', (req, res) => {
      if (this.func.hasLogged(req)) {
        res.redirect(302, '/minhaconta')
        return
      }

      this.func.globalRender(req, res, 'user/login')
    })

    this.express.post('/login', (req, res) => {
      if (this.func.hasLogged(req)) {
        res.redirect(302, '/minhaconta')
        return
      }

      this.ctrlCliente.authentication(req, res)
    })
  }

   logoff () {
    this.express.get('/logoff', (req, res) => {
      req.session.usuario = null
      res.redirect(302, '/login')
    })
    this.express.post('/logoff', (req, res) => {
      req.session.usuario = null
      res.redirect(302, '/login')
    })
  }
} exports.default = RouterUsuario;
