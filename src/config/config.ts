import exphbs from 'express-handlebars'
import importBodyParser from 'body-parser'
import importSession from 'express-session'
import importExpress from 'express'

export default
class Config {
    _express: importExpress.Application
    bodyParser = importBodyParser
    session = importSession

    dirViews: string = 'src/modules/views/'

    public constructor (expr: importExpress.Application) {
      this._express = expr
      this.fbodyParser()
      this.fsession()
      this.handlebars()
    }

    private fsession () {
      this._express.use(this.session({
        secret: 'asdasd',
        resave: true,
        saveUninitialized: true
      }))
    }

    private fbodyParser () {
      this._express.use(this.bodyParser.urlencoded({ extended: true }))
      this._express.use(this.bodyParser.json())
    }

    private handlebars (): void{
      this._express.set('view engine', 'handlebars')
      this._express.set('views', this.dirViews)
      this._express.engine('handlebars', exphbs({
        extname: 'handlebars',
        layoutsDir: this.dirViews + 'layouts',
        defaultLayout: 'main'
      }))
    }
}
