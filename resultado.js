document.addEventListener('DOMContentLoaded', function() {
    const resultado = JSON.parse(localStorage.getItem('resultado'));
    if (resultado) {
        exibirResultado(resultado.pessoas);
    }
});

function exibirResultado(pessoas) {
    const imagens = {
        'Luísa Barros': './images/1.jpeg',
        'Danilo Alves Ribeiro': './images/2.jpg',
        'Lucca': './images/3.JPG',
        'Natália':'./images/5.jpg',
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
    };

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = pessoas.map(pessoa => `
        <div class="resultado-container">
            <h3><strong>${pessoa}</strong></h3>
            <img src="${imagens[pessoa]}" alt="${pessoa}" class="torneira-imagem">
        </div>
    `).join('');

    resultadoDiv.style.display = 'block';
}
