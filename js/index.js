const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  // // Hide the horizontal navigation items when the hamburger menu is shown.
  // if (navLinks.classList.contains('open')) {
  //   navLinks.style.display = 'none';
  // } else {
  //   navLinks.style.display = 'flex';
  // }
});
