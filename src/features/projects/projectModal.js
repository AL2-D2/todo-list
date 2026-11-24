import { removeProject } from "./project.js";

export function initNewProjectModal(onCreateProject) {
    const openBtn = document.querySelector("#new-project-btn");
    const cancelBtn = document.querySelector("#cancel-new-project");
    const modal = document.querySelector("#add-project-modal");
    const form = document.querySelector("#new-project-form");

    openBtn.addEventListener("click", () => {
        modal.classList.add("flex-visible");
    });
    cancelBtn.addEventListener("click", () => {
        form.reset();
        modal.classList.remove("flex-visible");
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#project-name-input").value.trim();
        const description = document.querySelector("#project-description-input").value.trim();

        if (!name) return;

        onCreateProject({ name, description });

        form.reset();
        modal.classList.remove("flex-visible");
    });
}

export function initEditProjectModal(getActiveProject, onProjectChange) {
    const modal = document.querySelector("#edit-project-modal");
    const form = document.querySelector("#edit-project-form");
    const modalCloseBtn = modal.querySelector("#cancel-project-btn");

    document.addEventListener("click", (e) => {
        const editMenuBtn = e.target.closest(".project-edit-btn");
        if (editMenuBtn) {
            e.stopPropagation();

            const currentProjectDiv = editMenuBtn.closest(".project");
            const currentMenu = currentProjectDiv.querySelector(".dropdown-menu");


            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                if (menu !== currentMenu) {
                    menu.classList.add("no-display");
                }
            });

            currentMenu.classList.toggle("no-display");
            return;

        }

        const dropdownEditBtn = e.target.closest("#edit-project-btn");
        if (dropdownEditBtn) {
            e.stopPropagation();

            const clickedProjectDiv = dropdownEditBtn.closest(".project");

            const activeProject = getActiveProject();
            if (!activeProject) return;

            document.querySelectorAll(".dropdown-menu").forEach((m) => m.classList.add("no-display"));
            modal.classList.add("flex-visible");


            const projectName = modal.querySelector("input");
            const projectDescription = modal.querySelector("textarea");

            projectName.value = activeProject.name;
            projectDescription.value = activeProject.description;
            return;
        }

        const dropdownDeleteBtn = e.target.closest("#delete-project-btn");
        if (dropdownDeleteBtn) {
            e.stopPropagation();
            const activeProject = getActiveProject();
            if (!activeProject) return;

            document.querySelectorAll(".dropdown-menu").forEach((m) => m.classList.add("no-display"));

            removeProject(activeProject);

            onProjectChange();
            return;
        }

        if (!e.target.closest(".dropdown-menu")) {
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                menu.classList.add("no-display");
            });
        }
    });

    modalCloseBtn.addEventListener("click", () => {
        form.reset();
        modal.classList.remove("flex-visible");
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const activeProject = getActiveProject();
        if (!activeProject) return;

        const name = modal.querySelector("#edit-project-name-input").value.trim();
        const description = modal.querySelector("#edit-project-description-input").value.trim();

        if (!name) return;

        activeProject.name = name;
        activeProject.description = description;

        form.reset();
        modal.classList.remove("flex-visible");
        onProjectChange();
    });
}