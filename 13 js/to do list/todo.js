const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
savedTasks.forEach(task => addTaskToDOM(task));

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTaskToDOM(taskText);
    saveTask(taskText);
    taskInput.value = '';
  }
});

function addTaskToDOM(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;
  li.addEventListener('click', () => {
    li.remove();
    removeTask(taskText);
  });
  taskList.appendChild(li);
}

function saveTask(taskText) {
  savedTasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

function removeTask(taskText) {
  const index = savedTasks.indexOf(taskText);
  if (index > -1) {
    savedTasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
  }
}