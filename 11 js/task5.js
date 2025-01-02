const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', () => {
  const taskName = taskInput.value.trim();
  if (taskName) {
    const li = document.createElement('li');
    li.textContent = taskName;
    li.addEventListener('click', () => li.remove());
    taskList.appendChild(li);
    taskInput.value = '';
  }
});