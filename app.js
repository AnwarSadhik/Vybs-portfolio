const btn = document.getElementById("my-btn")
const colors = ["red","blue","green","cyan","lightblue","lightgreen","lightyellow"]


btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex]

    document.body.style.backgroundColor = randomColor;
})