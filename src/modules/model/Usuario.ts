
export default
abstract class Usuario { // eslint-disable-line no-unused-vars
  id: number
  usuario: String
  senha: String
  nomeCompleto: String
  telefone: String
  email: String
  cpfCnpj: number

  public setId (id: number): void{
    this.id = id
  }

  public getId (): number {
    return this.id
  }

  public setUsuario (usuario: String): void{
    this.usuario = usuario
  }

  public getUsuario (): String {
    return this.usuario
  }

  public setSenha (senha: String): void{
    this.senha = senha
  }

  public getSenha (): String {
    return this.senha
  }

  public setNomeCompleto (nomeCompleto: String): void{
    this.nomeCompleto = nomeCompleto
  }

  public getNomeCompleto (): String {
    return this.nomeCompleto
  }

  public setTelefone (telefone: String): void{
    this.telefone = telefone
  }

  public getTelefone (): String {
    return this.telefone
  }

  public setEmail (email: String): void{
    this.email = email
  }

  public getEmail (): String {
    return this.email
  }

  public setcpfCnpj (cpfCnpj: number): void{
    this.cpfCnpj = cpfCnpj
  }

  public getcpfCnpj (): number {
    return this.cpfCnpj
  }
}
