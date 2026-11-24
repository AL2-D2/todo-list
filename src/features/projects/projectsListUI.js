import projectListMarkerIcon from "../../assets/project-list-marker.svg"

export function renderProjectList(projects, activeProjectId, onSelectProject) {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";

    for (const project of projects) {

        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectsContainer.append(projectDiv);

        const div = document.createElement("div");

        const projectEditButton = document.createElement("button");
        projectEditButton.classList.add("project-edit-btn");
        projectEditButton.innerText = "...";

        const dropdownMenu = document.createElement("div");
        dropdownMenu.classList.add("dropdown-menu");
        dropdownMenu.classList.add("no-display");

        const dropdownEditBtn = document.createElement("button");
        dropdownEditBtn.innerText = "EDIT";
        const dropdownDeleteBtn = document.createElement("button");
        dropdownDeleteBtn.innerText = "DELETE";

        dropdownEditBtn.id = "edit-project-btn";
        dropdownDeleteBtn.id = "delete-project-btn";

        dropdownMenu.append(dropdownEditBtn, dropdownDeleteBtn);

        projectDiv.append(div, projectEditButton, dropdownMenu);

        const projectListMarker = document.createElement("img");
        const projectName = document.createElement("p");

        projectListMarker.classList.add("project-list-marker");
        projectListMarker.src = projectListMarkerIcon;
        projectName.classList.add("project-name");

        projectName.innerText = project.name;

        if (project.id === activeProjectId) {
            projectDiv.classList.add("active");
        }

        projectDiv.addEventListener("click", (e) => {
            if (e.target.closest(".project-edit-btn") || e.target.closest(".dropdown-menu")) {
                return;
            }
            onSelectProject(project.id);
        });

        div.append(projectListMarker, projectName);
    }
}