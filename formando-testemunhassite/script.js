/* =========================
   SCROLL SUAVE + CLIQUE
========================= */
const navLinks = document.querySelectorAll('.gp-nav a, .gp-nav-menu a');
const sections = document.querySelectorAll('#home, #sobre, #galeria, #download');

function closeMenu() {
  let principal = document.getElementsByClassName("principal")[0];
  let menuPage = document.getElementsByClassName("menu-page")[0];

  // Salva a posição atual do scroll do menu-page
  const scrollPos = menuPage.scrollTop || window.scrollY;

  principal.style.display = "block";
  menuPage.style.display = "none";

  // Restaura a posição do scroll
  window.scrollTo(0, scrollPos);
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    closeMenu();

    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 50);
    }

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