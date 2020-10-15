"use strict";Object.defineProperty(exports, "__esModule", {value: true});
class RouterCliente {constructor() { RouterCliente.prototype.__init.call(this); }
  __init() {this.options = { logged: false }}

   hasLogged (req) {
    if (req.session.usuario) {
      this.options.logged = true
    } else {
      this.options.logged = false
    }
    return this.options.logged
  }

   sessionExpired (req, res, redirect) {
    if (!this.hasLogged(req)) {
      res.redirect(302, redirect)
    }
  }

   globalRender (req, res, page) {
    this.hasLogged(req)
    res.render(page, this.options)
  }
} exports.default = RouterCliente;
