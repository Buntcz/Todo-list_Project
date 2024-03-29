import "./style.css"
const myTasks = [];

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

    }
}

const firstTask = new Task("Build a todo list", "Find resources", "22.05.2023", "high")

function createTaskContainer(projectElement) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskContainer");
    projectElement.appendChild(taskCard);
}
 
function printNewTask() {
    console.log(firstTask)
}


export {createTaskContainer, printNewTask};


