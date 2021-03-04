var contain = document.getElementById("container");
var n = 20;

function colour(){
    //variable to denote number of rows or columns in the grid
    n = document.getElementById("myRange").value;

    //remove all elements from the class
    var rem = document.getElementsByClassName('element');
    while(rem[0]) {
        rem[0].parentNode.removeChild(rem[0]);
    }

    //replace the class with new n*n divs 
    for(let i=0; i<n*n; i++){
        var grid = document.createElement("div");
        grid.className = "element";

        //size of the grid 
        var size = 94 - Math.ceil(n/1.9);
        grid.style.paddingTop = `${size}%`;

        grid.style.border ="#b3b3b3 1px solid";
        contain.appendChild(grid);
    }

    //create n columns in the grid.
    contain.style.gridTemplateColumns = `repeat(${n},auto)`;

    //storing all the grids in an array class
    var gridChange = document.getElementsByClassName("element");

    gridColor(gridChange);

    //reset the grid
    document.getElementById("reset").addEventListener("click",function(){
        for (let i = 0; i < gridChange.length; i++)
            gridChange[i].style.backgroundColor=""
    })
}

//function to change colour of inddivial grid on mouseover
function gridColor(gridChange){
    
    //get the colour from colourpicker
    c = document.getElementById("colourpicker").value;

    //changing the colour of each grid when the mouse hovers over it.
    for (let i = 0; i < gridChange.length; i++){
        gridChange[i].addEventListener("mouseover", function(){
            this.style.backgroundColor = c;
        });
    }
}

//when colour is changed after already drawing on the grid
document.getElementById("colourpicker").addEventListener("input", gridColor);

//working grid should be present when the page is first loaded
window.addEventListener('load', colour);

//when the size of the grid is changed
document.getElementById("myRange").addEventListener("change", colour)


