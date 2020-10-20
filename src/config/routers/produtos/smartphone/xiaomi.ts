import importExpress from 'express'
import Functions from '../../functions'

export default
class RouterXiaomi {
  express: importExpress.Application
  func : Functions
  url = 'product/smartphone/xiaomi/'

  public constructor (express, func) {
    this.express = express
    this.func = func
    this.xiaomi()
    this.redmiseries()
    this.miseries()
  }

  private xiaomi () {
    this.express.get('/xiaomi', (req, res) => {
      this.func.globalRender(req, res, this.url + 'xiaomi')
    })
  }

  private miseries () {
    this.express.get('/miseries', (req, res) => {
      this.func.globalRender(req, res, this.url + 'miseries')
    })
  }

  private redmiseries () {
    this.express.get('/redmiseries', (req, res) => {
      this.func.globalRender(req, res, this.url + 'redmiseries')
    })
  }
}
