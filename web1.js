const songButtons = document.querySelectorAll('.song button');

songButtons.forEach(button => {
  button.addEventListener('click', () => {
    const songId = button.dataset.id;
    // Simulate adding song to cart (replace with actual functionality)
    alert(`Adding song ${songId} to cart!`);
  });
});
