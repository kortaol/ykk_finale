function addNewTask () {
    let taskNameElem = document.getElementById("task-name-input");
    let taskName = taskNameElem.value;
    if (!taskName) { alert("Понимаю, мне тоже делать нехуй"); return }

    let listElem = document.getElementById("task-list");
    let newTaskElem = document.createElement('li');
    newTaskElem.innerHTML = `<div class=\"wrapper task-wrapper\"><h2>${taskName}</h2></div>`;
    listElem.prepend(newTaskElem);

    taskNameElem.value = '';
}
