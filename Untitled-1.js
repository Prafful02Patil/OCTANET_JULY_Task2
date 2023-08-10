document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');

    addTaskBtn.addEventListener('click', () => {
        const taskTitle = taskInput.value.trim();
        if (taskTitle !== '') {
            const taskElement = document.createElement('li');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                <span class="task-title">${taskTitle}</span>
                <div class="task-buttons">
                    <button class="complete-btn">Complete</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            taskList.appendChild(taskElement);
            taskInput.value = '';

            const completeBtn = taskElement.querySelector('.complete-btn');
            const deleteBtn = taskElement.querySelector('.delete-btn');
            const taskTitleElement = taskElement.querySelector('.task-title');

            completeBtn.addEventListener('click', () => {
                taskElement.classList.toggle('completed');
            });

            deleteBtn.addEventListener('click', () => {
                taskElement.remove();
            });
        }
    });
});
