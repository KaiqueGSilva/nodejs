//TIPANDO O TITULO E ANO DO FILME
type Movie = [
    title: string,
    year: number
]

//CRIANDO O MODELO DE BANCO DE DADOS DE FILME
const movies = [
    {title:'Cinderela Bahiana', year: 1998},
    {title: 'Rubber',year: 2010},
    {title: 'Tainá', year:2010}
]

//SIMULANDO UMA CONTA CONSULTA DO BANCO DE DADOS
export const Movie = {
    getAll: () =>{
        return movies
    }
}