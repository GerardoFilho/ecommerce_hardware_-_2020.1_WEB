import mongoose from 'mongoose'

export default
class Database {
    // url: string =  'mongodb://localhost/ecommerce'
    url: string = 'mongodb+srv://dev:devforweb@cluster0.ne9ih.mongodb.net/ecommerce?retryWrites=true&w=majority'
    options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    public constructor () {
      mongoose.Promise = global.Promise
      mongoose.connect(this.url, this.options)
        .then(() => {
          console.log('Connected to Database')
        }).catch((err) => {
          console.log('Not Connected to Database ERROR! ', err)
        })
    }
}
