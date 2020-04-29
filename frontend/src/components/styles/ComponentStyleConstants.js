import { css } from "styled-components";

export const fadedBlack = "rgba(0, 0, 0, 0.5)";
export const babySeal = "#709689";
export const aqua = "#7fffd4";
export const bangers = "Bangers, cursive";
export const button = css`
  font-size: 1rem;
  border-color: black;
  border-radius: 5px;
  outline: none;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${fadedBlack};
    border-color: white;
  }
`
export const inputField = css`
    color: ${aqua};
    font-family: Bangers, cursive;
    font-size: 2rem;
    margin: 2%;
    width: 40%;

    input {
      color: black;
      font-size: 1rem;
      text-align: center;
      height: 3vh;
      border-color: black;
      border-radius: 5px;
      width: 100%;
      outline: none;
    }
`
