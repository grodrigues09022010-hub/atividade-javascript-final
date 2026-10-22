
let cards = document.querySelectorAll(".tarefa");

cards.forEach(function (card) {
    let botaoAvancar = card.querySelector(".botao-avancar");
    let indicadorEstado = card.querySelector('.indicador-estado')
    let estado = "pendente"


    botaoAvancar.addEventListener("click", function () {

        if (botaoAvancar.textContent === "Iniciar tarefa") {
            botaoAvancar.textContent = "Concluir tarefa";
            indicadorEstado.textContent = "Em andamento"
            card.classList.remove("tarefa-pendente", "tarefa-concluida")
            card.classList.add("tarefa-andamento")
            indicadorEstado.classList.remove("estado-pendente", "estado-concluido")
            indicadorEstado.classList.add("estado-andamento")


        } else if (botaoAvancar.textContent === "Concluir tarefa") {
            botaoAvancar.textContent = "Recomeçar tarefa";
            indicadorEstado.textContent = "Concluída"
            card.classList.remove("tarefa-andamento", "tarefa-pendente")
            card.classList.add("tarefa-concluida")
            indicadorEstado.classList.remove("estado-andamento", "estado-pendente")
            indicadorEstado.classList.add("estado-concluida")

        } else {
            botaoAvancar.textContent = "Iniciar tarefa";
            indicadorEstado.textContent = "Pendente"
            card.classList.remove("tarefa-concluida", "tarefa-pendente")
            card.classList.add("tarefa-pendente")
            indicadorEstado.classList.remove("estado-concluida", "estado-pendente")
            indicadorEstado.classList.add("estado-pendente")

        }
        atualizarContadorTarefas()

    });
});

const contadorTarefas = document.querySelector("#contador-tarefas")

function atualizarContadorTarefas() {
    let quantidade = 0;
    cards.forEach(function (card) {
        if (card.classList.contains("tarefa-concluida")) {
            quantidade++
        }
    })

    contadorTarefas.textContent = `${quantidade} de ${cards.length} tarefas concluidas`;

}

const fraseAleatoria = document.querySelector(".mensagem-motivacional")
const botaoAleatoria = document.querySelector(".botao-motivacao")

const ideiaAleatoria = [
    {
        fraseAleatoria:"Grandes aprendizados começam com pequenos passos."
    },
    {
        fraseAleatoria:"Cada exercício é uma oportunidade de descobrir algo novo."
    },
    {
        fraseAleatoria:"Com dedicação e prática, você chega mais longe."
    },
    {
        fraseAleatoria:"Errar faz parte do caminho de quem está aprendendo."
    },
    {
        fraseAleatoria:"Uma tarefa de cada vez: seu esforço está construindo resultados."
    },
    {
        fraseAleatoria:"Continue curioso e celebre cada progresso nos estudos."
    },
]

function exibirFrase() {
    const indiceAleatorio = Math.floor(Math.random() * ideiaAleatoria.length)

    const fraseEscolha = ideiaAleatoria[indiceAleatorio]

    fraseAleatoria.textContent = fraseEscolha.fraseAleatoria
}

botaoAleatoria.addEventListener('click', exibirFrase)

exibirFrase()