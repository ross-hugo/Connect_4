grid = [[{}, {}, {}, {}, {}, {}, {}], 
        [{}, {}, {}, {}, {}, {}, {}], 
        [{}, {}, {}, {}, {}, {}, {}], 
        [{}, {}, {}, {}, {}, {}, {}], 
        [{}, {}, {}, {}, {}, {}, {}], 
        [{}, {}, {}, {}, {}, {}, {}]]
let player = 'red';
function renderBoard() {
    let board = document.getElementById('board')
    let circles = ``;
    console.log(screen.width);
    for(let i = 0; i< grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            let cell_fill = grid[i][j].color || 'white';
            circles += `<circle onclick="clickCell(${j}, ${i})" fill='${cell_fill}' r=50px cx='${j * 110 + 110}' cy='${i * 110 + 110}'/>`;
        }
    }
    board.innerHTML = circles;
}  
function clickCell(x,y) {
    if(grid[0][x].color) {
        console.log('hello');
    }
    else {
        for(let i = grid.length - 1; i >= 0; i--) {
            let row = grid[i];
            let target = row[x];
            if(!row[x].color) {
                row[x] = {color:player};
                renderBoard();
                checkWin();
                player = (player === "red") ? "black" : "red";
                return;
            }
        }
    }
}
function checkWin() {
    if(checkHorizontal()
    || checkVertical()
    || checkUpDiagonal()
    || checkDownDiagonal())
        resetBoard();
    
/*
    || checkUpDiagonal()
    || checkDownDiagonal()) resetBoard();*/
}
function checkVertical() {
    for(let i = 0; i < grid.length-3; i++){
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j].color === player
            && grid[i+1][j].color === player
            && grid[i+2][j].color === player
            && grid[i+3][j].color === player) return true;
        }
    }
    return false;
}
function checkHorizontal() {
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length-3; j++) {
            if(grid[i][j].color === player
            && grid[i][j+1].color === player
            && grid[i][j+2].color === player
            && grid[i][j+3].color === player) return true;
        }
    }
    return false;
}
function checkUpDiagonal() {
    for(let i = 0; i < grid.length-3; i++){
        for(let j = 0; j < grid[0].length-3; j++) {
            if(grid[i][j].color === player
            && grid[i+1][j+1].color === player
            && grid[i+2][j+2].color === player
            && grid[i+3][j+3].color === player) return true;
        }
    }
    return false;
}
function checkDownDiagonal() {
    for(let i = 0; i < grid.length-3; i++){
        for(let j = grid[0].length-1; j >= 3; j--) {
            if(grid[i][j].color === player
            && grid[i+1][j-1].color === player
            && grid[i+2][j-2].color === player
            && grid[i+3][j-3].color === player) return true;
        }
    }
    return false;
}
function resetBoard() {
    renderBoard();
    alert(`Player ${player} won!`);
    clearBoard();
}
function clearBoard() {
    grid = [[{}, {}, {}, {}, {}, {}, {}], 
    [{}, {}, {}, {}, {}, {}, {}], 
    [{}, {}, {}, {}, {}, {}, {}], 
    [{}, {}, {}, {}, {}, {}, {}], 
    [{}, {}, {}, {}, {}, {}, {}], 
    [{}, {}, {}, {}, {}, {}, {}]];
    renderBoard();
}
function play() {
    renderBoard();
    
}
function listen_render() {}
    document.addEventListener('DOMContentLoaded', play);
    
    

