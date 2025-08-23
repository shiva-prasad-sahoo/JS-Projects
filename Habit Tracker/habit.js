const input = document.querySelector("#inputs");
const btn = document.querySelector("#btn");
const mainList = document.querySelector("#mainlist");

let habitarray = [];

habitarray = JSON.parse(localStorage.getItem("habits")) || [];

habitarray.forEach((habit) => {
  render(habit);
});

//used to build ui based on data stored
function render(helement) {
  const list = document.createElement("li");
  list.dataset.name = helement.name;
  list.innerText = helement.name;

  helement.week.forEach((h, index) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = h;

    checkbox.addEventListener("change", () => {
      helement.week[index] = checkbox.checked;
      localStorage.setItem("habits", JSON.stringify(habitarray));
    });

    list.appendChild(checkbox);
  });

  const delbtn = document.createElement("button");
  delbtn.innerText = "Delete";

  delbtn.addEventListener("click", () => {
    list.remove();

    habitarray = habitarray.filter((h) => {
      return h.name !== helement.name;
    });
    localStorage.setItem("habits", JSON.stringify(habitarray));
  });

  list.appendChild(delbtn);
  mainList.appendChild(list);
}

function addtask() {
  const text = input.value.trim();
  if (text === "") return;

  habit = {
    name: text,
    week: [false, false, false, false, false, false, false],
  };

  habitarray.push(habit);
  localStorage.setItem("habits", JSON.stringify(habitarray));
  render(habit);

  input.value = "";
}

btn.addEventListener("click", () => {
  addtask();
});
