// Difine UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task form
    form.addEventListener('submit', addTask );
}

// Add Task
function addTask (e) {
    if(taskInput.value === '') {
        alert('Add a task')
    }

    // Creat li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Creat text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement()

    e.preventDefault();
}