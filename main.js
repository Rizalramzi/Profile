window.addEventListener('scroll', () => {
  const div = document.querySelectorAll('div');
  const scrollY = window.scrollY;

  div.forEach(section => {
    const sectionTop = section.offsetTop - 50; // Sesuaikan dengan tinggi navbar
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollY >= sectionTop && scrollY <= sectionBottom) {
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      const correspondingLink = document.querySelector(`.navbar-nav .nav-link[href="#${section.id}"]`);
      correspondingLink.classList.add('active');
    }
  });
});