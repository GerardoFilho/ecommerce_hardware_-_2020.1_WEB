import mongoose from 'mongoose'

export default
class DAOCliente {
  Model: mongoose.Model<mongoose.Document>
  con = mongoose.connection

  public constructor () {
    var models = this.con.modelNames()

    if (models.find(e => e === 'cliente') === undefined) {
      const schema = new mongoose.Schema({
        usuario: { type: String, required: true },
        senha: { type: String, required: true },
        email: { type: String, required: true },
        nome: { type: String, required: true },
        endereco: { type: String },
        estado: { type: String },
        cidade: { type: String },
        cep: { type: String },
        cpf: { type: String }
      })

      this.Model = this.con.model('cliente', schema, 'cliente')
    }
    this.Model = this.con.model('cliente')
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
