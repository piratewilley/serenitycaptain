
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('[data-charter]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.getElementById('charter-select');
    const requested = link.dataset.charter;
    [...select.options].forEach(option => {
      if (option.text.includes(requested)) select.value = option.value;
    });
  });
});

document.getElementById('booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Serenity Captain booking request — ${form.get('charter')}`);
  const body = encodeURIComponent(
`Name: ${form.get('name')}
Email: ${form.get('email')}
Phone: ${form.get('phone')}
Charter: ${form.get('charter')}
Preferred date: ${form.get('date')}
Guests: ${form.get('guests')}

Ideal day / notes:
${form.get('notes') || 'None provided'}`
  );
  document.getElementById('form-status').textContent = 'Opening your email app with the booking details...';
  window.location.href = `mailto:Book@SerenityCaptain.com?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
