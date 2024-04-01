import "./style.css"
import { createTodoButton } from "./todo_button";
let myTasks = [];

class Task {
    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;

    }
}

function createTaskContainer(projectElement) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskContainer");
    projectElement.appendChild(taskCard);

    
} 
function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;

    const newTask = new Task(title, description, priority, dueDate);
    myTasks.push(newTask);
    localStorage.setItem("todos", JSON.stringify(myTasks))
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

   const buttonSection =  document.createElement("div");
   buttonSection.classList.add("buttonSection")

   const checkButton = document.createElement("input");
   checkButton.type = "checkbox";
   checkButton.id = "taskCheck";
   checkButton.value = "taskCheck"

   const deleteTaskButton = document.createElement("button");
   deleteTaskButton.classList.add("deleteTaskButton");
   deleteTaskButton.textContent = "Delete task";
   deleteTaskButton.addEventListener("click", function() {
    todoElement.outerHTML = " ";
    myTasks.splice(myTasks.indexOf(item), 1);
   })
   

   todoElement.appendChild(taskTitle);
   todoElement.appendChild(taskDesc);
   todoElement.appendChild(taskPriority);
   todoElement.appendChild(taskDueDate);
   todoElement.appendChild(buttonSection);
   buttonSection.appendChild(checkButton);
   buttonSection.appendChild(deleteTaskButton);
   taskCard.appendChild(todoElement);
   
}

export {createTaskContainer, addTodo, myTasks};


