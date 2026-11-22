let projects = [];

export class Project {
    constructor(name, description = "", tasks = []) {
        this.name = name;
        this.description = description;
        this.tasks = tasks;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}

export function createProject(name, description) {
    const project = new Project(name, description);
    projects.push(project);
}

export function getProjects() {
    return [...projects];
}