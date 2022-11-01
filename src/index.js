import './style.css';

const input = document.querySelector('#input');
const form = document.querySelector('#second');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.value = '';
});
