const bar = document.querySelector('.bar');
const navLinks = document.querySelector('.nav-links');

bar.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Remove the show class from nav-links by default
navLinks.classList.remove('show');

// Add click event listeners to each navigation link to hide nav-links when clicked
const navLinksList = document.querySelectorAll('.nav-links a');
navLinksList.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

