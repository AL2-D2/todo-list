import calendarIcon from "../../assets/calendar-month.svg";
import uncheckedRadio from "../../assets/radio-button-unchecked.png";
import checkedRadio from "../../assets/radio-button-checked.png";
const taskTemplate = ` 
                <div class="task-left-container">
                    <button id="task-complete-btn" ><img id="radio"src="${uncheckedRadio}"></button>
                    <div class="task-description-container">
                        <p class="task-title"></p>
                        <p class="task-description"></p>
                    </div>
                </div>
                <div class="task-right-container">
                    <div class="task-date-container">
                        <img class="project-schedule-amblem" src="${calendarIcon}">
                        <span id="task-date"></span>
                    </div>

                    <div class="task-priority"></div>
                    <button id="task-delete-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"
                            height="40px" width="40px" fill="#6c1919">
                            <path
                                d="M11.14,35q-1.15,0-1.96-0.82T8.36,32.22V9.17H6.67V6.39h8V5H25.33V6.39h8V9.17H31.64V32.22q0,1.12-0.83,1.95T28.86,35H11.14ZM28.86,9.17H11.14V32.22H28.86V9.17ZM15.19,28.72h2.78V12.64H15.19V28.72Zm6.83,0h2.78V12.64H22.03V28.72ZM11.14,9.17V32.22V9.17Z" />
                        </svg></button>
                </div>
            `;

export function handleTaskUI(project, main) {
    const taskContainer = main.querySelector(".task-container");
    const buttonContainer = document.querySelector(".status-buttons");
    taskContainer.innerHTML = "";

    if (!project.tasks || project.tasks.length === 0) {
        taskContainer.classList.add("no-display");
        buttonContainer.classList.add("no-display");
        return;
    }

    taskContainer.classList.remove("no-display");
    // buttonContainer.classList.remove("no-display");

    for (const task of project.tasks) {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.innerHTML = taskTemplate;

        const completeBtn = taskDiv.querySelector("#task-complete-btn");
        const radioImg = taskDiv.querySelector("#radio"); // Query inside taskDiv, not document!
        const deleteBtn = taskDiv.querySelector("#task-delete-btn");

        radioImg.src = task.isCompleted ? checkedRadio : uncheckedRadio;
        taskDiv.classList.toggle("completed", task.isCompleted);

        completeBtn.addEventListener("click", () => {
            task.isCompleted = !task.isCompleted;
            radioImg.src = task.isCompleted ? checkedRadio : uncheckedRadio;
            taskDiv.classList.toggle("completed", task.isCompleted);
        });

        deleteBtn.addEventListener("click", () => {
            taskDiv.remove();
            project.removeTask(task);
        });

        taskContainer.append(taskDiv);
        configureTasks(task);
    }
}


function configureTasks(task) {
    const titles = document.querySelectorAll(".task-title");
    const descriptions = document.querySelectorAll(".task-description");
    const priorities = document.querySelectorAll(".task-priority");
    const dates = document.querySelectorAll("#task-date");

    titles[titles.length - 1].innerText = task.name;
    descriptions[titles.length - 1].innerText = task.description;
    priorities[titles.length - 1].innerText = task.priority;
    dates[titles.length - 1].innerText = task.deadline;
}