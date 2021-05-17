import React from 'react'
import styled from 'styled-components'
import tryapp from '../assets/tryapp-image.png'

export const TryApp = () => {
  return (
    <TryAppStyles>
      <div><span className="tag">App</span></div>
      <h1>Try Tattoo Master App for free for 14 days</h1>
      <p>The application provides access to a huge community around the world. Download and try!</p>
    </TryAppStyles>
  )
}

const TryAppStyles = styled.div`
  background: url(${tryapp}) no-repeat;
  background-position: right top;
  background-size: contain;
  height: 50vh;

`