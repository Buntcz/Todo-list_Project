import "./style.css"

const myProjects = [];
const content = document.getElementById("content")

class Project {
    constructor(title) {
        this.title = title;
    }
}

function AddProject() {
    let title = document.getElementById("P_title").value;
    let newProject = new Project(title);
    myProjects.push(newProject);
    render();
}

function render() {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add("projectContainer")
    content.appendChild(projectContainer);
    const projects = document.querySelectorAll(".project")

    for(let i = 0; i < myProjects.length; i++) {
        createProject(myProjects[i]);
    }
}



function createProject(item) {
   const display = document.querySelector(".projectContainer");
   const projectCard = document.createElement("div");
   projectCard.classList.add("project");

   const projectTitle = document.createElement("h3");
   projectTitle.classList.add("projectTitle")
    projectTitle.textContent = item.title;

   display.appendChild(projectCard);
   projectCard.appendChild(projectTitle);
   
}

export {AddProject};