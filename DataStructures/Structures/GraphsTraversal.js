const { log, dir, table, clear } = console;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: Graph Traversal ");

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

  DepthFirstRecursive(startVer) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;

    (function DFS(ver) {
      if (!ver) return null;
      visited[ver] = true;
      result.push(ver);
      adjacencyList[ver].forEach((neibhor) => {
        if (!visited[neibhor]) {
          return DFS(neibhor);
        }
      });
    })(startVer);

    return result;
  }

  DepthFirstIterative(start) {
    const visited = {};
    const Stack = [start];
    const result = [];

    visited[start] = true;
    let currentVer;

    while (Stack.length) {
      currentVer = Stack.pop();
      result.push(currentVer);
      this.adjacencyList[currentVer].forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          Stack.push(n);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.AddVertex("Tokyo");
g.AddEdge("Tokyo", "Singapoor");
g.AddEdge("Singapoor", "Chennai");
g.AddVertex("Mumbai");
g.AddEdge("Mumbai", "Pune");
g.AddEdge("Pune", "Delhi");
g.AddEdge("Delhi", "London");
g.AddEdge("London", "Tokyo");
g.AddEdge("London", "Mosco");

log(g.DepthFirstRecursive("Pune"));
log(g.DepthFirstIterative("Pune"));

t.that(g, `graph not null`).not.isEquals(null);
