// Função para deixar o site em tela cheia
document.addEventListener('click', () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
});





const imagensPastas = {
    g1: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg'],
    g2: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.png', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg', '41.jpg'],
    g3: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg,', '36.jpg', '37.jpg'],
    g4: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.png', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.webp', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg'],
    g5: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg']
};


const tempoTrocaImagem = 800; 
const tempoTrocaGrupo = 10000; 

let intervalosAtivos = {};

function trocarImgs(sessaoId, grupo) {
    pararOutrasTrocas(sessaoId);

    const galeria = document.querySelector(`#${sessaoId} .galeria`);
    if (!galeria) return;

    const imagens = imagensPastas[grupo];
    const imgs = galeria.querySelectorAll('.img-galeria');
    let indiceAtual = 0;

    function trocarImagem(indice) {
        if (indice < imgs.length) {
            imgs[indice].src = `img/${grupo}/${imagens[indiceAtual % imagens.length]}`;
            indiceAtual++;
            intervalosAtivos[sessaoId] = setTimeout(() => trocarImagem(indice + 1), tempoTrocaImagem);
        } else {
            intervalosAtivos[sessaoId] = setTimeout(() => trocarImagem(0), tempoTrocaGrupo);
        }
    }

    trocarImagem(0);
}

function pararOutrasTrocas(sessaoAtual) {
    Object.keys(intervalosAtivos).forEach(sessaoId => {
        if (sessaoId !== sessaoAtual) {
            clearTimeout(intervalosAtivos[sessaoId]);
            delete intervalosAtivos[sessaoId];
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
// Função para parar todas as músicas
function pararMusicas() {
    const musicas = document.querySelectorAll('audio');
    musicas.forEach(musica => {
        musica.pause();
        musica.currentTime = 0;
    });
}

// Função para tocar uma música específica, parada qualquer outra
function tocarMusica(id) {
    const musica = document.querySelector(`#${id}`);
    if (musica) {
        if (!musica.paused) return;
        pararMusicas();
        musica.currentTime = 0;
        musica.play();
    }
}

tocarMusica('musica0');

    const main = document.querySelector('.main');

    main.addEventListener('scroll', function() {
        // Pega a posição de rolagem do contêiner .main
        let scroll = main.scrollTop;
        let alturaTela = window.innerHeight;

        if (scroll >= alturaTela && scroll < 2 * alturaTela) {
            tocarMusica('musica1');
            trocarImgs('fundo_g1', 'g1'); 
            pararOutrasTrocas('fundo_g1');

        }
        else if (scroll >= alturaTela && scroll < 3 * alturaTela){
            tocarMusica('musica2');
            trocarImgs('fundo_g2', 'g2');
            pararOutrasTrocas('fundo_g2');

        }
        else if (scroll >= alturaTela && scroll < 4 * alturaTela){
            tocarMusica('musica3');
            trocarImgs('fundo_g3', 'g3'); 
            pararOutrasTrocas('fundo_g3');

        }
        else if (scroll >= alturaTela && scroll < 5 * alturaTela){
            tocarMusica('musica4');
            trocarImgs('fundo_g4', 'g4'); 
            pararOutrasTrocas('fundo_g4');
   
        }
        else if (scroll >= alturaTela && scroll < 7 * alturaTela){
            tocarMusica('musica5');
            trocarImgs('fundo_g5', 'g5'); 
            pararOutrasTrocas('fundo_g5');
        }
        else{
            tocarMusica('musica0');
        }
    });
});



function verMais(id) {
    const sessao = document.getElementById(id);

    const ocultarElementos = sessao.querySelectorAll(".sumir");

    const retanguloM = sessao.querySelector(".retanguloM");
    retanguloM.style.transition = "display 0.1s ease";
    retanguloM.style.display = "none";


    const retanguloF = sessao.querySelector(".retanguloF");
    retanguloF.style.height = "95.25vh" 
    ocultarElementos.forEach(elemento => {
        console.log(elemento);
        elemento.style.transition = "display 0.1s ease";
        elemento.style.display = "none";
    });
    
    const transparente = sessao.querySelector("#transparente");
    transparente.style.display = "flex";

    sessao.querySelector(".explicacao").style.display = "block";
}

function ocultar(id) {
    const sessao = document.getElementById(id);

    const ocultarElementos = sessao.querySelectorAll(".sumir");
    
    const retanguloM = sessao.querySelector(".retanguloM");
    retanguloM.style.display = "flex";

    const retanguloF = sessao.querySelector(".retanguloF");
    retanguloF.style.height = "85.07vh";

    const transparente = sessao.querySelector("#transparente");
    transparente.style.display = "none";

    ocultarElementos.forEach(elemento => {
        console.log(elemento);
        elemento.style.removeProperty("display");
    });

    sessao.querySelector(".explicacao").style.display = "none";
}

