document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
document.body.style.margin = "50px 650px";

let color = "white";
let size = 16;

let header = document.createElement('header');
header.style.textAlign = "center";
header.style.margin = "20px 0";

let title = document.createElement('h1');
title.innerHTML = "Etch a Sketch";
title.style.margin = "0";
header.appendChild(title);

let subTitle = document.createElement('p');
subTitle.innerHTML = "An Odin-based Project";
subTitle.style.margin = "0";
header.appendChild(subTitle);

document.body.appendChild(header);

let main = document.createElement('main');

let mainButtons = document.createElement('div');
mainButtons.style.display = "flex";
mainButtons.style.justifyContent = "center";
mainButtons.style.margin = "10px 0";

let btnReset = document.createElement('button');
btnReset.innerHTML = "Reset";
btnReset.addEventListener('click', reset);

let btnResize = document.createElement('button');
btnResize.innerHTML = "Resize";
btnResize.addEventListener('click', resize);

let btnBlack = document.createElement('button');
btnBlack.innerHTML = "Black";
btnBlack.addEventListener('click', makeBlack);

let btnWhite = document.createElement('button');
btnWhite.innerHTML = "White";
btnWhite.addEventListener('click', makeWhite);

let btnRed = document.createElement('button');
btnRed.innerHTML = "Red";
btnRed.addEventListener('click', makeRed);

mainButtons.appendChild(btnReset);
mainButtons.appendChild(btnResize);
mainButtons.appendChild(btnBlack);
mainButtons.appendChild(btnWhite);
mainButtons.appendChild(btnRed);

main.appendChild(mainButtons);

document.body.appendChild(main);

let row, square, sketch;
sketch = document.createElement('div');
sketch.className = "sketch";
sketch.style.backgroundImage = `url("https://wallpaperaccess.com/full/17350.jpg")`;
sketch.style.backgroundSize = "cover";
sketch.style.backgroundRepeat = "no-repeat";
sketch.style.backgroundPosition = "center";

for(let i = 0; i<size; i++){
row = document.createElement('div');
row.style.display = "flex";
sketch.appendChild(row);
    for(let i=0; i<size; i++){
        square = document.createElement('div');
        square.className = "square";
        square.style.width = "40px";
        square.style.height = "40px";
        square.style.border = "2px solid rgba(0,0,0,0.8)";
        row.appendChild(square);
    }
}


main.appendChild(sketch);

function reset(){
    let squares = document.getElementsByClassName('square');
    for(square of squares){
    square.style.backgroundColor = "";
    }
}

function resize(){
    let newSize = prompt("Please enter the size of the grid");
    size = newSize;
}

function makeBlack(){
    color = "black";
}

function makeWhite(){
    color = "white";
}

function makeRed(){
    color = "red";
}

let squares = document.getElementsByClassName('square');
sketch.addEventListener('mouseover', function(e){
    if(e.target.className === 'square'){
    e.target.style.backgroundColor = color;
    }
})