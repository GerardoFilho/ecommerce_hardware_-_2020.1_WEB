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

      this.func.globalRender(req, res, 'usuario/login')
    })

    this.express.post('/login', (req, res) => {
      if (this.func.hasLogged(req)) {
        res.redirect(302, '/minhaconta')
        return
      }

      this.ctrlCliente.authentication(req)
        .then(options => {
          if (!options.loginfail) {
            res.redirect(302, '/minhaconta')
            return
          }
          console.log('äaaaaaa' + options.loginfail)
          this.func.setOptions(options)
          res.redirect(req.get('referer'))
        })
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
