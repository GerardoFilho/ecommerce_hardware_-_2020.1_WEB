import importExpress from 'express'
import Functions from '../../functions'

export default
class RouterXiaomi {
    express: importExpress.Application
    func : Functions

    public constructor (express, func) {
      this.express = express
      this.func = func
      this.xiaomi()
      this.redmiseries()
      this.miseries()
    }

    private xiaomi () {
      this.express.get('/xiaomi', (req, res) => {
        this.func.globalRender(req, res, 'xiaomi/xiaomi')
      })
    }

    private miseries () {
      this.express.get('/miseries', (req, res) => {
        this.func.globalRender(req, res, 'xiaomi/miseries')
      })
    }

    private redmiseries () {
      this.express.get('/redmiseries', (req, res) => {
        this.func.globalRender(req, res, 'xiaomi/redmiseries')
      })
    }
}
