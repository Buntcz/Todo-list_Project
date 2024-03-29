import "./style.css"
import { createTodoButton } from "./todo_button";
const myTasks = [];

class Task {
    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate

    }
}

const firstTask = new Task("Build a todo list", "Find resources for the project code.", "22.05.2023", "high")

function createTaskContainer(projectElement) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskContainer");
    projectElement.appendChild(taskCard);

    createTodoButton(taskCard);
}
 
function addTodo() {
    const todoTitle = document.getElementById("title").value;
    const todoDesc = document.getElementById("desc").value;
    const todoPriority = document.getElementById("priority").value;
    const todoDate = document.getElementById("dueDate").value;

    const newTask = new Task(todoTitle, todoDesc, todoPriority, todoDate);
    myTasks.push(newTask);
    console.log(myTasks);
}

export {createTaskContainer, addTodo};


