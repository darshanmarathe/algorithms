const { log, dir, table, clear } = console;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: Graph Dijkstra Algo ");
clear();
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  AddVertex(ver) {
    if (!(ver in this.adjacencyList)) this.adjacencyList[ver] = [];
  }
  AddEdge(ver, edge, weight) {
    this.AddVertex(ver);
    this.AddVertex(edge);

    this.adjacencyList[ver].push({ node: edge, weight });

    this.adjacencyList[edge].push({ node: ver, weight });
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

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    //build up initial state
    for (const ver in this.adjacencyList) {
      if (ver === start) {
        distances[ver] = 0;
        nodes.enqueue(ver, 0);
      } else {
        distances[ver] = Infinity;
        nodes.enqueue(ver, Infinity);
      }
      previous[ver] = null;
    }

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // We are done
        // Build up path to go
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] != Infinity) {
        for (const neibhor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neibhor];
          let nextNeibhor = nextNode.node;
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNeibhor]) {
            // updating new smallest distance to neighbour
            distances[nextNeibhor] = candidate;
            // updating prevous - How we got to neibhor
            previous[nextNeibhor] = smallest;

            nodes.enqueue(nextNeibhor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
  BreadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = { [start]: true };

    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex]?.forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          queue.push(element);
        }
      });
    }

    return result;
  }
}

const g = new Graph();
g.AddVertex("Tokyo");
g.AddEdge("Tokyo", "Singapoor", 3);
g.AddEdge("Singapoor", "Chennai", 8);
g.AddVertex("Mumbai");
g.AddEdge("Singapoor", "Mumbai", 7);
g.AddEdge("Mumbai", "Pune", 3);

g.AddEdge("Pune", "Chennai", 3);
g.AddEdge("Pune", "Delhi", 7);
g.AddEdge("Delhi", "London", 11);
g.AddEdge("London", "Tokyo", 13);
g.AddEdge("London", "Mosco", 7);

// log(g.BreadthFirst("Tokyo"));

log(g.Dijkstra("Tokyo", "Chennai"));

t.that(g, `graph not null`).not.isEquals(null);
