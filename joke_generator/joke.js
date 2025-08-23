const btn =  document.querySelector("#btn")
const output = document.querySelector("#output")

btn.addEventListener("click",()=>{
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
        output.innerHTML = $(data.setup)
    })
})