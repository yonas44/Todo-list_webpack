import './style.css';
import TaskLoader from './modules/taskLoader.js';
import Task from './modules/task.js';
import { stringifier, taskAdder, taskEditor } from './modules/taskMethods.js';

let tasks = [];
const localTasks = localStorage.getItem('tasks');
if (localTasks !== null) {
  tasks = JSON.parse(localTasks);
}

// Add tasks

const input = document.querySelector('#input');
const form = document.querySelector('#second');
const lists = document.querySelector('.list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = new Task(input.value);
  taskAdder(task, tasks);
  stringifier(tasks);
  TaskLoader(lists, tasks, taskEditor, stringifier);
  input.value = '';
});

TaskLoader(lists, tasks, taskEditor);

// Remove finished tasks

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  tasks = tasks.filter((task) => task.bool !== true);
  stringifier(tasks);
  TaskLoader(lists, tasks, taskEditor, stringifier);
});
