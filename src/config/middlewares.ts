import express from 'express'

export default
class Middlewares {
    express: express.Application
    dir: string = 'src/public'

    public constructor (expr: express.Application) {
      this.express = expr
      this.start()
    }

    private start () {
      this.express.use(express.static(this.dir))
    }
}
