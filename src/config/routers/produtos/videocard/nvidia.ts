import importExpress from 'express'
import Functions from '../../functions'

export default
class RouterNvidia {
  express: importExpress.Application
  func : Functions
  url = 'product/videocard/nvidia/rtx/'

  public constructor (express, func) {
    this.express = express
    this.func = func
    this.rtx()
    this.rtx3090()
    this.rtx3080()
    this.rtx3070()
  }

  private rtx () {
    this.express.get('/rtx', (req, res) => {
      this.func.globalRender(req, res, this.url + 'rtx')
    })
  }

  private rtx3090 () {
    this.express.get('/rtx3090', (req, res) => {
      this.func.globalRender(req, res, this.url + 'rtx3090')
    })
  }

  private rtx3080 () {
    this.express.get('/rtx3080', (req, res) => {
      this.func.globalRender(req, res, this.url + 'rtx3080')
    })
  }

  private rtx3070 () {
    this.express.get('/rtx3070', (req, res) => {
      this.func.globalRender(req, res, this.url + 'rtx3070')
    })
  }
}
