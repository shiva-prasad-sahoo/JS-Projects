const input = document.querySelector("#userin");

const btn = document.querySelector("#btn");

const mainlist = document.querySelector("#list");

let taskarray;

//prevents cases where json.parse gives corrupt data
try {
  const stored = JSON.parse(localStorage.getItem("tasked"));
  taskarray = Array.isArray(stored) ? stored : [];
} catch (error) {
  taskarray = [];
}

taskarray.forEach((element) => {
  render(element);
});

function render(values) {
  const lists = document.createElement("li");
  lists.dataset.id = values.id;

  const span = document.createElement("span");
  span.innerText = values.name;

  const del = document.createElement("button");
  del.innerText = "delete";
  del.classList.add("delete-btn");

  lists.appendChild(span);
  lists.appendChild(del);
  mainlist.appendChild(lists);
}

function addtask() {
  const values = input.value;
  if (values == "") {
    alert("enter something first");
    return; //bocz without it an empty list will be created and added
    // return stops the function
  }

  const task = { id: Date.now(), name: values };
  taskarray.push(task);
  localStorage.setItem("tasked", JSON.stringify(taskarray));

  render(task);

  input.value = "";
}

//interaction tools section
btn.addEventListener("click", addtask);

input.addEventListener("keydown", (e) => {
  /**
   * why i passed a variable e
   * here my aim is to check for if enter is pressed or not
   * without the vriable also i can do it
   * but then a key pressed whould have triggered the function
   */

  //   console.log(e.key);
  //   console.log(e.target);
  if (e.key === "Enter") {
    addtask();
  }
});

mainlist.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    // select the delete buttton

    const listremove = e.target.parentElement; // selecting the li
    const idtoremove = Number(listremove.dataset.id);

    if (confirm("are you sure")) {
      listremove.remove();
      //filters the task deleted
      taskarray = taskarray.filter((name) => {
        //select the  first childnode of li ie the textpart
        return name.id !== idtoremove;
      });
      localStorage.setItem("tasked", JSON.stringify(taskarray));
    }
  }
});
