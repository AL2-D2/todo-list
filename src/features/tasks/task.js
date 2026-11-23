export class Task {
    isCompleted = false;
    constructor(name, description = "", deadline, priority) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
    }

    toggleComplete() {
        this.isCompleted = !this.isCompleted;
    }
}

export function createTask(project, name, description, formattedDate, priority) {
    const task = new Task(name, description, formattedDate, priority);
    project.addTask(task);
}