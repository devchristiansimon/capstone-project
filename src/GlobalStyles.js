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

  h1 {
    font-family: 'Press Start 2P', cursive;
    background-color: #000;
    color: #db0000;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-align: center;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  a:link,
  a:visited {
    color: white;
    text-decoration: none;
  }
  .active {
    color: #db0000 !important;
  }
  .linkStyle {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.7rem;
  }
`;
