document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
  
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  });
  

/* APOIE BUTTON */ 

  const btn = document.getElementById('apoie-btn');
const box = document.getElementById('apoie-box');
const fechar = document.getElementById('fechar-btn');

btn.addEventListener('click', () => {
  box.style.display = 'flex';
});

fechar.addEventListener('click', () => {
  box.style.display = 'none';
});


/* MENU HAMBURGER */ 

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navbar = document.getElementById('navbar');

  hamburgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
});


/* ACHADOS MOVIMENTO DE IMAGEM */ 


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#achados-imagens img').forEach(img => {
    const original = img.src;
    const hover = img.getAttribute('data-hover');

    img.addEventListener('mouseenter', () => {
      img.src = hover;
    });

    img.addEventListener('mouseleave', () => {
      img.src = original;
    });
  });
});



