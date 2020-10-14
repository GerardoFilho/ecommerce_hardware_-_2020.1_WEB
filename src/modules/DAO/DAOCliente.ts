import mongoose from 'mongoose'

export default
class DAOCliente {
    Model: mongoose.Model<mongoose.Document>

    public constructor () {
      var models = mongoose.modelNames()
      models.find(e => e === 'cliente')

      if (models.length === 0) {
        const schema = new mongoose.Schema({
          usuario: { type: String, required: true },
          senha: { type: String, required: true },
          email: { type: String },
          nome: { type: String },
          endereco: { type: String },
          estado: { type: String },
          cidade: { type: String },
          cep: { type: String },
          cpf: { type: Number }
        })

        mongoose.model('cliente', schema, 'cliente')
      }

      this.Model = mongoose.model('cliente')
    }

    public create (cliente) {
      return new this.Model(cliente).save()
    }

    public read (usuario_: string) {
      return this.Model.find({ usuario: usuario_ }).cursor().next()
    }

    public update (cliente, userOld) {
      return this.Model.updateOne({ usuario: userOld }, cliente)
    }

    public delete (usuario_: string) {
      return this.Model.deleteOne({ usuario: usuario_ })
    }
}
