'use strict';

function validSolution(board) {
    // Перевіряємо, чи всі клітинки заповнені числами від 1 до 9
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) return false;
        }
    }

    // Перевіряємо кожен рядок
    for (let i = 0; i < 9; i++) {
        let row = new Set(board[i]);
        if (row.size !== 9) return false;
    }

    // Перевіряємо кожен стовпець
    for (let j = 0; j < 9; j++) {
        let col = new Set();
        for (let i = 0; i < 9; i++) {
            col.add(board[i][j]);
        }
        if (col.size !== 9) return false;
    }

    // Перевіряємо кожну підсітку
    for (let r = 0; r < 9; r += 3) {
        for (let c = 0; c < 9; c += 3) {
            let subgrid = new Set();
            for (let i = r; i < r + 3; i++) {
                for (let j = c; j < c + 3; j++) {
                    subgrid.add(board[i][j]);
                }
            }
            if (subgrid.size !== 9) return false;
        }
    }

    return true;
}

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
])); // => true

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
])); // => false