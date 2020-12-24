import React from "react";
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from "../tetrominos";

const Cell = () => (
    <StyledCell type = {'o'} color = {TETROMINOS['o'].color} />
)

export default Cell;