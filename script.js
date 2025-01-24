document.addEventListener("DOMContentLoaded", function () {
     // DOM Elements
     const addButton = document.getElementById('add-task-btn');
     const taskInput = document.getElementById('task-input');
     const taskList = document.getElementById('task-list');
 
     // Load tasks from Local Storage
     loadTasks();
 
     // Event listeners
     addButton.addEventListener('click', () => addTask(taskInput.value));
     taskInput.addEventListener('keypress', (event) => {
         if (event.key === 'Enter') {
             addTask(taskInput.value);
         }
     });
 
     // Step 1: Load tasks from Local Storage
     function loadTasks() {
         const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
         storedTasks.forEach(taskText => createTaskElement(taskText));
     }
 
     // Step 2: Add task
     function addTask(taskText) {
         const trimmedTask = taskText.trim();
 
         if (trimmedTask === '') {
             alert('Please enter a task.');
             return;
         }
 
         // Create the task element in DOM
         createTaskElement(trimmedTask);
 
         // Save to Local Storage
         saveTaskToLocalStorage(trimmedTask);
 
         // Clear the input field
         taskInput.value = '';
     }
 
     // Create a task element and append it to the DOM
     function createTaskElement(taskText) {
         const li = document.createElement('li');
         li.textContent = taskText;
 
         // Create the Remove button
         const removeButton = document.createElement('button');
         removeButton.textContent = 'Remove';
         removeButton.className = 'remove-btn';
 
         // Remove task event
         removeButton.addEventListener('click', () => {
             taskList.removeChild(li); // Remove from DOM
             removeTaskFromLocalStorage(taskText); // Update Local Storage
         });
 
         li.appendChild(removeButton); // Add Remove button to li
         taskList.appendChild(li); // Add li to task list
     }
 
     // Save task to Local Storage
     function saveTaskToLocalStorage(taskText) {
         const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
         tasks.push(taskText);
         localStorage.setItem('tasks', JSON.stringify(tasks));
     }
 
     // Remove task from Local Storage
     function removeTaskFromLocalStorage(taskText) {
         const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
         const updatedTasks = tasks.filter(task => task !== taskText);
         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
     }
 });
 