export default
class Cliente { // eslint-disable-line no-unused-vars
  obj = {
    usuario: null,
    nome: null,
    email: null,
    endereco: null,
    estado: null,
    cidade: null,
    cep: null,
    cpf: null
  }

  tes: Object

  public getCliente (): Object {
    return this.tes
  }

  public setCliente (obj: Object) {
    console.log(obj)
    this.tes = obj
  }

  public getUsuario (): string {
    return this.obj.usuario
  }

  public setUsuario (usuario: string) {
    this.obj.usuario = usuario
  }

  public getNome (): string {
    return this.obj.nome
  }

  public setNome (nome: string) {
    this.obj.nome = nome
  }

  public getEmail (): string {
    return this.obj.email
  }

  public setEmail (email: string) {
    this.obj.email = email
  }

  public getEndereco (): string {
    return this.obj.endereco
  }

  public setEndereco (endereco: string) {
    this.obj.endereco = endereco
  }

  public getEstado (): string {
    return this.obj.estado
  }

  public setEstado (estado: string) {
    this.obj.estado = estado
  }

  public getCidade (): string {
    return this.obj.cidade
  }

  public setCidade (cidade: string) {
    this.obj.cidade = cidade
  }

  public getCep (): string {
    return this.obj.cep
  }

  public setCep (cep: string) {
    this.obj.cep = cep
  }

  public getCpf (): number {
    return this.obj.cpf
  }

  public setCpf (cpf: number) {
    this.obj.cpf = cpf
  }
}
