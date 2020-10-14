import importExpress from 'express'
import Functions from '../functions'
import CtrlCliente from '../../../modules/controller/ClienteController'

export default
class RouterCliente {
    express: importExpress.Application
    ctrlCliente: CtrlCliente
    func: Functions

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
        this.func.globalRender(req, res, 'user/minhaconta')
      })
    }

    private editarcadastro () {
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

    private meuspedidos () {
      this.express.get('/meuspedidos', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.func.globalRender(req, res, 'user/meuspedidos')
      })
    }

    private trocarsenha () {
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

    private excluirconta () {
      this.express.get('/excluirconta', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.func.globalRender(req, res, 'user/excluirconta')
      })

      this.express.post('/excluirconta', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.ctrlCliente.delete(req, res)
      })
    }

    private meucadastro () {
      this.express.get('/meucadastro', (req, res) => {
        this.func.sessionExpired(req, res, '/login')
        this.ctrlCliente.view(req, res, 'user/meucadastro')
      })
    }

    private cadastro () {
      this.express.get('/cadastro', (req, res) => {
        this.func.globalRender(req, res, 'user/cadastro')
      })

      this.express.post('/cadastro', (req, res) => {
        this.ctrlCliente.register(req, res)
      })
    }

    private fecharpedido () {
      this.express.get('/fecharpedido', (req, res) => {
        this.func.globalRender(req, res, 'fecharpedido')
      })
    }
}
