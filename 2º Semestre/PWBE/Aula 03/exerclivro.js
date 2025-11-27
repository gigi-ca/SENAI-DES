const livros = [
    {
        "Titulo": "O Amor não é Óbvio",
        "Autor": "Elayne Baeta",
        "Páginas": 392,
        "Gênero": "Romance",
        "Protagonista": "Irís Pêssego"
    },
    {
        "Titulo": "Uma família feliz",
        "Autor": "Raphael Montes",
        "Páginas": 352,
        "Gênero": "Suspense psicológico e ficção",
        "Protagonista": "Eva"
    },
    {
        "Titulo": "Suicidas",
        "Autor": "Raphael Montes",
        "Páginas": 342,
        "Gênero": "Suspense, ficção e mistério",
        "Protagonista": "Alê"
    },
    {
        "Titulo": "Jantar Secreto",
        "Autor": "Raphael Montes",
        "Páginas": 368,
        "Gênero": "Suspense e ficção",
        "Protagonista": "Hugo"
    },
    {
        "Titulo": "Vermelho, Branco e Sangue azul",
        "Autor": "Casey McQuiston",
        "Páginas": 392,
        "Gênero": "Romance e ficção",
        "Protagonista": "Alex Claremont-Diaz"
    }
];

livros.forEach((livro) => {
    if(livro.Titulo === "O Amor não é Óbvio"){
        console.log(livro);
    }
});

var i = 0;
livros.forEach((livro, indice) => {
    if(livro.Titulo === "O Amor não é Óbvio"){
        livros.splice(indice,1);
    }
    i++;
});
console.log(livros);

livros.push( {"Titulo": "Livro 3",
    "Autor": "Beltrano",
    "Páginas": 345,
    "Gênero": "Suspense",
    "Protagonista": "Fulano"
}
);
