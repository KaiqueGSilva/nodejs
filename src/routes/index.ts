import  { Router, Request, Response, response} from 'express'
import { rename } from 'fs'
import { parse } from 'path'

const router = Router()

router.get('/',(req:Request,res:Response) =>{
    let idade: number = 15
    let exibirIdade: boolean = false

    if(idade >= 18){
        exibirIdade = true
    }


    res.render('pages/home',{
        nome:'Vinicius',
        exibirIdade,
        movies:[
            {title:'Cinderela Bahiana', year: 1998},
            {title: 'Rubber',year: 2010},
            {title: 'Tainá', year:2010}
        ]
    })
})

router.get('/contato',(req:Request,res:Response) =>{
    res.render('pages/contato')
})


router.get('/sobre',(req:Request, res:Response) =>{
    res.render('pages/sobre')
})

//CRIAR UMA ROTA CHAMADA NOME
router.get('/nome',(req:Request,res:Response) =>{

    let nome: string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})

router.get('/formulario',(req:Request,res:Response)=>{

    let nome: string = req.query.nome as string
    let idade = req.query.idade
    let telefone = req.query.telefone
    let endereco: string = req.query.endereco as string

    res.render('pages/formulario',{
        nome
    })

})

//CRIANDO A ROTA APENAS EXIBIR A IDADE

router.get('/idade',(req:Request,res:Response) =>{
    res.render('pages/idade')
})

router.post('/idade-resultado',(req:Request,res:Response) =>{

    let mostrarIdade: boolean = false
    let idade : number = 0

    
    //anoAtual - dataNascimento

    if(req.body.anoNascimento) {

        let anoNascimento: number = parseInt(req.body.anoNascimento as string)

        //Pegar o ano atual

        let anoAtual: number = new Date().getFullYear()

        idade = anoAtual - anoNascimento
        mostrarIdade = true

    }

    res.render('pages/idade',{
        idade,
        mostrarIdade
    })

})

router.get('/login',(req:Request,res:Response) =>{
    res.render('pages/login')
})

router.post('/login-resultado',(req:Request,res:Response) => {


    let email: string = req.body.email as string
    let senha: string = req.body.senha
    res.render('pages/login-resultado',{
        email,
        senha
    })

})

export default router