// Importando os livros
const livros = require('./database')
//console.log(livros)

// 1. Pegar um input do usuário

const readline = require('readline-sync')

// Permite que se faça uma pergunta para realizar a entrada dos dados

const entradaInicial = readline.question("Deseja buscar um livro? (S/N)")

// Se for sim, mostrar as categorias disponíveis. Perguntar qual categoria ela escolhe
// Se não, mostrar todos os livros em ordem crescente pela quantodade de páginas

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    
    const livroCategoria = livros.filter(livro => console.table(livro.categoria))
    //console.table(livroCategoria)
    
    const entradaCategoria = readline.question("Qual categoria você escolhe?")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}
else{
    
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
    
}