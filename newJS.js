// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const theLi =document.querySelector('.collection-item');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear Tasks Button
  clearBtn.addEventListener('click', clearTask);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);


}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  
  taskInput.value = '';

  e.preventDefault();
}


// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('Are You Sure?')) {
        e.target.parentElement.parentElement.remove();
  
        // Remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      }
    }
  }

// Clear Tasks
function clearTask(e){
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    })};
