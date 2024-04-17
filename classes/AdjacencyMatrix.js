// think of a way to make this work with the grid
class AdjacencyMatrix{
    constructor(){
        this.matrix = [];
    }

    addVertex(){
        this.matrix.push([]);
        for(let i = 0; i < this.matrix.length; i++){
            this.matrix[i].push(0);
        }
    }

    addEdge(from, to, weight){
        this.matrix[from][to] = weight;
    }

    removeEdge(from, to){
        this.matrix[from][to] = 0;
    }

    getEdge(from, to){
        return this.matrix[from][to];
    }

    getMatrix(){
        return this.matrix;
    }
}