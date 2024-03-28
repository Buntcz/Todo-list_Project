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
 
function createTaskContainer() {
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskContainer");
   projectCard.appendChild(taskCard);
}
 
export {createTaskContainer};

