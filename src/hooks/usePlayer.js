import { useState } from 'react';

import { randomTetromanos } from "../tetrominos";

export const usePlayer = () => {
    const[player, setPlayer]= useState({
        pos: { x: 0, y: 0 },
        tetrominos: randomTetromanos().shape,
        collided: false,
    });

    return [player];
};
