function TaskLoader(lists, tasks) {
  tasks.forEach((task) => {
    const list = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const text = document.createElement('span');
    text.innerHTML = task.string;
    const dots = document.createElement('i');
    dots.className = 'bi bi-three-dots-vertical';
    dots.id = 'dots';
    list.append(checkBox, text, dots);
    lists.appendChild(list);
  });
}

export default TaskLoader;
