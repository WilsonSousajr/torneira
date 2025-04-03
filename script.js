const perguntas = [
    {
        id: "q1",
        texto: "Escolha um filme",
        opcoes: [
            { valor: "a", texto: "Star Wars: O Império Contra-Ataca (Episódio V)" },
            { valor: "e", texto: "The Purge" },
            { valor: "f", texto: "Wall-E" },
            { valor: "p", texto: "The Thing (1982)" },
            { valor: "o", texto: "A Viagem de Chihiro" },
            { valor: "m", texto: "Tudo Em Todo Lugar Ao Mesmo Tempo" },
            { valor: "g", texto: "Curtindo a Vida Adoidado" },
            { valor: "l", texto: "Oppenheimer" },
            { valor: "b", texto: "Jogos Vorazes - Em chamas" },
            { valor: "c", texto: "Sociedade dos Poetas Mortos" },
            { valor: "d", texto: "The Piano Teacher" },
            { valor: "h", texto: "Forrest Gump" },
            { valor: "n", texto: "Homem Aranha 2 (aquele do Electro)" },
            { valor: "j", texto: "Shrek 2" },
            { valor: "i", texto: "There Will Be Blood" },
            { valor: "k", texto: "Homem-Aranha: Através do Aranhaverso" },
        ]
    },
    {
        id: "q2",
        texto: "Escolha uma música",
        opcoes: [
            { valor: "b", texto: "Ideologia - Cazuza" },
            { valor: "h", texto: "Samurai - Djavan" },
            { valor: "i", texto: "Ode to the Mets - The Strokes" },
            { valor: "p", texto: "Don't Talk To Strangers - Dio" },
            { valor: "o", texto: "A Pearl - Mitski" },
            { valor: "j", texto: "Vicios e Virtudes - Charlie Brown Jr." },
            { valor: "m", texto: "Reflections - The Neighborhood" },
            { valor: "c", texto: "Would That I - Hozier" },
            { valor: "d", texto: "Instant Crush - Daft Punk" },
            { valor: "g", texto: "Life Is A Highway - Rascal Flatts (daquela cena do filme Carros quando o Relâmpago McQueen tá indo embora da primeira corrida)" },
            { valor: "e", texto: "slow dancing in the dark - joji" },
            { valor: "f", texto: "From the start - Laufey" },
            { valor: "n", texto: "Pagodão In The USA" },
            { valor: "k", texto: "Temporal - Marina Sena" },
            { valor: "a", texto: "Lagartixa tropical (ahhhhhh o meu creme dental…)" },
            { valor: "l", texto: "Eminencia Parda - Emicida" },
        ]
    },
    {
        id: "q3",
        texto: "Escolha um jogo",
        opcoes: [
            { valor: "g", texto: "Rhythm Heaven Megamix do 3DS" },
            { valor: "b", texto: "Coup" },
            { valor: "c", texto: "Minecraft" },
            { valor: "i", texto: "The Witcher 3" },
            { valor: "l", texto: "Dying Light" },
            { valor: "d", texto: "Rainbow Six Siege" },
            { valor: "m", texto: "Do bicho" },
            { valor: "e, o", texto: "lolzin" },
            { valor: "n", texto: "Tigrinho" },
            { valor: "k", texto: "Qualquer jogo de carro" },
            { valor: "p", texto: "Night In The Woods" },
            { valor: "a", texto: "Jogo da cobrinha" },
            { valor: "h", texto: "Portal 2" },
            { valor: "f", texto: "Hollow Knight" },
            { valor: "j", texto: "Pokémon SoulSilver" },
        ]
    }
];

function embaralhar(array) {
    return array.sort(() => Math.random() - 0.5);
}
function criarFormulario() {
    const form = document.getElementById('questionario');
    form.innerHTML = '';

    const perguntasMisturadas = embaralhar([...perguntas]);

    perguntasMisturadas.forEach((pergunta, idx) => {
        const div = document.createElement('div');
        div.className = 'question';

        const numero = idx + 1;
        const alternativasEmbaralhadas = embaralhar([...pergunta.opcoes]);

        div.innerHTML = `<p>${numero}. ${pergunta.texto}</p>`;

        alternativasEmbaralhadas.forEach(opcao => {
            const required = idx === 0 ? 'required' : '';
            div.innerHTML += `
                <label>
                    <input type="radio" name="${pergunta.id}" value="${opcao.valor}" ${required}>
                    ${opcao.texto}
                </label><br>`;
        });

        form.appendChild(div);
    });

    const botao = document.createElement('button');
    botao.type = 'submit';
    botao.textContent = 'Descobrir Meu Padrinho';
    form.appendChild(botao);
}

function analisarRespostas(respostas) {
    const correspondencia = {
        'a': 'Luísa Barros',
        'b': 'Danilo Alves Ribeiro',
        'd': 'Natália',
        'c': 'Lucca',
        'e': 'Kenji',
        'f': 'Lázaro',
        'g': 'Sill',
        'h': 'João Luz',
        'i': 'Henrique',
        'j': 'Davi Brito',
        'k': 'Gabriella K',
        'l': 'HotWillis',
        'm': 'Valquíria',
        'n': 'Samara',
        'o': 'Gabriela',
        'p': 'Gustavo Ávila',
    };

    let escolhidos = new Set();
    for (let pergunta in respostas) {
        if (respostas[pergunta]) {
            let valores = respostas[pergunta].split(',');
            valores.forEach(v => {
                const pessoa = correspondencia[v.trim()];
                if (pessoa) escolhidos.add(pessoa);
            });
        }
    }

    return { pessoas: Array.from(escolhidos) };
}

document.getElementById('questionario').addEventListener('submit', function(e) {
    e.preventDefault();

    const respostas = {};
    perguntas.forEach(pergunta => {
        respostas[pergunta.id] = document.querySelector(`input[name="${pergunta.id}"]:checked`)?.value || null;
    });

    const resultado = analisarRespostas(respostas);
    localStorage.setItem('resultado', JSON.stringify(resultado));
    window.location.href = 'resultado.html';
});

criarFormulario();
