document.querySelector("#off").addEventListener("click", function() {
    console.log("off_button")
    grid = document.querySelector("#intro_wrapper")
    grid.classList.toggle("no_gif");
    document.querySelector("#off").innerHTML = "Switch to gif background"
});