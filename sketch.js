var contain = document.getElementById("container");
var n = 20;

// for(let i=0; i<n*n; i++){
//     var grid = document.createElement("div");
//     grid.className = "element";

//     //size of the grid 
//     var size = 94 - Math.ceil(n/1.9);
//     grid.style.paddingTop = `${size}%`;

//     grid.style.border ="#b3b3b3 1px solid";
//     contain.appendChild(grid);
// }

document.getElementById("myRange").addEventListener("change", function(){

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

    //iterating through the array for mouseover event and 
    //changing the colour of each when the mouse hovers over it.
    for (let i = 0; i < gridChange.length; i++){
        gridChange[i].addEventListener("mouseover", function(){
            this.classList.add("hover");
        });
    }

    //reset the grid
    document.getElementById("reset").addEventListener("click",function(){
        for (let i = 0; i < gridChange.length; i++)
            gridChange[i].classList.remove("hover");
    })

})


