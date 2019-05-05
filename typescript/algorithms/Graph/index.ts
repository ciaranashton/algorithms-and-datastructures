interface GraphNode {
    key: string;
    neighbours: GraphNode[];
    addNeighbour: Function;
}

interface Result {
    distance: number;
    previous: string | null;
}

export class Graph {
    private nodes: GraphNode[];
    private edges: Map<string, number>;

    constructor() {
        this.nodes = [];
        this.edges = new Map();
    }

    private createNode(key: string): GraphNode {
        const neighbours: GraphNode[] = [];

        return {
            key,
            neighbours,
            addNeighbour(node: GraphNode) {
                neighbours.push(node);
            },
        };
    }

    public addNode(key: string): void {
        this.nodes.push(this.createNode(key));
    }

    public getNode(key: string): GraphNode {
        const node = this.nodes.find(node => node.key === key);
        if (!node) {
            throw new Error(`Could not find source node ${key}`);
        }
        return node;
    }

    public addEdge(key1: string, key2: string, weight: number): void {
        const startNode = this.getNode(key1);
        const endNode = this.getNode(key2);

        this.edges.set(`${key1}-${key2}`, weight);

        startNode.addNeighbour(endNode);
        endNode.addNeighbour(startNode);
    }

    public getEdge(key1: string, key2: string): number | undefined {
        return (
            this.edges.get(`${key1}-${key2}`) ||
            this.edges.get(`${key2}-${key1}`)
        );
    }

    private findLowest(
        dist: { [key: string]: Result },
        visited: Set<string>,
    ): [string, Result] {
        return Object.entries(dist).reduce(
            (
                acc: [string, Result],
                val: [string, Result],
            ): [string, Result] =>
                val[1].distance < acc[1].distance &&
                !visited.has(val[0])
                    ? val
                    : acc,
            ['', { distance: Infinity, previous: null }],
        );
    }

    public dijkstra(source: string) {
        const results: { [key: string]: Result } = {};
        const visited: Set<string> = new Set();

        this.nodes.forEach(node => {
            results[node.key] = {
                distance: Infinity,
                previous: null,
            };
        });
        results[source] = {
            distance: 0,
            previous: null,
        };

        while (visited.size < this.nodes.length) {
            const [lowestKey] = this.findLowest(results, visited);
            visited.add(lowestKey);

            const node = this.getNode(lowestKey);
            node.neighbours.forEach(neighbour => {
                if (visited.has(neighbour.key)) return;

                const edgeWeight = this.getEdge(
                    node.key,
                    neighbour.key,
                );
                const alt =
                    results[node.key].distance +
                    (edgeWeight || Infinity);

                if (alt < results[neighbour.key].distance) {
                    results[neighbour.key] = {
                        distance: alt,
                        previous: node.key,
                    };
                }
            });
        }

        return results;
    }
}
