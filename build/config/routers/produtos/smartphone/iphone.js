"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



class RouterIphone {
    
    

     constructor (express, func) {
      this.express = express
      this.func = func
      this.iphone()
      this.iphone7series()
      this.iphone8series()
      this.iphone11series()
      this.iphonexseries()
    }

     iphone () {
      this.express.get('/iphone', (req, res) => {
        this.func.globalRender(req, res, 'iphone/iphone')
      })
    }

     iphone7series () {
      this.express.get('/iphone7series', (req, res) => {
        this.func.globalRender(req, res, 'iphone/iphone7series')
      })
    }

     iphone8series () {
      this.express.get('/iphone8series', (req, res) => {
        this.func.globalRender(req, res, 'iphone/iphone8series')
      })
    }

     iphone11series () {
      this.express.get('/iphone11series', (req, res) => {
        this.func.globalRender(req, res, 'iphone/iphone11series')
      })
    }

     iphonexseries () {
      this.express.get('/iphonexseries', (req, res) => {
        this.func.globalRender(req, res, 'iphone/iphonexseries')
      })
    }
} exports.default = RouterIphone;
