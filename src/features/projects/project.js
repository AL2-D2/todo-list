export class Project {
    constructor(name, description = "", tasks = []) {
        this.name = name;
        this.description = description;
        this.tasks = tasks;
        this.id = crypto.randomUUID();
    }
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}

const STORAGE_KEY = "todoApp.projects";

export function saveProjects() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function loadProjects() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];

    const parsed = JSON.parse(data);
    return parsed.map((projData) => Object.assign(new Project(projData.name, projData.description), projData));
}

let projects = loadProjects();
let activeProjectId = projects.length > 0 ? projects[0].id : null;

export function setActiveProject(projectId) {
    activeProjectId = projectId;
}

export function getActiveProject() {
    return projects.find((project) => project.id === activeProjectId);
}

export function createProject(name, description) {
    const project = new Project(name, description);
    projects.push(project);
    activeProjectId = project.id;
    saveProjects();
}

export function removeProject(project) {
    const index = projects.indexOf(project);
    if (index === -1) return;
    projects.splice(index, 1);

    if (activeProjectId === project.id) {
        activeProjectId = projects.length > 0 ? projects[0].id : null;
    }
    saveProjects();
}

export function getProjects() {
    return [...projects];
}