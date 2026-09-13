const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('show');
    modalImg.src = img.src;
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});