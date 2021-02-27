var contain = document.getElementById("container");

//variable to denote number of rows or columns in the grid
var n = 16;

//create n*n divs 
for(let i=0; i<n*n; i++){
    var grid = document.createElement("div");
    grid.className = "element";
    grid.style.paddingTop = "90%";
    grid.style.border ="black 1px solid";
    contain.appendChild(grid);
}

//create n columns in the grid.
contain.style.gridTemplateColumns = `repeat(${n},auto)`;

//storing all the grids in an array class
var gridChange = document.getElementsByClassName("element");

//iterating through the array for mouseover event and 
//changing the colour of each when the mouse hovers over it.
for (let i = 0; i < gridChange.length; i++){
    gridChange[i].addEventListener("mouseover", function(){
        this.classList.add("hover");
    });
}




