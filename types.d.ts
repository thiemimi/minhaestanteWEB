interface Resenha {
    id: number,
    tituloResenha: string,
    conteudoResenha: string,
    nota: number,
    Estante: Estante
}

interface Estante{
    id: number,
    tituloLivro: string,
    genero: string,
    autor: string,
    icone: string 
}