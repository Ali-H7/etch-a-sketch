createSquares(16);
addBackground();
function createSquares (userInput) {
    let boxNumber = userInput * userInput;
    let boxSize = 768 / userInput;
    for (let i = 0; i < boxNumber; i++){
        const mainContainer = document.querySelector(".main-container");
        const square = document.createElement("div"); 
        square.style.border = "0.1px solid grey";
        square.style.minWidth = boxSize + "px";
        square.style.minHeight = boxSize + "px";
        square.classList.add("boxes");
        square.style.opacity = "0.1"
        mainContainer.appendChild(square);
    }
}
function addBackground () {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => {
        box.addEventListener("mouseover",(e) => {
            let rgbValue1 = randomizeValue(1, 255);
            let rgbValue2 = randomizeValue(1, 255);
            let rgbValue3 = randomizeValue(1, 255);
            const sqaure = e.target;
            sqaure.style.background = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;
            if (sqaure.style.opacity >= 0.1 && sqaure.style.opacity <= 1) {
                let convertedValue = parseFloat(sqaure.style.opacity)
                sqaure.style.opacity = convertedValue + 0.1
                console.log(convertedValue);
            }
        })
    })
}
function resetTheGrid () {
    const boxes = document.querySelectorAll(".boxes"); 
    let numberOfSquares = prompt("Enter the number of squares per side for the new grid 5-100");
    if (numberOfSquares >= 5 && numberOfSquares <= 100) {
        boxes.forEach(box => {
            box.remove()
        })
        createSquares(numberOfSquares);
        addBackground ()      
    } else if (numberOfSquares == null){
        alert("User Cancelled");
    } else {
        alert("Invalid Input");
    }
}
const resetBtn = document.querySelector("button");
resetBtn.addEventListener("click", () => { 
    resetTheGrid();
})

function randomizeValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }