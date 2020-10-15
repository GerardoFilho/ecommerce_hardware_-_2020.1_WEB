"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _expresshandlebars = require('express-handlebars'); var _expresshandlebars2 = _interopRequireDefault(_expresshandlebars);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _expresssession = require('express-session'); var _expresssession2 = _interopRequireDefault(_expresssession);



class Config {
    
    __init() {this.bodyParser = _bodyparser2.default}
    __init2() {this.session = _expresssession2.default}

    __init3() {this.dirViews = 'src/modules/views/'}

     constructor (expr) {;Config.prototype.__init.call(this);Config.prototype.__init2.call(this);Config.prototype.__init3.call(this);
      this._express = expr
      this.fbodyParser()
      this.fsession()
      this.handlebars()
    }

     fsession () {
      this._express.use(this.session({
        secret: 'asdasd',
        resave: true,
        saveUninitialized: true
      }))
    }

     fbodyParser () {
      this._express.use(this.bodyParser.urlencoded({ extended: true }))
      this._express.use(this.bodyParser.json())
    }

     handlebars (){
      this._express.set('view engine', 'handlebars')
      this._express.set('views', this.dirViews)
      this._express.engine('handlebars', _expresshandlebars2.default.call(void 0, {
        extname: 'handlebars',
        layoutsDir: this.dirViews + 'layouts',
        defaultLayout: 'main'
      }))
    }
} exports.default = Config;
