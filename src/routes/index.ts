import  { Router, Request, Response, response} from 'express'
import { rename } from 'fs'
import { parse } from 'path'
import * as homeController from '../controllers/homeController'
import * as infoController from '../controllers/infoController'
import * as userController from '../controllers/userController'

const router = Router()

router.get('/',homeController.home) 

router.get('/contato',infoController.contato)

router.get('/sobre',infoController.sobre)

//CRIAR UMA ROTA CHAMADA NOME
router.get('/nome',userController.nome)

router.get('/formulario',userController.formulario)

//CRIANDO A ROTA APENAS EXIBIR A IDADE

router.get('/idade',userController.idade)

router.post('/idade-resultado',userController.idadeResultado)

router.get('/login',userController.login)

router.post('/login-resultado',userController.loginResultado)

export default router