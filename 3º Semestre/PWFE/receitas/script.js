const url = 'https://receitasapi-b-2025.vercel.app/';
const receitas = [];

getReceitas();

function getReceitas() {
    fetch(`${url}receitas`)
        .then(response => response.json())
        .then(data => {
            data.forEach(receita => {
                receitas.push(receita);
            });
            renderReceitas();
        })
        .catch(error => {
            console.error('Erro ao buscar receitas:', error);
        });
}

function renderReceitas() {
    const main = document.querySelector('main');

    main.innerHTML = ''; 

    receitas.forEach(r => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${r.img}" alt="${r.nome}">
            <div class="card-content">
                <h3>${r.nome}</h3>
            </div>
        `;

        main.appendChild(card);
    });
}