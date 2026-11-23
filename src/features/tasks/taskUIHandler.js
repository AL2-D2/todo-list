export function handleTaskUI(task){
    const titles = document.querySelectorAll(".task-title");
    const descriptions = document.querySelectorAll(".task-description");
    const prioritys = document.querySelectorAll(".task-priority");
    const dates = document.querySelectorAll("#task-date");    

    titles[titles.length - 1].innerText = task.name;
    descriptions[titles.length - 1].innerText = task.description;
    prioritys[titles.length - 1].innerText = task.priority;
    dates[titles.length - 1].innerText = task.deadline;
}