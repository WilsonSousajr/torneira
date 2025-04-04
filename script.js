const perguntas = [
    {
        id: "q1",
        texto: "Escolha um filme",
        opcoes: [
            { valor: 1, texto: "Star Wars: O Império Contra-Ataca (Episódio V)" },
            { valor: 2, texto: "Jogos Vorazes - Em chamas" },
            { valor: 3, texto: "Sociedade dos Poetas Mortos" },
            { valor: 4, texto: "The Piano Teacher" },
            { valor: 5, texto: "The Purge" },
            { valor: 6, texto: "Wall-E" },
            { valor: 7, texto: "Curtindo a Vida Adoidado" },
            { valor: 8, texto: "Forrest Gump" },
            { valor: 9, texto: "There Will Be Blood" },
            { valor: 10, texto: "Shrek 2" },
            { valor: 11, texto: "Homem-Aranha: Através do Aranhaverso" },
            { valor: 12, texto: "Oppenheimer" },
            { valor: 13, texto: "Tudo Em Todo Lugar Ao Mesmo Tempo" },
            { valor: 14, texto: "Homem Aranha 2 (aquele do Electro)" },
            { valor: 15, texto: "A Viagem de Chihiro" },
            { valor: 16, texto: "The Thing (1982)" },
            { valor: 17, texto: "La La Land" },
            { valor: 18, texto: "Oldboy" },
            { valor: 19, texto: "Jogos Mortais" },
            { valor: 20, texto: "Memories Of Murder" },
            { valor: 21, texto: "Gente Grande" },
        ]
               
    },
    {
        id: "q2",
        texto: "Escolha uma música",
        opcoes: [
            { valor: 1, texto: "Lagartixa tropical (ahhhhhh o meu creme dental…)" },
            { valor: 2, texto: "Ideologia - Cazuza" },
            { valor: 3, texto: "Would That I - Hozier" },
            { valor: 4, texto: "Instant Crush - Daft Punk" },
            { valor: 5, texto: "slow dancing in the dark - joji" },
            { valor: 6, texto: "From the start - Laufey" },
            { valor: 7, texto: "Life Is A Highway - Rascal Flatts (daquela cena do filme Carros quando o Relâmpago McQueen tá indo embora da primeira corrida)" },
            { valor: 8, texto: "Samurai - Djavan" },
            { valor: 9, texto: "Ode to the Mets - The Strokes" },
            { valor: 10, texto: "Vicios e Virtudes - Charlie Brown Jr." },
            { valor: 11, texto: "Temporal - Marina Sena" },
            { valor: 12, texto: "Eminencia Parda - Emicida" },
            { valor: 13, texto: "Reflections - The Neighborhood" },
            { valor: 14, texto: "Pagodão In The USA" },
            { valor: 15, texto: "A Pearl - Mitski" },
            { valor: 16, texto: "Don't Talk To Strangers - Dio" },
            { valor: 17, texto: "Folhetim - Gal Costa" },
            { valor: 18, texto: "Alter Ego - Tame Impala" },
            { valor: 19, texto: "Caju - Liniker" },
            { valor: 20, texto: "Say Amen (Saturday Night) - Panic! At The Disco" },
            { valor: 21, texto: "Numb" },
        ]
        
        
    },
    {
        id: "q3",
        texto: "Escolha um jogo",
        opcoes: [
            { valor: 1, texto: "Jogo da cobrinha" },
            { valor: 2, texto: "Coup" },
            { valor: 3, texto: "Minecraft" },
            { valor: 4, texto: "Rainbow Six Siege" },
            { valor: "5, 15", texto: "lolzin" },
            { valor: "6, 21", texto: "Hollow Knight" },
            { valor: 7, texto: "Rhythm Heaven Megamix do 3DS" },
            { valor: "8, 20", texto: "Portal 2" },
            { valor: 9, texto: "The Witcher 3" },
            { valor: 10, texto: "Pokémon SoulSilver" },
            { valor: 11, texto: "Qualquer jogo de carro" },
            { valor: 12, texto: "Dying Light" },
            { valor: 13, texto: "Do bicho" },
            { valor: 14, texto: "Tigrinho" },
            { valor: 16, texto: "Night In The Woods" },
            { valor: 17, texto: "MarioKart" },
            { valor: 18, texto: "CS:GO (o bom no caso)" },
            { valor: 19, texto: "Bloons TD 6" },
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
        1: 'Luísa Barros',
        2: 'Danilo Alves Ribeiro',
        3: 'Lucca',
        4: 'Natália',
        5: 'Kenji',
        6: 'Lázaro',
        7: 'Sill',
        8: 'João Luz',
        9: 'Henrique',
        10: 'Davi Brito',
        11: 'Gabriella K',
        12: 'HotWillis',
        13: 'Valquíria',
        14: 'Samara',
        15: 'Gabriela',
        16: 'Gustavo Ávila',
        17: 'Luisa',
        18: 'Gustavo Ramos',
        19: 'Pedro Braga',
        20: 'Arthur',
        21: 'Marcel (O Cruel)',
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
