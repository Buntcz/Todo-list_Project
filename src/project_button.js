import './style.css'

function projectButton() {
    const content = document.getElementById('content');

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add_project');
    addProjectButton.textContent = "Add Project";
    addProjectButton.addEventListener('click' , makeFormVisible)

    content.appendChild(addProjectButton);

}

function makeFormVisible() {
    const Pform = document.getElementById('Project_form');
      Pform.style.display = "inline-block";
}

export {projectButton}