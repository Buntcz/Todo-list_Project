import "./style.css"
import { myProjects } from "./project_add";
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
    if (myProjects.length < 1) {
        alert("Create a project first.") 
        } else {
    
    taskForm.showModal();
        }
}

export { createTodoButton };