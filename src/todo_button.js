import "./style.css"

function createTodoButton() {
    const content = document.getElementById("content")
    const taskButton = document.createElement("button");
    taskButton.classList.add("taskAddButton");
    taskButton.textContent = "Add task";
    content.appendChild(taskButton);
    taskButton.addEventListener("click", showTaskForm);
}

function showTaskForm() {
    const taskForm = document.getElementById("taskAdd");
    taskForm.showModal();
}

export { createTodoButton };