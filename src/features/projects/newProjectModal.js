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