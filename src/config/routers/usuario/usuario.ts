import importExpress from 'express'
import Functions from '../functions'
import CtrlCliente from '../../../modules/controller/ClienteController'

export default
class RouterUsuario {
  express: importExpress.Application
  ctrlCliente: CtrlCliente
  func: Functions

  public constructor (express, func) {
    this.func = func
    this.express = express
    this.ctrlCliente = new CtrlCliente()

    this.login()
    this.logoff()
  }

  private login () {
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

  private logoff () {
    this.express.get('/logoff', (req, res) => {
      req.session.usuario = null
      res.redirect(302, '/login')
    })
    this.express.post('/logoff', (req, res) => {
      req.session.usuario = null
      res.redirect(302, '/login')
    })
  }
}
