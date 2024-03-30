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
    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;

    const newTask = new Task(title, description, priority, dueDate);
    myTasks.push(newTask);
    console.log(myTasks);
    createTodoTask(newTask);
}

function createTodoTask(item) {
   const taskCard = document.querySelector(".taskContainer")

    const todoElement = document.createElement("div");
   todoElement.classList.add("todoElement");

    const taskTitle = document.createElement("p");
   taskTitle.classList.add("taskTitle");
   taskTitle.textContent = `Title: ${item.title}`;

   const taskDesc = document.createElement("p");
  taskDesc.classList.add("taskDesc");
  taskDesc.textContent = `Description: ${item.description}`;

   const taskPriority = document.createElement("p");
   taskPriority.classList.add("taskPriority");
   taskPriority.textContent = `Priority: ${item.priority}`;

   const taskDueDate = document.createElement("p");
   taskDueDate.classList.add("taskDueDate");
   taskDueDate.textContent = `Due: ${item.dueDate}`;

   todoElement.appendChild(taskTitle);
   todoElement.appendChild(taskDesc);
   todoElement.appendChild(taskPriority);
   todoElement.appendChild(taskDueDate);
   taskCard.appendChild(todoElement);
}

export {createTaskContainer, addTodo, myTasks};


