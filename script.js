document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get input and trim whitespace

        // Validate task input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new task (li element)
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Remove task when the button is clicked
        removeButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        // Append the button to the task item
        taskItem.appendChild(removeButton);

        // Add the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    };

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener("click", addTask);

    // Add task when the Enter key is pressed
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
