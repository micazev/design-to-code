import React from 'react'
import styled from 'styled-components'
import girl from '../assets/steps-image.png'
import arrow from '../assets/down-arrow.svg'

class StepsSection extends React.Component{
  constructor() {
    super();
    this.state = {
      show: false
    }
  }



render() {
  return (
    <StepsStyles  className="sections">
    <Illustration />
     <Content>
       <div><span className="tag">3 easy steps</span></div>
      <h1>How it works</h1>
      <ul>
        {Steps.map((lista, i)=>(
        <li key={i}>
        <div key={i} onClick={()=>{this.setState((state, props) => ({show:!this.state.show}))}} className="dropdown"><h2>{lista.title}</h2><img src={arrow} alt="" /></div>
        { this.state.show? <p>{lista.desc}</p> : null}
    </li>
        ))}
        
      </ul>
     </Content>
  </StepsStyles>
  )
}
}

export default StepsSection

const StepsStyles = styled.div`
  background: url(${girl}) no-repeat left;
  background-position: left center;
  background-size: contain;  
  margin-top: 200px;
  text-align: left;
  display: grid;
  height: 50vh;
  grid-template-columns:1fr 1fr;
  /* max-height: 50vh; */
  h1{
    font-weight: bold;
    margin-bottom: 5vh;
  }
`

  const Illustration = styled.div`
  grid: 1;
  `

  const Content = styled.div`
  grid: 2;
  text-align: left;
  img {
    max-width: 10px;
    max-height: 10px;
  }
  h2{
    font-weight: bold;
    font-size: 16px;
  }
  ul{
    width: 60%;
  }
  li {
    margin-bottom: 2vh;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--superlight-gray);
    ::last-child{
      border-bottom: none;
    }
    .dropdown {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
  }
  ` 
  const Steps = [
    {
      title: '1. Download Tattoo master app',
      desc: 'Download the application in App Store and you acan find the wizard in any location around the world. '
    },
    {
      title: '2. Enter your location',
      desc: 'Download the application in App Store and you acan find the wizard in any location around the world.'
    },
    {
      title: '3. Find your tattoo master',
      desc: 'Download the application in App Store and you acan find the wizard in any location around the world.'
    }
  ]