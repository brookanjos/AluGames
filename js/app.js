let numerosDeJogos = 1
function alterarStatus(id) {
    let confirmar = prompt('Digite "confirmar" para concluir essa ação.')
    if (confirmar == "confirmar") {
        let li = document.getElementById('game-' + id);
        let div = document.getElementById('game-' + id);
        let botao = li.querySelector(':scope > a');
        let jogo = div.querySelector(':scope > div');
        if (botao.classList.contains("dashboard__item__button--return")) {
            numerosDeJogos--
            jogo.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.innerHTML = "alugar";
        }
        else {
            numerosDeJogos++
            botao.classList.add("dashboard__item__button--return");
            jogo.classList.add("dashboard__item__img--rented");
            botao.innerHTML = "devolver";
        }
    }
    else {
        alert("Transição recusada.")
    }
    console.log(numerosDeJogos)
}