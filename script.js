console.log("¡Portafolio cargado!");

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("circle-overlay");

  // Después de un pequeño delay agregamos la clase .enter para que entre el círculo
  setTimeout(() => {
    overlay.classList.add("enter");
  }, 100);

  // Escuchamos clicks para alternar animación de entrada y salida
  document.addEventListener("click", () => {
    if (overlay.classList.contains("enter")) {
      // Si el círculo está visible, hacemos que se esfume
      overlay.classList.remove("enter");
      overlay.classList.add("exit");
    } else {
      // Si está oculto, volvemos a hacerlo entrar
      overlay.classList.remove("exit");
      // Forzar reflow para reiniciar animación
      void overlay.offsetWidth;
      overlay.classList.add("enter");
    }
  });
});