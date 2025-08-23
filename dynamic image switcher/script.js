const b1 = document.querySelector("#btn1");
const b2 = document.querySelector("#btn2");
const b3 = document.querySelector("#btn3");
const img = document.querySelector("img");
const b4 = document.querySelector("#btn4");

b1.addEventListener("click", () => {
  img.setAttribute("src", "img0.jpeg");
  img.setAttribute("alt", "cat");
  b3.disabled = false;
  /**
   * if we dont specify false
   * then btn3 will be disabled after first time clicked
   */
});

b2.addEventListener("click", () => {
  img.setAttribute("src", "download.jpeg");
  img.setAttribute("alt", "goku");
  b3.disabled = false;
});

b3.addEventListener("click", () => {
  if (img.hasAttribute("src")) {
    img.removeAttribute("src");
    img.removeAttribute("alt");
    b3.disabled = true; // disables the remove button
  } else {
    alert("no image to remove");
  }
});

b4.addEventListener("click", () => {
  img.setAttribute("src", "initial.jpeg");
  img.setAttribute("alt", "default image");
  b3.disabled = false;
});
