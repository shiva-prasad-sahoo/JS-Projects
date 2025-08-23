const input = document.querySelector("#task");
const btn = document.querySelector("#btn");
const taskList = document.getElementById("taskList");


// gets the saved tasks from localStorage and empty array if nothing found
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//function to save in localstorage
function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = ""; // clear existing tasks
  tasks.forEach((taskObj, index) => {
    const task = document.createElement("li"); //list created dynamically

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskObj.completed;  //"Set the checkbox to checked if this task was marked completed before."
    checkbox.style.marginRight = "10px";

    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;
      saveToLocalStorage();  //saves changes to localstorage
      applyTaskStyle();   //strikes through (create my own and tinker)
    });

    // Delete button
    const del = document.createElement("button");
    del.innerText = "❌";
    del.classList.add("delete_btn");
    del.style.marginLeft = "10px";

    del.addEventListener("click", () => {
      tasks.splice(index, 1); //removes at that index as index will be updated for each loop
      saveToLocalStorage();  //saves the changes
      renderTasks(); // re-render all to refresh ui
    });

    function applyTaskStyle() {
      if (checkbox.checked) {
        task.style.textDecoration = "line-through";
        task.style.color = "#888";
      } else {
        task.style.textDecoration = "none";
        task.style.color = "#000";
      }
    }

    applyTaskStyle();

    task.appendChild(checkbox);
    task.appendChild(document.createTextNode(taskObj.text));
    task.appendChild(del);

    taskList.appendChild(task);
  });
}

btn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push({ text: taskText, completed: false });
  saveToLocalStorage();
  renderTasks();
  input.value = "";
});

// Load existing tasks on page load
window.addEventListener("DOMContentLoaded", renderTasks);
