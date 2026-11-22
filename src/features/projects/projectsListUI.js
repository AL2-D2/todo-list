import projectListMarkerIcon from "../../assets/project-list-marker.svg"

export function renderProjectList(getProjects) {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";

    for (const project of getProjects) {

        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectsContainer.append(projectDiv);

        const div = document.createElement("div");

        const projectEditButton = document.createElement("button");
        projectEditButton.classList.add("project-edit-btn");
        projectEditButton.innerText = "...";

        projectDiv.append(div, projectEditButton);

        const projectListMarker = document.createElement("img");
        const projectName = document.createElement("p");

        projectListMarker.classList.add("project-list-marker");
        projectListMarker.src = projectListMarkerIcon;
        projectName.classList.add("project-name");

        projectName.innerText = project.name;

        div.append(projectListMarker, projectName);
    }
}