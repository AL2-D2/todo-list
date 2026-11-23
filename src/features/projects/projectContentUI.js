import { getActiveProject } from "./project.js";
import projectIcon from "../../assets/work.svg";

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
            <div class="task no-display">
                <div class="task-left-container">
                    <button id="task-complete-btn" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"
                            height="40px" width="40px" fill="#6c1919">
                            <path
                                d="M20,36.67q-3.43,0-6.47-1.31T8.22,31.78T4.65,26.47T3.33,20q0-3.46 1.31-6.5T8.22,8.21t5.31-3.56T20,3.33q3.46,0 6.5,1.31t5.29,3.56t3.56,5.29T36.67,20q0,3.43-1.31,6.47t-3.56,5.31T26.5,35.35T20,36.67Zm0-2.78q5.81,0 9.85-4.06T33.89,20q0-5.81-4.04-9.85T20,6.11q-5.78,0-9.83,4.04T6.11,20q0,5.78 4.06,9.83T20,33.89Z" />
                        </svg></button>
                    <div class="task-description-container">
                        <p class="task-title"></p>
                        <p class="task-description"></p>
                    </div>
                </div>
                <div class="task-right-container">
                    <div class="task-date-container">
                        <img class="project-schedule-amblem" src="assets/calendar-month.svg">
                        <span id="task-date"></span>
                    </div>

                    <div class="task-priority">High</div>
                    <button id="task-delete-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"
                            height="40px" width="40px" fill="#6c1919">
                            <path
                                d="M11.14,35q-1.15,0-1.96-0.82T8.36,32.22V9.17H6.67V6.39h8V5H25.33V6.39h8V9.17H31.64V32.22q0,1.12-0.83,1.95T28.86,35H11.14ZM28.86,9.17H11.14V32.22H28.86V9.17ZM15.19,28.72h2.78V12.64H15.19V28.72Zm6.83,0h2.78V12.64H22.03V28.72ZM11.14,9.17V32.22V9.17Z" />
                        </svg></button>
                </div>
            </div>
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
            <button id="add-task-btn">+ Add Task</button>
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

    main.querySelector(".status-buttons").classList.remove("no-display");
    main.querySelector(".task-container").classList.remove("no-display");
    main.querySelector(".add-task-container").classList.remove("no-display");

    main.querySelector(".project-title-name").textContent = project.name;
    main.querySelector(".project-title-description").textContent = project.description;

    main.querySelector(".no-project-description").classList.add("no-display");
}

export function renderProjectContent() {
    const activeProject = getActiveProject();

    if (!activeProject) {
        loadNoProjectContentUI();
    }
    else {
        loadProjectContentUI(activeProject);
    }
}