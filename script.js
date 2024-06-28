createSquares(16);

function createSquares (userInput) {
    let boxNumber = userInput * userInput;
    let boxSize = 960 / userInput;
    for (let i = 0; i < boxNumber; i++){
        const mainContainer = document.querySelector(".main-container");
        const square = document.createElement("div"); 
        square.style.border = "1px solid black";
        square.style.minWidth = boxSize + "px";
        square.style.minHeight = boxSize + "px";
        square.classList.add("boxes");
        mainContainer.appendChild(square);
    }
}

const boxes = document.querySelectorAll(".boxes"); 
boxes.forEach(box => {
    box.addEventListener("mouseover",(e) => {
        e.target.style.background = "black";
    })
})

