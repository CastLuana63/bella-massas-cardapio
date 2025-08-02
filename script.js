document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }
});

// WhatsApp Integration
function openWhatsApp() {
  const phoneNumber = "5511999998888";
  const message = encodeURIComponent(`🍝 Olá, Bella Massa Brasil!

Gostaria de conhecer mais sobre suas massas artesanais congeladas.

Tenho interesse em:
• Lasanhas tradicionais
• Massas frescas
• Molhos artesanais
• Pratos prontos

Poderiam me informar sobre:
📋 Cardápio completo e preços
🚚 Condições de entrega
💳 Formas de pagamento
⏰ Tempo de preparo

Aguardo retorno! 🇮🇹🇧🇷`);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
}

function openWhatsAppProduct(productName, price) {
  const phoneNumber = "5516993342346";
  const message = encodeURIComponent(`🍝 Olá, Bella Massa Brasil!

Tenho interesse no produto:
📦 ${productName}
💰 ${price}

Gostaria de saber:
• Disponibilidade
• Condições de entrega
• Formas de pagamento
• Tempo de preparo

Aguardo retorno! 🇮🇹🇧🇷`);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
}

let currentSlideIndex = 0;
const slides = document.querySelectorAll(".carrossel-slide");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  indicators.forEach((indicator) => indicator.classList.remove("active"));

  if (slides[index]) {
    slides[index].classList.add("active");
  }
  if (indicators[index]) {
    indicators[index].classList.add("active");
  }

  currentSlideIndex = index;
}

function nextSlide() {
  const nextIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function previousSlide() {
  const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

function currentSlide(index) {
  showSlide(index - 1);
}

setInterval(nextSlide, 5000);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background =
      "linear-gradient(135deg, rgba(46, 125, 50, 0.95) 0%, rgba(102, 187, 106, 0.95) 100%)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background =
      "linear-gradient(135deg, var(--verde-principal) 0%, var(--verde-claro) 100%)";
    header.style.backdropFilter = "none";
  }
});

function openSocialMedia(platform) {
  const urls = {
    instagram: "https://instagram.com/bellamassabrasil",
    facebook: "https://facebook.com/bellamassabrasil",
    whatsapp: openWhatsApp,
  };

  if (platform === "whatsapp") {
    openWhatsApp();
  } else if (urls[platform]) {
    window.open(urls[platform], "_blank");
  }
}

// Adicionar event listeners para redes sociais
document.addEventListener("DOMContentLoaded", function () {
  // Instagram links
  document.querySelectorAll(".instagram").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      openSocialMedia("instagram");
    });
  });

  // Facebook links
  document.querySelectorAll(".facebook").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      openSocialMedia("facebook");
    });
  });

  // WhatsApp links adicionais
  document.querySelectorAll(".whatsapp").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      openWhatsApp();
    });
  });
});

// Feedback visual para botões
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(
    ".btn, .social-btn, .categoria-card, .produto-card"
  );

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Adiciona efeito de clique
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });
});

// Contador animado (se houver estatísticas)
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start);

    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

document.addEventListener("DOMContentLoaded", function () {
  const whatsappButtons = document.querySelectorAll(".btn-whatsapp");
  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function () {
      showToast("Redirecionando para WhatsApp...", "success");
    });
  });
});
