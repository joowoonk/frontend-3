import styled from "styled-components";
import { button, inputField } from "../../components/styles/ComponentStyleConstants";

const SignUpPageStyles = styled.div`
  display: flex;
  flex-direction: column;

  .sign-up-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .username-input {
    margin-top: 10%;
  }

  .terms-input {
    display: flex;
    flex-direction: column;

    input {
      width: auto;
      margin-top: 2%;
      height: auto;
    }
  }

  label {
    ${inputField};
  }

  button {
    ${button};
    width: 10%;
    margin: 2% 0% 10%;
  }

  a {
    width: 35%;
    margin: 0 auto;
    margin-bottom: 20%;

    button {
      ${button};
      margin: 0;
      width: 100%;
    }
  }
`

export default SignUpPageStyles;
