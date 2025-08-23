const input = document.querySelector("#task");
const btn = document.querySelector("#btn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem(tasks)) || []

function createlocalstorage(){
  localStorage.setItem("tasks",JSON.stringify(tasks))
}

function render(){
  taskList.innerHTML = "";
  tasks.forEach(taskObj,index => {
   const task = document.createElement("li");
  
  });
}
btn.addEventListener("click", () => {
  const tasktext = input.value.trim();

  if (tasktext === "") {
    alert("Please enter a task.");
    return;
  }

  // creating a list
  const task = document.createElement("li");

  // creating a checkbox
  const Check = document.createElement("input");
  Check.type = "checkbox";
  Check.style.marginRight = "10px";

  //if checkbox is clicked
  Check.addEventListener("change", () => {
    if (Check.checked) {
      // new concept .checked
      task.style.color = "#888";
    } else {
      task.style.color = "#000";
    }
  });

  //delete button

  const del = document.createElement("button");
  del.innerHTML = "❌";
  del.classList.add("delete_btn");

  del.addEventListener("click", () => {
    task.remove();
  });

  // adding child nodes to the task node

  task.innerText = ""; //clears anything inside the task element
  task.appendChild(Check); //adds checkbox first
  task.appendChild(document.createTextNode(tasktext)); // adds text then
  task.appendChild(del); //adds delete button next

  //append whole task to the task list aka the ul list in html

  taskList.appendChild(task);

  //Clear the input field so the user can type a new task.

  //This is a UI/UX reset — very important for user experience.

  input.value = "";
});
