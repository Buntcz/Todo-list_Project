import { projectButton } from "./project_button";
import { AddProject, createProjectContainer, addDefaultProject } from "./project_add";

const Pform = document.getElementById("Project_form");
const pDialog = document.getElementById("projectName");

Pform.addEventListener('submit', function(event) {
    event.preventDefault();
    AddProject();
    Pform.reset();
    pDialog.close();
})

projectButton();
createProjectContainer();
addDefaultProject();
