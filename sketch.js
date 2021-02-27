var contain = document.getElementById("container");

for(var i=0; i<16; i++){
    var grid = document.createElement("div");
    grid.innerHTML = "hey";
    grid.style.color = "red";
    document.contain.appendChild(grid);
}