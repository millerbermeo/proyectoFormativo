// Function definition
function menuLateral(event) {
  let barra_lateral = document.querySelector('#barra-lateral');

  // Stop event propagation
  event.stopPropagation();

  if (barra_lateral.classList.contains('active')) {
    barra_lateral.classList.remove('active');
  } else {
    barra_lateral.classList.add('active');
  }
}

// Add the click event listener to #menu-hamburguesa
let mm = document.querySelector('#menu-hamburguesa');
mm.addEventListener("click", menuLateral);

const abrirModalBtn = document.getElementById("abrirModal");
const cerrarModalBtn = document.getElementById("cerrarModal");
const miModal = document.getElementById("miModal");

abrirModalBtn.addEventListener("click", () => {
  miModal.classList.remove("hidden");
});

cerrarModalBtn.addEventListener("click", () => {
  miModal.classList.add("hidden");
});
