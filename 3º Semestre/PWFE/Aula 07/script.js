const url = 'https://receitasapi-b-2025.vercel.app/';
const receitas = [];

getReceitas();

function getReceitas() {
    fetch(`${url}receitas`)
        .then(response => response.json())
        .then(data => {
            receitas.length = 0; // limpa array (evita duplicar)

            data.forEach(receita => {
                receitas.push(receita);
            });

            renderReceitas();
        })
        .catch(error => console.error('Erro:', error));
}

function renderReceitas() {
    const main = document.querySelector('main');
    main.innerHTML = ''; // limpa tela antes de renderizar

    receitas.forEach(r => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${r.img}" alt="${r.nome}">
            <h3>${r.nome}</h3>
        `;

        main.appendChild(card);
    });
}

/* BOTÃO + NOVA RECEITA */
function abrirModal() {
    const nome = prompt("Digite o nome da receita:");
    const img = prompt("Cole o link da imagem:");

    // validação simples
    if (!nome || !img) {
        alert("Preencha todos os campos!");
        return;
    }

    const novaReceita = {
        nome: nome,
        img: img
    };

    fetch(`${url}receitas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaReceita)
    })
    .then(() => {
        getReceitas(); // atualiza automaticamente
    })
    .catch(error => console.error('Erro ao adicionar:', error));
}
