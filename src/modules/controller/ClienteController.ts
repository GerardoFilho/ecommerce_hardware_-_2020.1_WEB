import DAO from '../DAO/DAOCliente'

export default
class ClienteController {
  dao = new DAO()

  public view (req) {
    var options = { tryregister: true, logged: true }

    return this.dao.read(req.session.usuario).then(ret => {
      ret = ret.toObject()
      var tam = ret.senha.length
      ret.senha = ''
      for (var i = 0; i < tam; i++) {
        ret.senha += '0'
      }
      return {
        ...options,
        ...ret,
        encontrado: true
      }
    }).catch(err => {
      console.log('Erro ao buscar cliente => ' + err)
      return {
        ...options,
        encontrado: false,
        popupMessage: 'Usuário não encontrado'
      }
    })
  }

  public register (req) {
    var options = { tryregister: true }

    return this.dao.create(req.body).then(ret => {
      console.log('Cliente salvo' + ret)
      return { ...options, cadastrado: true, popupMessage: 'Usuário cadastrado com sucesso' }
    }).catch(err => {
      console.log('Erro ao cadastrar cliente ' + err)
      return { ...options, cadastrado: false, popupMessage: 'Erro ao cadastrar cliente' }
    })
    // fazer tratamento de erros depois
  }

  public update (req) {
    var options = { tryupdate: true }

    return this.dao.update(req.body, req.session.usuario).then(res => {
      if (req.body.usuario === null || req.body.usuario === '') {
        return { ...options, updated: false, popupMessage: 'Usuário inválido' }
      } else {
        console.log('Dados do cliente atualizados ' + res)
        return { ...options, updated: true, popupMessage: 'Dados atualizados com sucesso' }
      }
    }).catch(err => {
      console.log('Erro ao atualizar dados do cliente ' + err)
      return { ...options, updated: false, popupMessage: 'Erro ao atualizar dados' }
    })
  }

  public updatePassword (req) {
    var options = { trychangepass: true }

    return this.dao.read(req.body.usuario).then(ret => {
      if (
        !req.body.usuario ||
        !req.body.senha ||
        !req.body.novasenha ||
        !req.body.novasenhaconfirmacao) {
        return { ...options, updated: false, popupMessage: 'Dados inválidos' }
      } else if (req.body.novasenha !== req.body.novasenhaconfirmacao) {
        return { ...options, updated: false, popupMessage: 'Os campos da nova senhas divergem' }
      } else if (req.body.usuario !== req.session.usuario) {
        return { ...options, updated: false, popupMessage: 'Usuário inválido' }
      } else if (ret.senha !== req.body.senha) {
        return { ...options, updated: false, popupMessage: 'Senha atual inválida' }
      }
      var cliente = {
        senha: req.body.novasenha
      }

      return this.dao.update(cliente, req.session.usuario).then(res => {
        console.log('Senha do cliente atualizada ' + res)
        return { ...options, updated: true, popupMessage: 'Senha alterada com sucesso' }
      }).catch(err => {
        console.log('Erro ao atualizar dados do cliente ' + err)
        return { ...options, updated: false, popupMessage: 'Erro ao atualizar atualizar senha' }
      })
    }).catch(err => {
      console.log('Usuario inválido ' + err)
      return { ...options, updated: false, popupMessage: 'Usuário inválido' }
    })
  }

  public delete (req) {
    var options = { trydelete: true }

    return this.dao.read(req.body.usuario)
      .then(ret => {
        if (req.body.senha !== req.body.senhaconfirmacao || req.body.usuario === null) {
          console.log('Usuario ou senha inválidos')
          return { ...options, deleted: false, popupMessage: 'Usuario ou senha inválidos' }
        } else if (ret.senha !== req.body.senha) {
          console.log('senha incorreta')
          return { ...options, deleted: false, popupMessage: 'Senha Incorreta' }
        }

        return this.dao.delete(req.body.usuario).then(rett => {
          console.log('Cliente deletado')
          req.session.usuario = null
          return { ...options, deleted: true, popupMessage: 'Usuario deletado' }
        }).catch(err => {
          console.log('Erro ao deletar cliente ' + err)
          return { ...options, deleted: false, popupMessage: 'Erro ao deletar cliente ' }
        })
      }).catch(err => {
        console.log('Usuario nao encontrado ' + err)
        return { ...options, deleted: false, popupMessage: 'Usuario nao encontrado' }
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
