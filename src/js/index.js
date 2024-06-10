const button = document.querySelector(".btn-mostrar-projetos");

let quantidadeDeProjetos = 4;

document.addEventListener("DOMContentLoaded", function () {
  mostrarProjetos(quantidadeDeProjetos);
});

button.addEventListener("click", mostrarMaisProjetos);

function mostrarProjetos(quantidadeDeProjetos) {
  const projetos = document.querySelectorAll(".projeto");

  for (let i = 0; i < quantidadeDeProjetos; i++) {
    if (projetos[i]) {
      projetos[i].classList.add("ativo");
    }
  }
}

function mostrarMaisProjetos() {
  const quantidadeTotalProjetos = document.querySelectorAll(".projeto").length;

  quantidadeDeProjetos += 2;

  mostrarProjetos(quantidadeDeProjetos);

  if (quantidadeDeProjetos >= quantidadeTotalProjetos) {
    button.classList.add("remover");
  }
}
