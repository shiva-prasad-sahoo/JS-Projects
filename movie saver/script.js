const input = document.querySelector("#movieInput");
const btn = document.querySelector("#saveBtn");
const mainList = document.querySelector("#movieList");

//load form storage at first
let movie;

try {
  //get the saved data
  movie = JSON.parse(localStorage.getItem("movies")) || [];
} catch (error) {
  movie = [];
}

//loop through saved data
movie.forEach((element) => {
  renderMovie(element);
});

btn.addEventListener("click", () => {
  addmovies();
});

function addmovies() {
  const text = input.value;
  if (text === "") {
    alert("Please enter a movie name.");
    return;
  }

  movie.push(text); //push text to movie array
  localStorage.setItem("movies", JSON.stringify(movie)); //save the array
  renderMovie(text); // display on screen the recently entered movies

  input.value = ""; //clears value
}

//dynamic adding list and displaying it
function renderMovie(MovieName) {
  const lists = document.createElement("li");
  lists.innerText = MovieName;
  mainList.appendChild(lists);
}
