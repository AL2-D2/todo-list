let projects = [];
let activeProjectId = "defaultValue";

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
}

export function getProjects() {
    return [...projects];
}