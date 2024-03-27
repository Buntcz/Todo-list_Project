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
    const pForm = document.getElementById('projectName');
      pForm.showModal();
}

export {projectButton}