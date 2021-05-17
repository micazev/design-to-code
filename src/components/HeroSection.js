import React from 'react'
import styled from 'styled-components'

import HeroImg from '../assets/hero-image.png'



export const HeroSection = () => {
  return (
    <HeroStyles>
    <header>
    <p>Tattoo master wherever you are</p>
    <div className="button"><a href="/" className="buttons">New York</a></div>
      </header>      
    </HeroStyles>
  )
}

const HeroStyles = styled.div`
      flex: 1;
      background: url(${HeroImg}) no-repeat;
      background-position: center top;
      background-size: contain;
      width: 100%;
      min-height: 50vh;
     
    header{ 
      width: 100%;
    	display: grid;
      gap: 20px;
	    grid-template-columns: repeat(3, 1fr);
      grid-template-rows: (70px, 150px);
    }

    p {
      text-align: center;
      grid-column: 2;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .button {
      grid-column: 3;
      grid-row: 2;
    }
`
