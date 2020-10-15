"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



class RouterXiaomi {
    
    

     constructor (express, func) {
      this.express = express
      this.func = func
      this.xiaomi()
      this.redmiseries()
      this.miseries()
    }

     xiaomi () {
      this.express.get('/xiaomi', (req, res) => {
        this.func.globalRender(req, res, 'xiaomi/xiaomi')
      })
    }

     miseries () {
      this.express.get('/miseries', (req, res) => {
        this.func.globalRender(req, res, 'xiaomi/miseries')
      })
    }

     redmiseries () {
      this.express.get('/redmiseries', (req, res) => {
        this.func.globalRender(req, res, 'xiaomi/redmiseries')
      })
    }
} exports.default = RouterXiaomi;
