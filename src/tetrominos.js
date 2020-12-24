export const TETROMINOS = {
    0: { shape: [[0]], color: '0,0,0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
        color: '80, 227, 330',
    },
    J: {
        shape: [
            [0,'j',0],
            [0,'j',0],
            ['j','j',0],
        ],
        color: '36, 95, 223',
    },
    L: {
        shape: [
            [0,'L',0],
            [0,'L',0],
            [0,'L','L'],
        ],
        color: '36, 95, 223',
    },
    O: {
        shape: [
            ['o','o'],
            ['o','o'],
        ],
        color: '223, 173, 36',
    },
    S: {
        shape: [
            [0,'s','s'],
            ['s','s',0],
            [0,0,0],
        ],
        color: '48, 211,56',
    },
    T: {
        shape: [
            [0,0,0],
            ['T','T','T'],
            [0,'T',0],
        ],
        color: '132, 61, 198',
    },
    Z: {
        shape: [
            ['z','z',0],
            [0,'z','z'],
            [0,'T',0],
        ],
        color: '132, 61, 198',
    },
}

export const randomTetromanos = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino]
}