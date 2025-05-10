document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.subpage img');
  images.forEach(img => {
    img.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  });
});