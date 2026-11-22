export function initNewProjectModal() {
    const newProjectButton = document.querySelector("#new-project-btn");
    const cancelNewProjectButton = document.querySelector("#cancel-new-project");
    const newProjectModal = document.querySelector("#add-project-modal");

    newProjectButton.addEventListener("click", () => {
        newProjectModal.classList.add("flex-visible");
    });
    cancelNewProjectButton.addEventListener("click", () => {
        newProjectModal.classList.remove("flex-visible");
    });
}