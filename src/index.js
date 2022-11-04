/* eslint-disable comma-dangle */
import './style.css';
import TaskLoader from './modules/taskLoader.js';
import Task from './modules/task.js';
import { stringifier, taskAdder, taskEditor } from './modules/taskMethods.js';
import { DateTime } from './modules/luxon.js';

let tasks = [];

// Update tasks array from localStorage

const localTasks = localStorage.getItem('tasks');
if (localTasks !== null) {
  tasks = JSON.parse(localTasks);
}

// Add new tasks

const input = document.querySelector('#input');
const form = document.querySelector('#second');
const lists = document.querySelector('.list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = new Task(input.value);
  taskAdder(task, tasks);
  stringifier(tasks);
  TaskLoader(lists, tasks, taskEditor);
  input.value = '';
});

TaskLoader(lists, tasks, taskEditor);

// Remove completed tasks

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  tasks = tasks.filter((task) => task.bool !== true);
  stringifier(tasks);
  TaskLoader(lists, tasks, taskEditor);
});

// Display time & date using luxon

const time = document.querySelector('#time');
time.innerText = DateTime.now('2022-10-31T16:23:12').toLocaleString(
  DateTime.DATETIME_MED
);
