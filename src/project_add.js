import "./style.css"
import { createTaskContainer } from "./task_add";
import { myTasks } from "./task_add";

let myProjects = [];
const content = document.getElementById("content")

class Project {
    constructor(title) {
        this.title = title;
    }
}

function addDefaultProject() {
  const defaultProject = new Project("Default Project");
  myProjects.push(defaultProject);
  createProject(defaultProject)
  localStorage.setItem("title", JSON.stringify(defaultProject.title));
}

function createProjectContainer() {
    const projectContainer = document.createElement('div')
    projectContainer.classList.add("projectContainer")
    content.appendChild(projectContainer);
}

function AddProject() {
    let title = document.getElementById("P_title").value;
    let newProject = new Project(title);
 if(myProjects.length < 1) {
    myProjects.push(newProject);
    console.log(myProjects)
    localStorage.setItem("project", JSON.stringify(myProjects));
    createProject(newProject);
 } else {
  alert("Right now you can create only up to one project due to bugs, sorry for the inconvinience")
 }
 }




function createProject(item) {
   const display = document.querySelector(".projectContainer");
   const projectCard = document.createElement("div");
   projectCard.classList.add("project");

   const projectTitle = document.createElement("h3");
   projectTitle.classList.add("projectTitle")
    projectTitle.textContent = item.title;

   const removeButton = document.createElement('button');
   removeButton.classList.add("removeButton");
   removeButton.textContent = "Delete Project"

   removeButton.addEventListener("click", function() {
   projectCard.outerHTML = " ";
   myProjects.splice(myProjects.indexOf(item),  1);
   localStorage.clear();
   myTasks.splice(0, myTasks.length);
   })
   
 /*  const editButton = document.createElement('button');
   editButton.classList.add("editButton");
   editButton.textContent = "Edit button";

   editButton.addEventListener("click", function() {
    const ProjForm = document.getElementById("Project_form")
    const projectDialog = document.getElementById("projectName");
   })
   */
   display.appendChild(projectCard);
   projectCard.appendChild(projectTitle);
   projectCard.appendChild(removeButton);
  //  projectCard.appendChild(editButton);
   createTaskContainer(projectCard);
}

export {AddProject, createProjectContainer, addDefaultProject, myProjects};