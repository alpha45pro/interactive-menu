const sidebar = document.querySelector('.sidebar');

window.addEventListener('scroll', () => {
  const scrollThreshold = 100;
  if (window.scrollY > scrollThreshold) {
    sidebar.classList.add('scrolled');
  } else {
    sidebar.classList.remove('scrolled');
  }
});

// Optional: Highlight menu item based on section in viewport
const links = document.querySelectorAll('.sidebar ul li a');
const sections = Array.from(document.querySelectorAll('.content section'));

window.addEventListener('scroll', () => {
  const offset = window.innerHeight / 2;
  sections.forEach((section, idx) => {
    const top = section.getBoundingClientRect().top;
    if (top >= 0 && top < offset) {
      links.forEach(a => a.classList.remove('active'));
      links[idx].classList.add('active');
    }
  });
});
