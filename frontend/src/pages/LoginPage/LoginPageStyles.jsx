import styled from "styled-components";
import { button, inputField } from "../../components/styles/ComponentStyleConstants";

const LoginPageStyles = styled.div`
  display: flex;
  flex-direction: column;

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .username-input {
      margin-top: 10%;
    }

    label {
      ${inputField};
    }

    button {
      ${button};
      width: 10%;
      margin: 2% 0% 10%;

      }
    }
  }

  a {
    width: 35%;
    margin: 0 auto;
    margin-bottom: 20%;

    button {
      ${button};
      width: 100%;
    }
  }
`

export default LoginPageStyles;
