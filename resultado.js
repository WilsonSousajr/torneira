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
        'Henrique': './images/9.JPG',
        'Davi Brito': './images/DaviBrito.png',
        'Gabriella K': './images/11.jpeg',
        'HotWillis': './images/12.jpg',
        'Valquíria': './images/13.jpeg',
        'Samara': './images/14.jpg',
        'Gabriela': './images/15.jpg',
        'Gustavo Ávila': './images/16.jpg',
        'Luisa': './images/17.jpeg',
        'Gustavo Ramos': './images/18.png',
        'Pedro Braga': './images/19.jpg',
        'Arthur': './images/20.jpeg',
        'Marcel (O Cruel)': './images/21.png',
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
        nome: nome,
        matricula: matricula,
        padrinhos: pessoas.join(", ")
    };

    console.log("Enviando dados para Supabase:", dados);

    fetch("https://atvifupwwlmlvczqcgeu.supabase.co/rest/v1/respostas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0dmlmdXB3d2xtbHZjenFjZ2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MjE3ODEsImV4cCI6MjA1OTI5Nzc4MX0.X0U2_XpBy7faQiwt35WoucJhb3vqJwkFgMkZ7LwMG44",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0dmlmdXB3d2xtbHZjenFjZ2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MjE3ODEsImV4cCI6MjA1OTI5Nzc4MX0.X0U2_XpBy7faQiwt35WoucJhb3vqJwkFgMkZ7LwMG44",
            "Prefer": "return=representation"
        },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(res => console.log("Dados salvos no Supabase:", res))
    .catch(err => console.error("Erro ao salvar no Supabase:", err));
}
