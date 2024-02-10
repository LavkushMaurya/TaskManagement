function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var p = document.createElement("p");
        p.textContent = taskInput.value;
        p.onclick = function() {
            p.classList.toggle("completed");
        };
        taskList.appendChild(p);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}