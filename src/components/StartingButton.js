import React from "react";
import { StyledStartButton } from '../components/styles/StaledStartButton';

const StartButton = ({ callback }) => (
    <StyledStartButton onClick={ callback }>Start Button</StyledStartButton>
)

export default StartButton;