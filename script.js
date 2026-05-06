// Função para mostrar as soluções
function mostrarSolucoes() {

    const solucoes = [
        "Maior investimento em tecnologia nas escolas públicas",
        "Valorização salarial e formação continuada dos professores",
        "Melhoria na infraestrutura das escolas rurais",
        "Ampliação de programas de combate à evasão escolar",
        "Mais transparência na aplicação de recursos públicos"
    ];

    const lista = document.getElementById("lista-solucoes");
    const mensagem = document.getElementById("msg-solucoes");

    // Limpa a lista antes de adicionar novamente
    lista.innerHTML = "";

    // Adiciona cada solução na lista
    solucoes.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        li.style.marginBottom = "8px";
        lista.appendChild(li);
    });

    // Muda a mensagem
    mensagem.textContent = "Confira abaixo algumas possíveis soluções:";
}
