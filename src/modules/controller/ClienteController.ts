import DAO from '../DAO/DAOCliente'

export default
class ClienteController {
  dao = new DAO()

  public view (req) {
    return this.dao.read(req.session.usuario).then(ret => {
      ret = ret.toObject()
      var tam = ret.senha.length
      ret.senha = ''
      for (var i = 0; i < tam; i++) {
        ret.senha += '0'
      }
      return {
        logged: true,
        ...ret
      }
    }).catch(err => {
      console.log('Erro ao buscar cliente => ' + err)
      return null
    })
  }

  public register (req) {
    var options = { tryregister: true }

    return this.dao.create(req.body).then(ret => {
      console.log('Cliente salvo' + ret)
      return { ...options, cadastrado: true }
    }).catch(err => {
      console.log('Erro ao cadastrar cliente ' + err)
      return { ...options, cadastrado: false }
    })
    // fazer tratamento de erros depois
  }

  public update (req) {
    // fazer tratamento de erros depois
    if (req.body.usuario === null || req.body.usuario === '') {
      console.log('usuario invalido')
      return
    }

    this.dao.update(req.body, req.session.usuario).then(res => {
      console.log('Dados do cliente atualizados ' + res)
    }).catch(err => {
      console.log('Erro ao atualizar dados do cliente ' + err)
    })
  }

  public updatePassword (req): Promise<number> {
    return this.dao.read(req.body.usuario).then(ret => {
      if (
        !req.body.usuario ||
        !req.body.senha ||
        !req.body.novasenha ||
        !req.body.novasenhaconfirmacao) {
        console.log('Dados inválidos')
        return 2
      } else if (req.body.novasenha !== req.body.novasenhaconfirmacao) {
        console.log('Novas senhas divergentes')
        return 2
      } else if (req.body.usuario !== req.session.usuario) {
        console.log('Usuario inválido')
        return 2
      } else if (ret.senha !== req.body.senha) {
        console.log('Senha atual inválida')
        return 3
      }
      var cliente = {
        senha: req.body.novasenha
      }

      console.log(cliente)
      this.dao.update(cliente, req.session.usuario).then(res => {
        console.log('Senha do cliente atualizada ' + res)
        return 0
      }).catch(err => {
        console.log('Erro ao atualizar dados do cliente ' + err)
        return 6
      })
    }).catch(err => {
      console.log('Usuario inválido ' + err)
      return 4
    })
  }

  public delete (req): Promise<number> {
    // tratar mensagem de erro depois
    return this.dao.read(req.body.usuario)
      .then(ret => {
        if (req.body.senha !== req.body.senhaconfirmacao || req.body.usuario === null) {
          console.log('Usuario ou senha inválidos')
          return 2
        } else if (ret.senha !== req.body.senha) {
          console.log('senha incorreta')
          return 3
        }
        return this.dao.delete(req.body.usuario).then(rett => {
          console.log('Cliente deletado')
          req.session.usuario = null
          return 0
        }).catch(err => {
          console.log('Erro ao deletar cliente ' + err)
          return 5
        })
      }).catch(err => {
        console.log('Usuario nao encontrado ' + err)
        return 4
      })
  }

  /*
    0 = sucesso
    1 = senha ou usuário em branco
    2 = senha ou usuário inválido
    3 = Senha incorreta
    4 = Erro ao buscar cliente
    5 = Erro ao deletar cliente
    6 = Erro ao atualiza cliente
    7 = Erro ao cadastrar cliente
  */
  public authentication (req) {
    var options = { loginfail: true }
    return this.dao.read(req.body.usuario)
      .then((res) => {
        if (!req.body.usuario || !req.body.senha) {
          console.log('senha ou usuário em branco')
          return options
        } else if (res.usuario !== req.body.usuario || res.senha !== req.body.senha) {
          return options
        }
        req.session.usuario = req.body.usuario
        options.loginfail = false
        return options
      }).catch(err => {
        console.log('Erro buscar usuario ' + err)
        return options
      })
  }
}
