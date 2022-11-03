export const taskAdder = (task, tasks) => tasks.push(task);

export const stringifier = (input) => {
  const tasks = JSON.stringify(input);
  localStorage.setItem('tasks', tasks);
};

export const taskEditor = (list, index, tasks) => {
  const text = list.value;
  tasks[index].string = text;
  stringifier(tasks);
  return tasks;
};
