// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  // 1. Toggle the menu when the button is clicked
  hamburgerButton.addEventListener('click', (e) => {
    // Stop this click from propagating to the document (prevents immediate closing)
    e.stopPropagation(); 
    mobileMenu.classList.toggle('active');
  });

  // 2. Close the menu when clicking anywhere on the document
  document.addEventListener('click', (e) => {
    // If the menu is active...
    if (mobileMenu.classList.contains('active')) {
      // ...and the click is NOT inside the menu
      if (!mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    }
  });

  // 3. BONUS: Close the menu when a link inside it is clicked
  // (Since your links just scroll down the page, you want the menu to get out of the way!)
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
});