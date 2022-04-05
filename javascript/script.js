const app = document.getElementById("app");
const play = document.getElementById("play");

play.addEventListener("click", generateGrid);

function generateGrid() {
    const diff = document.getElementById("diff").value;
    let cols = "";
    for(let i = 1; i <= diff; i++) {
        cols += `
        <div class="col col${diff}">${i}</div>`
    }
    app.innerHTML = cols;
}