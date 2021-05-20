import React from 'react'
import styled from 'styled-components'
import girl from '../assets/steps-image.png'
import arrowdown from '../assets/arrow-down.png'
import arrowup from '../assets/arrow-up.png'

class StepsSection extends React.Component{
  constructor() {
    super();
    this.state = {
      arrowUp: false
    }
  }

changeArrow = () => {
  this.setState({
    arrowUp: !this.state.arrowUp
  })
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
 <details>
 <summary key={i} className='dropdown' onClick={this.changeArrow}>{lista.title}
 {this.state.arrowUp ? <img src={arrowup}  /> : <img src={arrowdown}  />}
  </summary>
 <div className='description'>
   {lista.desc}
 </div>
</details>
</li>
        
        // <div onClick={()=>{this.setState((state, props) => ({show:!this.state.show}))}} className="dropdown"><h2>{lista.title}</h2><img src={arrow} alt="" /></div>
        // { this.state.show? <p>{lista.desc}</p> : null}
    
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

  details {
    font: 16px "Open Sans", "Arial", sans-serif;
    width: 100%;
  }

  details > summary {
  
   font-weight: bold;
  }

  details > p {
    border-radius: 0 0 10px 10px;
    background-color: #ddd;
    padding: 2px 6px;
    margin: 0;
    box-shadow: 3px 3px 4px black;
    color: var(--light-gray);
  }
    .dropdown {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    .description {
      padding-top: 20px;
      color: var(--light-gray);
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