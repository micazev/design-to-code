import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --gray: #efefef;
    --light-gray: #bbbbbb;
    --superlight-gray: #c7c7c7;
    --dark-gray: #5b5b5d;
    
  }

  html {
    font-size: 14px;
  }

  body {
    font-size: 1rem;
    width: 100vw;
    max-width: 2000px;
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0 auto;
    padding: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
    color: var(--light-gray);
    }

  h1{
    font-size: 3rem;
    margin-top: 20px;
    margin-bottom: 5vh;
    font-weight: 700;
  }

  h2{
    font-weight: bold;
    font-size: 16px;
  }
  h3 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 16px;
  }


  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  .buttons {
    height: 45px;
    width: 120px;
    background: var(--black);
    color: white;
    border: 0;
    
    border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  a {
    text-decoration: none;
    color: white;
  }

    
  }

// quando o gatsby renderiza uma imagem, ele manda uma imagienzinha de 20x20, aqui a gente manda ela ficar
// pixelada enquanto isso acontece. um efeitinho até ela carregar totalmente.
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  ul {
    list-style: none;
  }

.tag {
    /* max-width: 100px; */
    background: #f6f6f6;
    padding: 10px;
    border-radius: 15px;
    font-size: 12px;
    color: var(--dark-gray);
    font-weight: bold;
    text-transform: uppercase;

  }

  .sections {
    margin-top: 10vh;
  }

  .icons {
    max-width: 40px;
    max-height: 40px;
    margin-bottom: 2vh;
  }


`

export default GlobalStyles;
