import importExpress from 'express'
import Functions from '../../functions'

export default
class RouterSamsung {
    express: importExpress.Application
    func: Functions
    url = 'product/smartphone/samsung/'

    public constructor (express, func) {
      this.express = express
      this.func = func
      this.samsung()
      this.galaxynoteseries()
      this.galaxyseries()
      this.galaxaseries()
    }

    private samsung () {
      this.express.get('/samsung', (req, res) => {
        this.func.globalRender(req, res, this.url + 'samsung')
      })
    }

    private galaxynoteseries () {
      this.express.get('/galaxynoteseries', (req, res) => {
        this.func.globalRender(req, res, this.url + 'galaxynoteseries')
      })
    }

    private galaxyseries () {
      this.express.get('/galaxysseries', (req, res) => {
        this.func.globalRender(req, res, this.url + 'galaxysseries')
      })
    }

    private galaxaseries () {
      this.express.get('/galaxyaseries', (req, res) => {
        this.func.globalRender(req, res, this.url + 'galaxyaseries')
      })
    }
}
