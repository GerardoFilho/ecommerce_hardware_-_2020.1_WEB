/* eslint-disable no-new */
import importExpress from 'express'
import Functions from './functions'
import CtrlProduto from '../../modules/controller/ProdutoController'

export default
class Index {
  express: importExpress.Application
  ctrlProduto: CtrlProduto
  func: Functions

  public constructor (express, func) {
    this.func = func
    this.express = express
    this.ctrlProduto = new CtrlProduto()

    this.index()
  }

  private index () {
    this.express.get('/', (req, res) => {
      this.ctrlProduto.viewItensIndex(true).then(options => {
        console.log(options)
        this.func.setOptions(options)
        this.func.globalRenderIndex(req, res, 'index')
      })
    })
  }
}
