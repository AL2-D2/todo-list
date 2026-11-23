import projectIcon from "../../assets/work.svg";
import { handleTaskUI } from "../tasks/taskUIHandler.js";

function loadNoProjectContentUI() {
    const main = document.querySelector("main");
    main.classList = "no-project";
    main.innerHTML = `<div class="project-info">
            <div class="project-title-container">
                <img class="project-amblem" src="${projectIcon}">
                <h1 class="project-title-name">No Project Selected</h1>
            </div>
            <p class="project-title-description"></p>
        </div>   
        <div class="status-buttons no-display">
            <button class="all-btn">All</button>
            <button class="active-btn">Active</button>
            <button class="completed-btn">Completed</button>
        </div>
        <div class="task-container no-display">
            <h2 class="title">Tasks</h2>            
        </div> 
        <div class="add-task-container no-display">
            <h2 class="title">Add a New Task</h2>
            <form id="add-task-form">
                <div>
                    <label for="input-task-title" required>Name</label>
                    <input class="wide-input input" type="text" id="input-task-title">
                </div>
                <div>
                    <label for="input-task-description">Description</label>
                    <textarea class="wide-input input" id="input-task-description"></textarea>
                </div>
                <div>
                    <label for="input-task-date">Deadline</label>
                    <input class="wide-input input" type="date" id="input-task-date">
                </div>
                <div>
                    <label for="input-task-priority">Priority</label>
                    <select class="wide-input input" id="input-task-priority" required>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </form>
            <button id="add-task-btn" type="submit" form="add-task-form">+ Add Task</button>
        </div>    
            <h1 class="no-project-description">Create a new one to get started.</h1>`;

    main.querySelector(".status-buttons").classList.add("no-display");
    main.querySelector(".task-container").classList.add("no-display");
    main.querySelector(".add-task-container").classList.add("no-display");

    main.querySelector(".no-project-description").classList.remove("no-display");
}

function loadProjectContentUI(project) {

    const main = document.querySelector("main");

    main.classList.remove("no-project");
    main.querySelector(".no-project-description").classList.add("no-display");

    // main.querySelector(".status-buttons").classList.remove("no-display");
    main.querySelector(".task-container").classList.remove("no-display");
    main.querySelector(".add-task-container").classList.remove("no-display");

    main.querySelector(".project-title-name").textContent = project.name;
    main.querySelector(".project-title-description").textContent = project.description;

    handleTaskUI(project, main);
}

export function renderProjectContent(project) {

    if (!project) {
        loadNoProjectContentUI();
    }
    else {
        loadProjectContentUI(project);
    }
}