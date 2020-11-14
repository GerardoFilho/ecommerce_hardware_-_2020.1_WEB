export default
class RouterCliente {
  options = { logged: false }
  optionsDefault = { logged: false, loginfail: false }

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
    this.setOptionsDefault()
  }

  public globalRenderIndex (req, res, page: string) {
    this.hasLogged(req)
    res.render(page, { ...this.options, layout: 'index' })
    this.setOptionsDefault()
  }

  public renderModel (res, modalName, model) {
    res.controllerFor(modalName).set('model', model)
    res.render(modalName, {
      into: 'application',
      outlet: 'modal'
    })
  }

  public setOptions (options) {
    this.options = { ...this.options, ...options }
  }

  private setOptionsDefault () {
    this.options = this.optionsDefault
  }
}
