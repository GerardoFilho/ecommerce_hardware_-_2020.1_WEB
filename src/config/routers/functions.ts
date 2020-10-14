export default
class RouterCliente {
  options = { logged: false }

  public hasLogged (req): boolean {
    if (req.session.usuario) {
      this.options.logged = true
    } else {
      this.options.logged = false
    }
    return this.options.logged
  }

  public sessionExpired (req, res, redirect: string): void {
    if (!this.hasLogged(req)) {
      res.redirect(302, redirect)
    }
  }

  public globalRender (req, res, page: string) {
    this.hasLogged(req)
    res.render(page, this.options)
  }
}
