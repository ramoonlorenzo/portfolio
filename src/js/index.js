const button = document.querySelector(".btn-mostrar-projetos");
const inactiveProject = document.querySelectorAll(".projeto:not(.ativo)");

button.addEventListener("click", () => {
  mostrarMaisProjetos();

  esconderBotao();
});

function esconderBotao() {
  button.classList.add("remover");
}

function mostrarMaisProjetos() {
  inactiveProject.forEach((projetoInativo) => {
    projetoInativo.classList.toggle("ativo");
  });
}
