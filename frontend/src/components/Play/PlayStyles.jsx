import styled from "styled-components";
import { button } from "../styles/ComponentStyleConstants";

const PlayStyles = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.6rem;
  text-align: left;
  border: 2px solid white;
  border-radius: 15px;
  background-color: black;
  color: white;
  padding: 2%;
  margin-bottom: 2%;

  button {
    ${button};
  }
`

export default PlayStyles;
