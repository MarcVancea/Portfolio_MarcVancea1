document.addEventListener("DOMContentLoaded", function() {
    // Alternar menú móvil
    const mobileMenu = document.getElementById("mobile-menu");
    const navbar = document.getElementById("navbar");
  
    mobileMenu.addEventListener("click", function() {
      navbar.classList.toggle("active");
    });
  
    // Efecto typewriter para el título de la sección de Inicio
    const introHeading = document.querySelector("#inicio .intro h2");
    const text = introHeading.textContent;
    introHeading.textContent = "";
    let index = 0;
    function typeWriter() {
      if (index < text.length) {
        introHeading.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Velocidad del efecto (ajusta según preferencia)
      } else {
        // Una vez terminado, eliminamos el cursor
        introHeading.style.borderRight = "none";
      }
    }
    typeWriter();
  
    // Animación de aparición al hacer scroll para cada sección
    const sections = document.querySelectorAll(".section");
    function revealSections() {
      const triggerBottom = window.innerHeight * 0.85;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("animate");
        }
      });
    }
    window.addEventListener("scroll", revealSections);
    revealSections();
  });
  