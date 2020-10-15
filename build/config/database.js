"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);


class Database {
    // url: string = 'mongodb://localhost/ecommerce'
    __init() {this.url = 'mongodb+srv://dev:devforweb@cluster0.ne9ih.mongodb.net/ecommerce?retryWrites=true&w=majority'}
    __init2() {this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }}

     constructor () {;Database.prototype.__init.call(this);Database.prototype.__init2.call(this);
      _mongoose2.default.Promise = global.Promise
      _mongoose2.default.connect(this.url, this.options)
        .then(() => {
          console.log('Connected to Database')
        }).catch((err) => {
          console.log('Not Connected to Database ERROR! ', err)
        })
    }
} exports.default = Database;
