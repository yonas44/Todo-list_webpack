import './style.css';
import TaskLoader from './modules/taskLoader.js';

const tasks = [
  {
    string: 'Wash the dishes',
    bool: false,
    number: 0,
  },
  {
    string: 'Complete To Do list project',
    bool: false,
    number: 1,
  },
];

const input = document.querySelector('#input');
const form = document.querySelector('#second');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.value = '';
});

const lists = document.querySelector('.list');
TaskLoader(lists, tasks);
