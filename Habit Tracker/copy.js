const input = document.querySelector("#inputs");
const btn = document.querySelector("#btn");
const mainList = document.querySelector("#mainlist");

let habits = [];

try {
  const stored = JSON.parse(localStorage.getItem("habits"));
  habits = Array.isArray(stored) ? stored : [];
} catch {
  habits = [];
}

habits.forEach((habit) => {
  render(habit);
});

function render(habit) {
  const list = document.createElement("li");
  list.innerText = habit.name;

  habit.week.forEach((checked, index) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;

    checkbox.addEventListener("change", () => {
      habit.week[index] = checkbox.checked;
      localStorage.setItem("habits", JSON.stringify(habits));
    });

    list.appendChild(checkbox);
  });

  const delbtn = document.createElement("button");
  delbtn.innerText = "Delete";

  delbtn.addEventListener("click", () => {
    list.remove();
    habits.filter((h) => {
      h.name !== habit.name;
    });
    localStorage.setItem("habits", JSON.stringify(habits));
  });

  list.appendChild(delbtn);
  mainList.appendChild(list);
}

btn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const habit = {
    name: text,

    week: [false, false, false, false, false, false, false],
  };

  habits.push(habit);
  localStorage.setItem("habits", JSON.stringify(habits));

  render(habit);
  input.value = "";
});
