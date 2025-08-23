const input = document.querySelector("#userin");

const btn = document.querySelector("#btn");

const mainlist = document.querySelector("#list");

function addtask() {
  const values = input.value;
  if (values == "") {
    alert("enter something first");
    return; //bocz without it an empty list will be created and added
    // return stops the function
  }

  const lists = document.createElement("li");
  const del = document.createElement("button");
  del.innerText = "delete";

  lists.innerText = values;

  lists.appendChild(del); //to add del btn next to the task
  mainlist.appendChild(lists);
  input.value = "";

  /**
   * why define this inside the function
   * bcoz we cant access lists outside the scope of this function
   */

  del.addEventListener("click", () => {
    if (confirm("are ypou sure")) {
      lists.remove();
    }
  });
}
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
