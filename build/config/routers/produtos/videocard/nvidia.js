"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



class RouterNvidia {
  
  

   constructor (express, func) {
    this.express = express
    this.func = func
    this.rtx()
    this.rtx3090()
    this.rtx3080()
    this.rtx3070()
  }

   rtx () {
    this.express.get('/rtx', (req, res) => {
      this.func.globalRender(req, res, 'rtx/rtx')
    })
  }

   rtx3090 () {
    this.express.get('/rtx3090', (req, res) => {
      this.func.globalRender(req, res, 'rtx/rtx3090')
    })
  }

   rtx3080 () {
    this.express.get('/rtx3080', (req, res) => {
      this.func.globalRender(req, res, 'rtx/rtx3080')
    })
  }

   rtx3070 () {
    this.express.get('/rtx3070', (req, res) => {
      this.func.globalRender(req, res, 'rtx/rtx3070')
    })
  }
} exports.default = RouterNvidia;
