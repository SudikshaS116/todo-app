function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerHTML = task + " <button onclick='deleteTask(this)'>❌</button>";

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}