import "./style.css";
import { initNewProjectModal } from "./features/projects/newProjectModal.js";
import { createProject, getProjects } from "./features/projects/project.js";
import { renderProjectList } from "./features/projects/projectsListUI.js";

function handleNewProject(project) {
    createProject(project.name, project.description);
    renderProjectList(getProjects());
}

initNewProjectModal(handleNewProject);