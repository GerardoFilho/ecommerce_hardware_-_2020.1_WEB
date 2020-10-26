import importExpress from 'express'
import Functions from '../functions'
import CtrlCliente from '../../../modules/controller/ClienteController'

export default
class RouterCliente {
  express: importExpress.Application
  ctrlCliente: CtrlCliente
  func: Functions
  url = 'usuario/'

  public constructor (express, func) {
    this.func = func
    this.express = express
    this.ctrlCliente = new CtrlCliente()

    this.meucadastro()
    this.cadastro()
    this.minhaconta()
    this.editarcadastro()
    this.meuspedidos()
    this.trocarsenha()
    this.excluirconta()
    this.fecharpedido()
  }

  private minhaconta () {
    this.express.get('/minhaconta', (req, res) => {
      this.func.sessionExpired(req, res, '/login')
      this.func.globalRender(req, res, this.url + 'minhaconta')
    })
  }

  private editarcadastro () {
    this.express.get('/editarcadastro', (req, res) => {
      this.func.sessionExpired(req, res, '/login')
      this.ctrlCliente.view(req).then(options => {
        if (options) {
          this.func.setOptions(options)
          this.func.globalRender(req, res, this.url + 'editarcadastro')
        } else {
          res.redirect(req.get('referer'))
        }
      })
    })
    this.express.post('/editarcadastro', (req, res) => {
      this.func.sessionExpired(req, res, '/login')
      this.ctrlCliente.update(req)
      res.redirect(req.get('referer'))
    })
  }

  private meuspedidos () {
    this.express.get('/meuspedidos', (req, res) => {
      this.func.sessionExpired(req, res, '/login')
      this.func.globalRender(req, res, this.url + 'meuspedidos')
    })
  }

  private trocarsenha () {
    this.express.get('/trocarsenha', (req, res) => {
      this.func.sessionExpired(req, res, '/login')
      this.func.globalRender(req, res, this.url + 'trocarsenha')
    })
    this.express.post('/trocarsenha', (req, res) => {
      this.func.sessionExpired(req, res, '/login')
      this.ctrlCliente.updatePassword(req).then(resCode => {
        if (!resCode) {
          this.func.globalRender(req, res, this.url + 'trocarsenha')
        } else {
          res.redirect(req.get('referer'))
        }
      })
    })
  }

  private excluirconta () {
    this.express.get('/excluirconta', (req, res) => {
      this.func.sessionExpired(req, res, '/login')
      this.func.globalRender(req, res, this.url + 'excluirconta')
    })

    this.express.post('/excluirconta', (req, res) => {
      this.func.sessionExpired(req, res, '/login')
      this.ctrlCliente.delete(req).then(resCode => {
        if (!resCode) {
          res.redirect(302, '/')
        } else {
          res.redirect(req.get('referer'))
        }
      })
    })
  }

  private meucadastro () {
    this.express.get('/meucadastro', (req, res) => {
      this.func.sessionExpired(req, res, '/login')
      this.ctrlCliente.view(req).then(options => {
        if (options) {
          this.func.setOptions(options)
          this.func.globalRender(req, res, this.url + 'meucadastro')
        } else {
          res.redirect(req.get('referer'))
        }
      })
    })
  }

  private cadastro () {
    this.express.get('/cadastro', (req, res) => {
      this.func.globalRender(req, res, this.url + 'cadastro')
    })

    this.express.post('/cadastro', (req, res) => {
      this.ctrlCliente.register(req).then(options => {
        this.func.setOptions(options)
        if (options.cadastrado) {
          res.redirect(req.get('referer'))
          // res.redirect(302, '/login')
        } else {
          res.redirect(req.get('referer'))
        }
      })
    })
  }

  private fecharpedido () {
    this.express.get('/fecharpedido', (req, res) => {
      this.func.globalRender(req, res, 'fecharpedido')
    })
  }
}
