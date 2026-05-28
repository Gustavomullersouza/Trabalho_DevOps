const paginas = document.querySelectorAll(".pagina");

const contador = document.getElementById("contador");

let paginaAtual = 0;

function atualizarContador() {

    contador.innerText =
        `Página ${paginaAtual + 1} de ${paginas.length}`;
}

function mostrarPagina(indice) {

    paginas.forEach((pagina) => {
        pagina.classList.remove("ativa");
    });

    paginas[indice].classList.add("ativa");

    atualizarContador();
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

    atualizarContador();

    console.log("[INFO] Livro do grupo carregado");

    console.warn("[WARN] Monitoramento iniciado");

    console.error("[ERROR] Erro simulado para demonstração");

    setInterval(() => {

        console.log("[INFO] Sistema funcionando normalmente");

    }, 10000);
};