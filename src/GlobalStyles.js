import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1.125rem;
    font-family: sans-serif;
    background-color: #181818;
    color: #fff;
  }

  header {
    font-family: 'Press Start 2P', cursive;
    background-color: #000;
    color: #db0000;
    height: 15vh;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
