/*
* By M.K
* 6/22/2020
 */


function find_empty(table) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            if (table[i][j] === 0) {
                return [i, j]
            }
        }
    }

    return [-1, -1]
}

function is_valid(table, x, y, num) {
    let box_x;
    let box_y;

    // check row
    for (let j = 0; j < 9; j++) {

        if (table[x][j] === num && j !== y) {
            return false
        }
    }

    // check column
    for (let i = 0; i < 9; i++) {
        if (table[i][y] === num && i !== x) {
            return false
        }
    }

    // check box

    box_x = x / 3
    box_y = y / 3

    for (let a = 0; (a >= box_x * 3) && (a < box_x * 3 + 3); a++) {
        for (let b = 0; (b >= box_y * 3) && (b < box_y * 3 + 3); b++) {
            if (table[a][b] === num && (a !== x && b !== y)) {
                return false
            }
        }
    }

    return true
}

// ==============================

function solve() {
    let pos;
    let row;
    let col;

    pos = find_empty(Table)
    row = pos[0]
    col = pos[1]

    console.log(row, col)

    if (row === -1 && col === -1) {
        console.log(Table)
        return true
    }

    for (let number = 1; number <= 9; number++) {

        console.log(is_valid(Table, row, col, number))


        if (is_valid(Table, row, col, number)) {
            Table[row][col] = number

            if (solve()) {
                return true
            }

            Table[row][col] = 0

        }
    }

    return false
}