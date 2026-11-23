import { format } from "date-fns";

export function initNewTaskForm(onCreateTask) {
    const form = document.querySelector("#add-task-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#input-task-title").value.trim();
        const description = document.querySelector("#input-task-description").value.trim();
        const priority = document.querySelector("#input-task-priority").value;

        const date = document.querySelector("#input-task-date").value;
        const formattedDate = format(new Date(date), "d/MMM/y");

        onCreateTask({ name, description, formattedDate, priority });
        form.reset();
    });
}