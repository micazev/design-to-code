import React from 'react'
import styled from 'styled-components'

import HeroImg from '../assets/hero-image.png'



export const HeroSection = () => {
  return (
    <HeroStyles>
    <header>
    <p>Tattoo master wherever you are</p>
    <a href="/" className="buttons">New York</a>
      </header>      
    </HeroStyles>
  )
}

const HeroStyles = styled.div`
      /* outline: 2px solid black; */
      flex: 1;
      background: url(${HeroImg}) no-repeat;
      background-position: center top;
      background-size: contain;
      width: 100%;
      height: 50vh;
      display: grid;
      grid-template-rows: 50px 1fr;
      p {
        margin-top: 20px;
        padding: 0;
        text-align: center;
    }
    .buttons {
      justify-self: end;
      margin-right: 5%;

    }
`
