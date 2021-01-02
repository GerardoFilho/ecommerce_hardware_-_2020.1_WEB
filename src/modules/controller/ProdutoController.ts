import DAO from '../DAO/DAOProduto'

export default
class ProdutoController {
  dao = new DAO()

  public view (nome?) {
    var options = { tryregister: true, logged: true }

    return this.dao.read(nome).then(ret => {
      ret = ret.toObject()
      var pre = parseFloat(ret.preco) * 0.80

      // console.log(pre)
      return {
        ...options,
        ...ret,
        precoboleto: pre.toString(),
        encontrado: true
      }
    }).catch(err => {
      console.log('Erro ao buscar produto => ' + err)
      return {
        ...options,
        encontrado: false
      }
    })
  }

  public viewItensIndex (index?) {
    var options = { tryregister: true, logged: true }

    return this.dao.readItensIndex(index).then(ret => {
      var itens = []

      for (var i = 0; i < ret.length; i++) {
        var item = ret[i].toObject()
        var precoboleto = (parseFloat(item.preco) * 0.8).toFixed(3)
        precoboleto = precoboleto.toString() + ',00'
        item = { ...item, precoboleto: precoboleto }
        itens[i] = item
      }
      return { ...options, itens }
    })
  }

  public register (req) {
    var options = { tryregister: true }

    return this.dao.create(req.body).then(ret => {
      console.log('Produto cadastrado' + ret)
      return { ...options, cadastrado: true, popupMessage: 'Produto cadastrado com sucesso' }
    }).catch(err => {
      console.log('Erro ao cadastrar produto ' + err)
      return { ...options, cadastrado: false, popupMessage: 'Erro ao cadastrar produto' }
    })
  }

  public update (req) {
    var options = { tryupdate: true }

    return this.dao.update(req.body, req.session.usuario).then(res => {
      if (req.body.usuario === null || req.body.usuario === '') {
        return { ...options, updated: false, popupMessage: 'Usuário inválido' }
      } else {
        console.log('Dados do Produto atualizados ' + res)
        return { ...options, updated: true, popupMessage: 'Dados atualizados com sucesso' }
      }
    }).catch(err => {
      console.log('Erro ao atualizar dados do Produto ' + err)
      return { ...options, updated: false, popupMessage: 'Erro ao atualizar dados' }
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
          console.log('Produto deletado')
          req.session.usuario = null
          return { ...options, deleted: true, popupMessage: 'Usuario deletado' }
        }).catch(err => {
          console.log('Erro ao deletar Produto ' + err)
          return { ...options, deleted: false, popupMessage: 'Erro ao deletar Produto ' }
        })
      }).catch(err => {
        console.log('Usuario nao encontrado ' + err)
        return { ...options, deleted: false, popupMessage: 'Usuario nao encontrado' }
      })
  }
}
