class Connect {
    //two players, black and red
    player;
    grid = [];
    finished;

    constructor() {
        this.finished = false;
        //start with red
        this.player = "red";
        for(let i = 0; i < 7; i++) this.grid[i] = [];
    }
    render() {
        
    }

    addPiece(col) {
        if(this.grid[col].length < 6) {
            this.grid[col].push(this.player);
            if (checkWin()) return true;
            this.player = (this.player === "red") ? "black" : "red";
        } else {
            console.log("That's too many pieces");
        }
        return false;
    }
    checkTie() {
        for(let col in this.grid) if (col.length !== 6) return false;
        return true;
    }

    checkWin() {
        if (checkHorizontal()
        || checkVertical()
        || checkUpDiagonal()
        || checkDownDiagonal()){
            this.finished = true;
            alert(this.player + " won")
            return true;
        } 
        return false;
    }
    checkHorizontal() {
        for(let i = 0; i < 4; i++) {
            for(let i = 0; i < 6; i++) {
                if(this.grid[i][j] === this.player
                && this.grid[i+1][j] === this.player
                && this.grid[i+2][j] === this.player
                && this.grid[i+3][j] === this.player) return true;
            }
        }
        return false;
    }
    checkVertical() {
        for(let i = 0; i < 7; i++) {
            for(let i = 0; i < 2; i++) {
                if(this.grid[i][j] === this.player
                && this.grid[i][j+1] === this.player
                && this.grid[i][j+2] === this.player
                && this.grid[i][j+3] === this.player
                ) return true;
            }
        }
        return false;
    }
    checkUpDiagonal() {
        for(let i = 0; i < 4; i++) {
            for(let i = 0; i < 6; i++) {
                if(this.grid[i][j] === this.player
                && this.grid[i+1][j+1] === this.player
                && this.grid[i+2][j+2] === this.player
                && this.grid[i+3][j+3] === this.player) return true;
            }
        }
        return false;
    }
    checkUpDiagonal() {
        for(let i = 0; i < 6; i++) {
            for(let i = 0; i < 4; i++) {
                if(this.grid[i][j-1] === this.player
                && this.grid[i+1][j-1] === this.player
                && this.grid[i+2][j-2] === this.player
                && this.grid[i+3][j-3] === this.player) return true;
            }
        }
        return false;
    }
}