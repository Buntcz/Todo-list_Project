const myProjects = [];

class Project {
    constructor(title) {
        this.title = title;
    }
}

function AddProject() {
    let title = document.getElementById("P_title").value;
    let newProject = new Project(title);
    myProjects.push(newProject);
}

function render() {
    const projectContainer = document.createElement('div');
    
}