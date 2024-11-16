function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== "") {
        // Create task elements
        const taskItem = document.createElement('li');
        taskItem.className = 'task';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = taskInput.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function () {
            taskList.removeChild(taskItem);
        };

        // Append elements to the task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteBtn);

        // Append task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
