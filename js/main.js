const menuLinks = document.querySelectorAll('.menu a');
const infoBox = document.getElementById('info-box');
let activeLink = null;

const contentMap = {
  about: 'This is the about section',
  portfolio: 'This is the Portfolio section.',
  contact: 'This is the Contact section.'
};

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const contentType = link.dataset.content;

    if (activeLink === link) {
      // Same link clicked again → close box
      infoBox.classList.remove('active');
      activeLink = null;
      return;
    }

    // Update content and show box
    infoBox.textContent = contentMap[contentType];
    infoBox.classList.add('active');
    activeLink = link;
  });
});

// Hide box if clicking outside
document.addEventListener('click', e => {
  if (!infoBox.contains(e.target) && ![...menuLinks].includes(e.target)) {
    infoBox.classList.remove('active');
    activeLink = null;
  }
});