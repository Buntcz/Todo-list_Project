import { projectButton } from "./project_button";
import { AddProject, createProjectContainer } from "./project_add";

const Pform = document.getElementById("Project_form");

Pform.addEventListener('submit', function(event) {
    event.preventDefault();
    AddProject();
    Pform.reset();
    Pform.style.display = "none";
})

projectButton();
createProjectContainer();