"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _DAOCliente = require('../DAO/DAOCliente'); var _DAOCliente2 = _interopRequireDefault(_DAOCliente);
// import bodyParser from 'body-parser'


class ClienteController {constructor() { ClienteController.prototype.__init.call(this); }
    __init() {this.dao = new (0, _DAOCliente2.default)()}

     view (req, res, view) {
      this.dao.read(req.session.usuario).then(ret => {
        res.render(view, {
          logged: true,
          helpers: {
            usuario: ret.usuario,
            nome: ret.nome,
            email: ret.email,
            endereco: ret.endereco,
            estado: ret.estado,
            cidade: ret.cidade,
            cep: ret.cep,
            cpf: ret.cpf
          }
        })
      }).catch(err => {
        console.log('Erro ao buscar cliente => ' + err)
      })
    }

     register (req, res) {
      // console.log(req.body)
      var cliente = {
        usuario: req.body.usuario,
        senha: req.body.senha,
        email: req.body.email,
        nome: req.body.nome,
        endereco: req.body.endereco,
        estado: req.body.estado,
        cidade: req.body.cidade,
        cep: req.body.cep,
        cpf: req.body.cpf
      }

      this.dao.create(cliente).then(ret => {
        console.log('Cliente salvo' + ret)
        res.redirect(302, '/login')
      }).catch(err => {
        console.log('Erro ao cadastrar cliente ' + err)
        res.redirect(req.get('referer'))
      })
      // fazer tratamento de erros depois
    }

     update (req) {
      // console.log(req.body)
      // fazer tratamento de erros depois
      if (req.body.usuario === null || req.body.usuario === '') {
        console.log('usuario invalido')
        return
      }

      var cliente = {
        usuario: req.body.usuario,
        email: req.body.email,
        nome: req.body.nome,
        endereco: req.body.endereco,
        estado: req.body.estado,
        cidade: req.body.cidade,
        cep: req.body.cep,
        cpf: req.body.cpf
      }

      this.dao.update(cliente, req.session.usuario).then(res => {
        console.log('Dados do cliente atualizados ' + res)
      }).catch(err => {
        console.log('Erro ao atualizar dados do cliente ' + err)
      })
    }

     updatePassword (res, req) {
      if (
        req.body.usuario === null || req.body.usuario === '' ||
        req.body.senha === null || req.body.senha === '' ||
        req.body.novasenha === null || req.body.novasenha === '' ||
        req.body.novasenhaconfirmacao === null || req.body.novasenhaconfirmacao === '') {
        console.log('Dados inválidos')
        return
      } else if (req.body.novasenha !== req.body.novasenhaconfirmacao) {
        console.log('Novas senhas divergentes')
        return
      } else if (req.body.usuario !== req.session.usuario) {
        console.log('Usuario inválido')
        return
      }

      this.dao.read(req.body.usuario).then(ret => {
        if (ret.senha !== req.body.senha) {
          console.log('Senha atual inválida')
          return
        }
        var cliente = {
          senha: req.body.novasenha
        }

        console.log(cliente)
        this.dao.update(cliente, req.session.usuario).then(res => {
          console.log('Senha do cliente atualizada ' + res)
        }).catch(err => {
          console.log('Erro ao atualizar dados do cliente ' + err)
        })
      }).catch(err => {
        console.log('Usuario inválido ' + err)
      })
    }

     delete (req, res) {
      if (req.body.senha !== req.body.senhaconfirmacao || req.body.usuario === null) {
        console.log('Usuario ou senha inválidos')
        res.redirect(req.get('referer'))
        return
      }
      // tratar mensagem de erro depois
      this.dao.read(req.body.usuario)
        .then(ret => {
          if (ret.senha === req.body.senha) {
            this.dao.delete(req.body.usuario).then(rett => {
              console.log('Cliente deletado')
              req.session.usuario = null
              res.redirect(302, '/')
            }).catch(err => {
              console.log('Erro ao deletar cliente deletado ' + err)
              res.redirect(req.get('referer'))
            })
          }
        }).catch(err => {
          console.log('Usuario nao encontrado ' + err)
          res.redirect(req.get('referer'))
        })
    }

    // ainda vai ser feito
     authentication (req, res) {
      if (!req.body.usuario || !req.body.senha) {
        res.status(400)
        res.send('Credenciais invalálidas')
        return
      }
      this.dao.read(req.body.usuario)
        .then((ret) => {
          if (ret.usuario !== req.body.usuario || ret.senha !== req.body.senha) {
            res.redirect(req.get('referer'))
            return
          }

          req.session.usuario = req.body.usuario
          res.redirect(302, '/minhaconta')
        }).catch(err => {
          console.log('Erro buscar usuario ' + err)
          res.redirect(req.get('referer'))
        })
    }
} exports.default = ClienteController;
