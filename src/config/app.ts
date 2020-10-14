/* eslint-disable no-new */
import express from 'express'

import Configuration from './config'
import Routes from './routers/routes'
import Database from './database'
import Middlewares from './middlewares'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      new Middlewares(this.express)
      new Configuration(this.express)
      new Routes(this.express)
      new Database()
    }
}

export default new App().express
