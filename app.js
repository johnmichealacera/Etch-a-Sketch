let btnSketch = document.getElementById('sketch');
btnSketch.addEventListener('click', sketch);

function sketch(){
btnSketch.style.display = "none";
document.body.innerHTML = "";

let size = prompt("Enter desired grid size: ");
let color = "white";

let header = document.createElement('header');
header.style.textAlign = "center";

let title = document.createElement('h1');
title.innerHTML = "Etch-a-Sketch";
title.style.marginTop = "50px";
title.style.marginBottom = '0';

let caption = document.createElement('p');
caption.innerHTML = "An Odin-based Project";

header.appendChild(title);
header.appendChild(caption);

document.body.appendChild(header);

let nav = document.createElement('nav');
nav.style.display = "flex";
nav.style.justifyContent = "center";

let btnReset = document.createElement('button');
btnReset.innerHTML = "Reset";
btnReset.addEventListener('click', reset);

let btnResize = document.createElement('button');
btnResize.innerHTML = "Resize";
btnResize.addEventListener('click', sketch);

let selectColor = document.createElement('select');
let option = document.createElement('option');
option.text = "Select Color";
option.disabled = "true";
option.selected = "true";
selectColor.add(option);
option = document.createElement('option');
option.text = "White";
option.value = `255,255,255`;
selectColor.add(option);
option = document.createElement('option');
option.text = "Black";
option.value = `0,0,0`;
selectColor.add(option);
option = document.createElement('option');
option.text = "Red";
option.value = `255,0,0`;
selectColor.add(option);
option = document.createElement('option');
option.text = "Rainbow";
selectColor.add(option);
selectColor.addEventListener('change', updateColor);

nav.appendChild(btnReset);
nav.appendChild(btnResize);
nav.appendChild(selectColor);

document.body.appendChild(nav);

let main = document.createElement('main');
main.style.margin = "10px 200px";

let grids = document.createElement('div');
grids.className = "grid";
grids.style.display = "grid";
grids.style.height = "700px";
grids.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grids.style.backgroundImage = "url('https://cache.popcultcha.com.au/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/b/a/ban57020-one-piece-monkey-d.-luffy-20th-anniversary-figuarts-zero-5.5_-statue-01.1567579404.png')";
grids.style.backgroundRepeat = "no-repeat";
grids.style.backgroundSize = "cover";
grids.style.opacity = "0.8";
grids.style.border = "2px solid black";
grids.addEventListener('mouseover', etchSketch);

let grid;

for(let i=0; i<size*size; i++){
grid = document.createElement('div');
grid.className = "item";
grid.style.border = "1px solid black";
grids.appendChild(grid);
}

main.appendChild(grids);

document.body.appendChild(main);

function etchSketch(e){
    if(e.target.className === 'item'){
        if(selectColor.value !== "Select Color"){
        e.target.style.backgroundColor = `rgba(${selectColor.value},${randomAlpha()})`;
        }
        if(selectColor.value === 'Rainbow'){
            e.target.style.backgroundColor = `rgb(${Math.floor(randomAlpha()*256)}, ${Math.floor(randomAlpha()*256)}, ${Math.floor(randomAlpha()*256)})`;
            
        }
        else{
            e.target.style.backgroundColor = color;
        }
    }
}

function reset(){
    let items = document.getElementsByClassName('item');
    for(item of items){
        item.style.backgroundColor = "";
    }
}

function updateColor(){
    color = selectColor.value;
}

function randomAlpha(){
    return Math.random();
}

}