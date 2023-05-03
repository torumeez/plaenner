const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('task');
const timeInput = document.getElementById('time');
const addButton = document.getElementById('add');

let tasks = [];

addButton.addEventListener('click', () => {
  const task = taskInput.value;
  const time = timeInput.value;
  if (task && time) {
    tasks.push({ task, time });
    taskInput.value = '';
    timeInput.value = '';
    displayTasks();
  }
});

function displayTasks() {
  taskList.innerHTML = '';
  for (const task of tasks) {
    const li = document.createElement('li');
    li.textContent = `${task.task} - ${task.time}`;
    taskList.appendChild(li);
  }
}



