import { createProject } from "./project_add";
import { createTodoTask } from "./task_add";

const localTodos = localStorage.getItem("todos");
const todosParsed = JSON.parse(localTodos);

const localProjects = localStorage.getItem("project");
const projectParsed = JSON.parse(localProjects);

function localProjectsLoad() {
  for(let i = 0; i < projectParsed.length; i++) {
    createProject(projectParsed[i]);
  }
}

function localTasksLoad() {
    for(let i = 0; i < todosParsed.length; i++) {
        createTodoTask(todosParsed[i]);
    }
}

export{localProjectsLoad, localTasksLoad}