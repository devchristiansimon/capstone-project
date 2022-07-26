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
    color: #db0000;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
