class Node {
    constructor(x, y, prev = null) {
        this.data = [x, y];
        this.prev = prev;
    }
}

function getMoves(node) {
    const x = node.data[0];
    const y = node.data[1];
    const moves = [];
    if (x + 1 <= 7 && y + 2 <= 7) {
        moves.push(new Node(x + 1, y + 2, node));
    }
    if (x + 1 <= 7 && y - 2 >= 0) {
        moves.push(new Node(x + 1, y - 2, node));
    }
    if (x + 2 <= 7 && y + 1 <= 7) {
        moves.push(new Node(x + 2, y + 1, node));
    }
    if (x + 2 <= 7 && y - 1 >= 0) {
        moves.push(new Node(x + 2, y - 1, node));
    }
    if (x - 1 >= 0 && y + 2 <= 7) {
        moves.push(new Node(x - 1, y + 2, node));
    }
    if (x - 1 >= 0 && y - 2 >= 0) {
        moves.push(new Node(x - 1, y - 2, node));
    }
    if (x - 2 >= 0 && y + 1 <= 7) {
        moves.push(new Node(x - 2, y + 1, node));
    }
    if (x - 2 >= 0 && y - 1 >= 0) {
        moves.push(new Node(x - 2, y - 1, node));
    }
    return moves;
}

function knightMoves(start, end) {
    let startNode = new Node(start[0], start[1]);
    let queue = [];
    queue.push(startNode);
    let endNode;
    while (queue.length > 0) {
        const node = queue.shift();
        if (node.data[0] == end[0] && node.data[1] == end[1]) {
            endNode = node;
            break;
        }
        queue = queue.concat(getMoves(node));
    }
    printMoves(endNode);
}

function printMoves(node) {
    if (!node) {
        return;
    }
    printMoves(node.prev);
    console.log(node.data.toString());
}

knightMoves([3,3],[3,3]);