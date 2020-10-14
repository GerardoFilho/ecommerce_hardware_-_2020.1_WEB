import Usuario from './Usuario'

export default
class Vendedor extends Usuario { // eslint-disable-line no-unused-vars
    tipo: String
    nomeLoja: String
    // dao: DAOVendedor

    public setTipo (tipo: String): void{
      this.tipo = tipo
    }

    public getTipo (): String {
      return this.tipo
    }

    public setNomeLoja (nomeLoja: String): void{
      this.nomeLoja = nomeLoja
    }

    public getNomeLoja (): String {
      return this.nomeLoja
    }
/*
    public setNomeCompleto (nomeCompleto: DAOCLiente): void{
      this.nomeCompleto = nomeCompleto
    }

    public getdao (): DAOCLiente {
      return this.nomeCompleto
    }
*/
}
