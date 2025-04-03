document.addEventListener('DOMContentLoaded', function () {
    const resultado = JSON.parse(localStorage.getItem('resultado'));

    if (resultado && resultado.pessoas && resultado.pessoas.length > 0) {
        exibirResultado(resultado.pessoas);
        salvarResultado(resultado.pessoas);
    } else {
        console.warn("Nenhum resultado encontrado no localStorage.");
    }
});

function exibirResultado(pessoas) {
    const imagens = {
        'Luísa Barros': './images/1.jpeg',
        'Danilo Alves Ribeiro': './images/2.jpg',
        'Lucca': './images/3.JPG',
        'Natália': './images/5.jpg',
        'Kenji': './images/4.jpg',
        'Lázaro': './images/6.jpg',
        'Sill': './images/7.jpeg',
        'João Luz': './images/8.jpg',
        'Henrique': './images/9.jpg',
        'Davi Brito': './images/DaviBrito.jpg',
        'Gabriella K': './images/11.jpeg',
        'HotWillis': './images/12.jpg',
        'Valquíria': './images/13.jpeg',
        'Samara': './images/14.jpg',
        'Gabriela': './images/15.jpg',
        'Gustavo Ávila': './images/16.jpg',
        'Luisa': './images/17.jpeg',
        'Gustavo Ramos': './images/18.png',
    };

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = pessoas.map(pessoa => `
        <div class="resultado-container">
            <h3><strong>${pessoa}</strong></h3>
            <img src="${imagens[pessoa] || './images/default.jpg'}" alt="${pessoa}" class="torneira-imagem">
        </div>
    `).join('');

    resultadoDiv.style.display = 'block';
}

function salvarResultado(pessoas) {
    const nome = localStorage.getItem('nome') || "Anônimo";
    const matricula = localStorage.getItem('matricula') || "Não informado";

    const dados = {
        nome,
        matricula,
        pessoas
    };

    console.log("Enviando dados para Google Sheets:", dados);

    fetch("https://script.google.com/macros/s/AKfycby7RJot_UhRSwnNiDlEM9bID9HXB8XQH1Lba-mB7ntDEjpLd2S8KZfHgMNFc52KfF4l/exec", {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(msg => console.log("Resposta do Google Sheets:", msg))
    .catch(err => console.error("Erro ao salvar resultado:", err));
}