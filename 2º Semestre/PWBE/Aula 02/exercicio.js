const times = [
    {
        "nome": "Palmeiras",
        "estado": "São Paulo",
        "fundação": "26 de agosto de 1914",
        "diretor": "Anderson Barros",
        "brasão": "https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2020/06/22121713/escudo-palmeiras-atual.png",
        "vitorias": 10,
        "derrotas": "3",
        "empates": 3
    },
    {
        "nome": "Corinthians",
        "estado": "São Paulo",
        "fundação": "1 de setembro de 1910",
        "diretor": "Dorival Júnior",
        "brasão": "https://s3.static.brasilescola.uol.com.br/be/2023/09/1-escudo-do-corinthians.jpg",
        "vitorias": 5,
        "derrotas": "6",
        "empates": 7
    },
    {
        "nome": "São Paulo",
        "estado": "São Paulo",
        "fundação": "25 de janeiro de 1930",
        "diretor": "Julio Casares",
        "brasão": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png",
        "vitorias": 6,
        "derrotas": "5",
        "empates": 7
    }
]

times.forEach((times) => {
    if(times.nome === "São Paulo"){
        console.log((times.vitorias * 3) + times.empates);
    }
})