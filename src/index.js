import "./style.css";
import { initNewProjectModal } from "./features/projects/newProjectModal.js";
import { createProject, getProjects, getActiveProject, setActiveProject } from "./features/projects/project.js";
import { renderProjectList } from "./features/projects/projectsListUI.js";
import { renderProjectContent } from "./features/projects/projectContentUI.js";
import { createTask } from "./features/tasks/task.js";
import { initNewTaskForm } from "./features/tasks/newTaskForm.js";

function handleNewProject(project) {
    createProject(project.name, project.description);
    refreshUI();
}

function handleNewTask(task) {
    const activeProject = getActiveProject();
    if (!activeProject) return;

    createTask(activeProject, task.name, task.description, task.formattedDate, task.priority);
    refreshUI();
}

function handleSelectProject(projectId) {
    setActiveProject(projectId);
    refreshUI();
}

function refreshUI() {
    const activeProject = getActiveProject();
    renderProjectList(getProjects(), activeProject?.id, handleSelectProject);
    renderProjectContent(activeProject);
}
initNewProjectModal(handleNewProject);
refreshUI();

initNewTaskForm(handleNewTask);