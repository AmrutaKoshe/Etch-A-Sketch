var contain = document.getElementById("container");

//variable to denote number of rows or columns in the grid
var n = 16;

//create n*n divs 
for(var i=0; i<n*n; i++){
    var grid = document.createElement("div");
    grid.className = "element";
    grid.style.paddingTop = "90%";
    grid.style.border ="black 1px solid";
    contain.appendChild(grid);
}

//create n columns in the grid.
contain.style.gridTemplateColumns = `repeat(${n},auto)`;

// var gridChange = document.getElementsByClassName("element");

// console.log(gridChange);

document.getElementById("container").addEventListener = ("click", function(){
    console.log("heyy");
    console.log(this);
    this.classList.add("hover");
});

// $(".element").on('mouseover', function () {
//     $(this).addClass("hover");
// });



