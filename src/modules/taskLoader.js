/* eslint-disable no-use-before-define */
import { stringifier } from './taskMethods.js';

function TaskLoader(lists, tasks, taskEditor) {
  // Remove tasks before re-rendering
  while (lists.hasChildNodes()) {
    lists.removeChild(lists.firstChild);
  }
  // Map tasks inside the task container
  tasks.forEach((task, index) => {
    const list = document.createElement('li');
    const form = document.createElement('form');
    form.className = 'task-form';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = task.bool;
    task.index = index;

    // Add event listener for checkbox
    checkBox.addEventListener('change', () => {
      tasks[index].bool = !task.bool;
      if (task.bool === true) {
        text.style.textDecoration = 'line-through';
        form.classList.remove('on');
        dots.className = 'bi bi-three-dots-vertical';
      } else {
        text.style.textDecoration = 'none';
        form.classList.remove('on');
        dots.className = 'bi bi-three-dots-vertical';
      }
      stringifier(tasks);
    });

    const text = document.createElement('input');
    text.className = 'task';
    text.value = task.string;
    if (task.bool === true) text.style.textDecoration = 'line-through';

    // Add event listener for each added form
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      text.blur();
      taskEditor(text, index, tasks);
      dots.className = 'bi bi-three-dots-vertical';
      form.classList.remove('on');
      if (task.bool === true) text.style.textDecoration = 'line-through';
      TaskLoader(lists, tasks, taskEditor);
    });

    const dots = document.createElement('i');
    dots.className = 'bi bi-three-dots-vertical';
    dots.id = 'dots';

    // Add event listener for task input field
    text.addEventListener('click', () => {
      const taskForm = document.querySelectorAll('.task-form');
      taskForm.forEach((form, position) => {
        if (position === index) {
          form.classList.add('on');
        } else {
          form.classList.remove('on');
          form.childNodes[2].className = 'bi bi-three-dots-vertical';
          if (form.childNodes[0].checked === true) {
            form.childNodes[1].style.textDecoration = 'line-through';
          }
        }
      });

      // Add on blur event listener for input field
      text.addEventListener('blur', () => {
        form.classList.remove('on');
        form.childNodes[2].className = 'bi bi-three-dots-vertical';
        if (form.childNodes[0].checked === true) {
          form.childNodes[1].style.textDecoration = 'line-through';
        }
      });

      dots.className = 'bi bi-trash3';
      text.style.textDecoration = 'none';

      // Add event listener for remove button
      dots.addEventListener('click', () => {
        tasks.splice(index, 1);
        stringifier(tasks);
        TaskLoader(lists, tasks, taskEditor);
      });
    });
    form.append(checkBox, text, dots);
    list.appendChild(form);
    lists.appendChild(list);
  });
}

export default TaskLoader;
