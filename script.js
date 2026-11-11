const menuButton = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

const closeMenu = () => {
  if (!menuButton || !mobileNav) return;
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
};

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    mobileNav.hidden = isOpen;
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  });

  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) closeMenu();
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const contactDialog = document.querySelector('#contact-dialog');
const contactForm = document.querySelector('#contact-form');
const closeDialogButton = document.querySelector('.dialog-close');
const openDialogButtons = document.querySelectorAll('.js-open-contact');

if (contactDialog) {
  openDialogButtons.forEach(button => {
    button.addEventListener('click', () => {
      closeMenu();
      contactDialog.showModal();
    });
  });

  closeDialogButton?.addEventListener('click', () => contactDialog.close());

  contactDialog.addEventListener('click', event => {
    if (event.target === contactDialog) contactDialog.close();
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const company = formData.get('company').trim();
    const position = formData.get('position').trim();
    const note = formData.get('message').trim();
    const message = note || `Hi Murugan, I am reaching out about the ${position} position at ${company}. I would like to discuss the role with you.`;
    const subject = `${position} opportunity at ${company}`;
    const body = `${message}\n\nRegards,\n${name}\n${company}`;

    window.location.href = `mailto:1murugan23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
