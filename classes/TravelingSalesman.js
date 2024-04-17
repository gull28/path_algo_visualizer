// maybe make a base class something like algorithm that initialized grid
class TravelingSalesman{
    constructor(grid, startX, startY, checkpoints){
        this.grid = grid;
        this.startX = startX;
        this.startY = startY;
        this.checkpoints = checkpoints;
        this.initializeGrid();
    } 

    initializeGrid(){
        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[0].length; y++) {
                this.grid[x][y].distance = Infinity;
                this.grid[x][y].isVisited = false;
                this.grid[x][y].previous = null;
            }
        }
        this.grid[this.startX][this.startY].distance = 0;
    }


}