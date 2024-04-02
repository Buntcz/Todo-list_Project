import { projectButton } from "./project_button";
import { AddProject, createProjectContainer, addDefaultProject } from "./project_add";
import { addTodo, addDefaultTask } from "./task_add";
import { createTodoButton } from "./todo_button";
import { localProjectsLoad, localTasksLoad } from "./localStorageFunctions";

const Pform = document.getElementById("Project_form");
const pDialog = document.getElementById("projectName");
const todoForm = document.getElementById("task_Form");
const todoDialog = document.getElementById("taskAdd");

Pform.addEventListener('submit', function(event) {
    event.preventDefault();
    AddProject();
    Pform.reset();
    pDialog.close();
})

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addTodo();
    todoForm.reset();
    todoDialog.close();
})

projectButton();
createTodoButton();
createProjectContainer();
addDefaultProject();
addDefaultTask();
localProjectsLoad();
localTasksLoad();