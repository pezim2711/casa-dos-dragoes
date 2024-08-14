const botoesCarrossel = document.querySelectorAll(".botao");

const imagens = document.querySelectorAll(".imagem");

const informacoes = document.querySelectorAll(".informacoes")

botoesCarrossel.forEach((botao, indice) => {

    botao.addEventListener("click", () => {

        DesativarBotaoSelecionado();

        MarcarBotaoSelecionado(botao);


        EsconderImagemAtiva();

        MostrarImagemDeFundo(indice);

        EsconderInformacoesAtivas();


        MostrarInformacoes(indice);

    });


});

function MarcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function MostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function EsconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function MostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function DesativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
