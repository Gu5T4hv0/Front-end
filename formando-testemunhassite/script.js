/* =========================
   SCROLL SUAVE + CLIQUE
========================= */
const navLinks = document.querySelectorAll('.gp-nav a, .gp-nav-menu a');
const sections = document.querySelectorAll('#home, #sobre, #galeria, #download');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Fecha o menu mobile ao clicar num link
    closeMenu();

    // Atualiza estado ativo ao clicar
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

/* =========================
   ANIMAÇÃO AO ROLAR
========================= */
const animatedSections = document.querySelectorAll('.hero, .section');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

animatedSections.forEach(section => {
  section.classList.add('fade-up');
  sectionObserver.observe(section);
});

/* =========================
   MENU ATIVO AO ROLAR
========================= */
window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

/* =========================
   MENU MOBILE
========================= */
function openMenu() {
  let principal = document.getElementsByClassName("principal")[0];
  let menuPage = document.getElementsByClassName("menu-page")[0];

  principal.style.display = "none";
  menuPage.style.display = "block";
}

function closeMenu() {
  let principal = document.getElementsByClassName("principal")[0];
  let menuPage = document.getElementsByClassName("menu-page")[0];

  principal.style.display = "block";
  menuPage.style.display = "none";
}