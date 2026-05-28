const paginas = document.querySelectorAll(".pagina");

let paginaAtual = 0;

function mostrarPagina(indice) {

    paginas.forEach((pagina) => {
        pagina.classList.remove("ativa");
    });

    paginas[indice].classList.add("ativa");
}

function proximaPagina() {

    if (paginaAtual < paginas.length - 1) {
        paginaAtual++;

        mostrarPagina(paginaAtual);

        console.log("[INFO] Próxima página aberta");
    } else {

        console.warn("[WARN] Última página atingida");
    }
}

function paginaAnterior() {

    if (paginaAtual > 0) {
        paginaAtual--;

        mostrarPagina(paginaAtual);

        console.log("[INFO] Página anterior aberta");
    } else {

        console.warn("[WARN] Primeira página atingida");
    }
}

window.onload = () => {

    console.log("[INFO] Livro do grupo carregado com sucesso");

    setInterval(() => {

        console.log("[INFO] Sistema funcionando normalmente");

    }, 10000);
};