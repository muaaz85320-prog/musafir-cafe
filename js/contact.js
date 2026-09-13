const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const successMsg = document.getElementById('successMsg');

function showError(input, errorId, message) {
  input.classList.add('invalid');
  document.getElementById(errorId).textContent = message;
}

function clearError(input, errorId) {
  input.classList.remove('invalid');
  document.getElementById(errorId).textContent = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  if (nameInput.value.trim().length < 3) {
    showError(nameInput, 'nameError', 'Name must be at least 3 characters');
    isValid = false;
  } else {
    clearError(nameInput, 'nameError');
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, 'emailError', 'Please enter a valid email address');
    isValid = false;
  } else {
    clearError(emailInput, 'emailError');
  }

  if (phoneInput.value.trim() !== '') {
    const phonePattern = /^[0-9+\s-]{7,15}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
      showError(phoneInput, 'phoneError', 'Please enter a valid phone number');
      isValid = false;
    } else {
      clearError(phoneInput, 'phoneError');
    }
  } else {
    clearError(phoneInput, 'phoneError');
  }

  if (messageInput.value.trim().length < 10) {
    showError(messageInput, 'messageError', 'Message should be at least 10 characters');
    isValid = false;
  } else {
    clearError(messageInput, 'messageError');
  }

  if (isValid) {
    successMsg.classList.add('show');
    form.reset();
    setTimeout(() => {
      successMsg.classList.remove('show');
    }, 4000);
  } else {
    successMsg.classList.remove('show');
  }
});

[nameInput, emailInput, phoneInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('invalid');
  });
});