/* eslint-disable no-dupe-class-members */
import mongoose from 'mongoose'

export default
class DAOProduto {
  Model: mongoose.Model<mongoose.Document>
  con = mongoose.connection

  public constructor () {
    var models = this.con.modelNames()
    models.find(e => e === 'produto')

    if (models.find(e => e === 'produto') === undefined) {
      const schema = new mongoose.Schema({
        nome: { type: String, required: true },
        descricao: { type: String },
        marca: { type: String },
        modelo: { type: String },
        preco: { type: String },
        imagem: { type: String }
      })

      this.Model = this.con.model('produto', schema, 'produto')
    }

    this.Model = this.con.model('produto')
  }

  public create (produto) {
    return new this.Model(produto).save()
  }

  public readItensIndex (index: boolean): mongoose.DocumentQuery<mongoose.Document[], mongoose.Document, {}> {
    return this.Model.find({ index: index })
  }

  public read (nome_: string): Promise<any>;
  public read (nome_: string, marca_?: string): mongoose.QueryCursor<mongoose.Document>;
  public read (nome_: string, marca_?: string): any {
    if (marca_) {
      return this.Model.find({ nome: nome_, marca: marca_ }).cursor()
    }
    return this.Model.find({ nome: nome_ }).cursor().next()
  }

  public update (produto, nomeOld) {
    return this.Model.updateOne({ nome: nomeOld }, produto)
  }

  public delete (nome_: string) {
    return this.Model.deleteOne({ nome: nome_ })
  }
}
