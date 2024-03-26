import "./style.css"

const myProjects = [];
const content = document.getElementById("content")

class Project {
    constructor(title) {
        this.title = title;
    }
}

function createProjectContainer() {
    const projectContainer = document.createElement('div')
    projectContainer.classList.add("projectContainer")
    content.appendChild(projectContainer);
}

function AddProject() {
    let title = document.getElementById("P_title").value;
    let newProject = new Project(title);
    myProjects.push(newProject);
    console.log(myProjects)
    createProject(newProject);
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
   
   })
   
   const editButton = document.createElement('button');
   editButton.classList.add("editButton");
   editButton.textContent = "Edit button";

   editButton.addEventListener("click", function() {
    const ProjForm = document.getElementById("Project_form")
   })
   
   display.appendChild(projectCard);
   projectCard.appendChild(projectTitle);
   projectCard.appendChild(removeButton);
   projectCard.appendChild(editButton)
   
}

export {AddProject, createProjectContainer};