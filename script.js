document.addEventListener('click', function (event) {
  const navbar = document.querySelector('.navbar');
  const collapse = document.querySelector('.navbar-collapse');
  const toggler = document.querySelector('.navbar-toggler');

  if (
    collapse.classList.contains('show') &&
    !navbar.contains(event.target) &&
    !toggler.contains(event.target)
  ) {
    toggler.click();
  }
});
document.querySelectorAll('.navbar-nav .nav-link')
    .forEach(link => {
        link.addEventListener('click', () => {
        const collapse = document.querySelector('.navbar-collapse');
        if (collapse.classList.contains('show')) {
        const toggler = document.querySelector('.navbar-toggler')
        toggler.click();
        }
    });
  });
