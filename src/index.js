import "./style.css";
import { initNewProjectModal } from "./features/projects/newProjectModal.js";
import { createProject, getProjects, getActiveProject, setActiveProject } from "./features/projects/project.js";
import { renderProjectList } from "./features/projects/projectsListUI.js";
import { renderProjectContent } from "./features/projects/projectContentUI.js";

function handleNewProject(project) {
    createProject(project.name, project.description);
    refreshUI();
}

function handleSelectProject(projectId) {
    setActiveProject(projectId);
    refreshUI();
}

function refreshUI() {
    const activeProject = getActiveProject();
    renderProjectList(getProjects(), activeProject?.id, handleSelectProject);
    renderProjectContent();
}

initNewProjectModal(handleNewProject);
refreshUI();