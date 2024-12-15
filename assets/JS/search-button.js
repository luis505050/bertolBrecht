// Buscar el div del video y desplazarse hacia él
document.getElementById("arrowButton").addEventListener("click", function () {
  const targetDiv = document.querySelector(".container-videos");
  const videoElement = targetDiv.querySelector("video"); // Busca el elemento <video> dentro del contenedor

  // Desplázate hacia el contenedor del video
  window.scrollTo({
      top: targetDiv.offsetTop - 150, // Ajusta según la posición deseada
      behavior: "smooth"
  });

  // Asegúrate de que el video se reproduzca después de que termine el desplazamiento
  setTimeout(() => {
    if (videoElement) {
      videoElement.play(); // Reproduce el video automáticamente
    } else {
      console.warn("No se encontró un elemento <video> dentro de .container-videos.");
    }
  }, 500); // Espera medio segundo para asegurarte de que el desplazamiento haya terminado
});

// Detectar el scroll para aplicar animaciones
window.addEventListener("scroll", function () {
  const targetDiv = document.querySelector(".content-parrafo");
  if (targetDiv) {
    const rect = targetDiv.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    console.log("¿Está en vista?:", isInView);
  }
});
