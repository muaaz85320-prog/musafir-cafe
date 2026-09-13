const tabBtns = document.querySelectorAll('.tab-btn');
const menuCategories = document.querySelectorAll('.menu-category');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    menuCategories.forEach(cat => cat.classList.remove('active'));

    btn.classList.add('active');
    const tab = btn.getAttribute('data-tab');
    document.getElementById(tab).classList.add('active');
  });
});