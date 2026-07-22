let btn = document.getElementById("Button");

btn.addEventListener("click", () => {
    if (btn.style.backgroundColor === "black") {
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        btn.innerText = "White";
        btn.style.border="5px solid black"
    } else {
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.innerText = "Black";
        btn.style.border="5px solid blue"
    }
});