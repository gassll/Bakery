
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

burger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
});

document.querySelectorAll('.mobile-menu-links a').forEach(link => {
      link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
      });
});