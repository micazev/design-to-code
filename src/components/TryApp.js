import React from 'react'
import styled from 'styled-components'
import tryapp from '../assets/tryapp-image.png'
import appstore from '../assets/appstore.jpg';

export const TryApp = () => {
  return (
    <TryAppStyles>
      <Content>
      <div><span className="tag">App</span></div>
      <h1>Try Tattoo Master App for free for 14 days</h1>
      <p>The application provides access to a huge community around the world. Download and try!</p>
      <img src={appstore} alt="" />
      </Content>
      <Illustration />
    </TryAppStyles>
  )
}

const TryAppStyles = styled.div`
  background: url(${tryapp}) no-repeat;
  background-position: right top;
  background-size: contain;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 200px;
`
const Content = styled.div`
  padding-left: 50px;
  p {
    font-weight: bold;
  }
  img {
    margin-top: 30px;
    width: 150px;
  }
`

const Illustration = styled.div`

`