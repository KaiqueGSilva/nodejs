//COLOCAR NOME, IDADE E IDADE-RESULTADO
import {Request, Response} from 'express'

export const nome = ((req:Request,res:Response) => {
    
    let nome: string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})

export const idade = ((req:Request,res:Response) => {
    res.render('pages/idade')
})

export const idadeResultado = ((req:Request,res:Response) => {

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

export const formulario = ((req:Request,res:Response) => {
    
    let nome: string = req.query.nome as string
    let idade = req.query.idade
    let telefone = req.query.telefone
    let endereco: string = req.query.endereco as string

    res.render('pages/formulario',{
        nome
    })

})

export const login = ((req:Request,res:Response) => {
    res.render('pages/login')
})

export const loginResultado = ((req:Request,res:Response) => {
    
    let email: string = req.body.email as string
    let senha: string = req.body.senha
    res.render('pages/login-resultado',{
        email,
        senha
    })

})

