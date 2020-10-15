"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



class RouterSamsung {
    
    

     constructor (express, func) {
      this.express = express
      this.func = func
      this.samsung()
      this.galaxynoteseries()
      this.galaxyseries()
      this.galaxaseries()
    }

     samsung () {
      this.express.get('/samsung', (req, res) => {
        this.func.globalRender(req, res, 'samsung/samsung')
      })
    }

     galaxynoteseries () {
      this.express.get('/galaxynoteseries', (req, res) => {
        this.func.globalRender(req, res, 'samsung/galaxynoteseries')
      })
    }

     galaxyseries () {
      this.express.get('/galaxysseries', (req, res) => {
        this.func.globalRender(req, res, 'samsung/galaxysseries')
      })
    }

     galaxaseries () {
      this.express.get('/galaxyaseries', (req, res) => {
        this.func.globalRender(req, res, 'samsung/galaxyaseries')
      })
    }
} exports.default = RouterSamsung;
