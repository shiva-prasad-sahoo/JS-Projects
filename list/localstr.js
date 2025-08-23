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
  const del = document.createElement("button");
  del.innerText = "delete";

  lists.innerText = values;

  lists.appendChild(del); //to add del btn next to the task
  mainlist.appendChild(lists);

  /**
   * why define this inside the function
   * bcoz we cant access lists outside the scope of this function
   */

  del.addEventListener("click", () => {
    if (confirm("are you sure")) {
      lists.remove();

      //filters the task deleted
      taskarray = taskarray.filter((name) => {
        return name !== values;
      });
      localStorage.setItem("tasked", JSON.stringify(taskarray));
    }
  });
}

function addtask() {
  const values = input.value;
  if (values == "") {
    alert("enter something first");
    return; //bocz without it an empty list will be created and added
    // return stops the function
  }

  taskarray.push(values);
  localStorage.setItem("tasked", JSON.stringify(taskarray));

  render(values);

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
