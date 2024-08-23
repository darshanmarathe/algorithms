const { log, dir, table, clear } = console;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: Graph ");

class Vertex {}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  AddVertex(ver) {
    if (!(ver in this.adjacencyList)) this.adjacencyList[ver] = [];
  }
  AddEdge(ver, edge) {
    this.AddVertex(ver);
    this.AddVertex(edge);

    this.adjacencyList[ver].push(edge);

    this.adjacencyList[edge].push(ver);
  }

  RemoveVertex(ver) {
    this.adjacencyList[ver].forEach((edge) => {
      this.RemoveEdge(ver, edge);
    });

    delete this.adjacencyList[ver];
  }
  RemoveEdge(ver, edge) {
    this.adjacencyList[ver] = this.adjacencyList[ver].filter((v) => v != edge);
    this.adjacencyList[edge] = this.adjacencyList[edge].filter((v) => v != ver);
  }
}

const g = new Graph();
g.AddVertex("Tokyo");
g.AddEdge("Tokyo", "Singapoor");
g.AddEdge("Singapoor", "Chennai");
log(g.adjacencyList);
g.RemoveVertex("Tokyo");
log(g.adjacencyList);

t.that(g, `graph not null`).not.isEquals(null);
