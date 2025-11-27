const colors = ["#e31717ff", "#eea927ff", "#f3e11dff", "#bee826ff", "#78df24ff", "#31dd98ff", "#24ead7ff", "#36b6e1ff", "#3c5fdcff", "#8e41e0ff", "#e641e0ff", "#ea67a8ff"];
const btn =document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRadomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRadomNumber() {
    return Math.floor(Math.random() * colors.length);
}