import {Request, Response} from 'express'

export const home = ((req:Request,res:Response) => {
    
    let idade: number = 15
    let exibirIdade: boolean = false

    if(idade >= 18){
        exibirIdade = true
    }


    res.render('pages/home',{
        nome:'Vinicius',
        exibirIdade,
    })
})