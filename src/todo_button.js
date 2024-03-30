import "./style.css"

function createTodoButton(taskElement) {
    const taskButton = document.createElement("button");
    taskButton.classList.add("taskAddButton");
    taskButton.textContent = "Add task";
    taskElement.appendChild(taskButton);
    taskButton.addEventListener("click", showTaskForm);
}

function showTaskForm() {
    const taskForm = document.getElementById("taskAdd");
    taskForm.showModal();
}

export { createTodoButton };