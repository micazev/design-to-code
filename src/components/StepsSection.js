import React from 'react'
import styled from 'styled-components'
import girl from '../assets/steps-image.png'

function StepsSection() {
  const [showContent, setShowContent] = React.useState(false)
  const onClick = () => setShowContent(true)

  return (
    <StepsStyles  className="sections">
    <Illustration>
      {/* <img src={girl} /> */}
    </Illustration>
     <Content>
       <div><span className="tag">3 easy steps</span></div>
      <h1>How it works</h1>
      <ul>
        <li>
          <div onClick={onClick} className="dropdown"><h2>1. Download Tattoo master app (dropdown)</h2>seta</div>
          { showContent ? <p>Download the application in App Store and you acan find the wizard in any location around the world. </p> : null}
      </li>
        <li><div onClick={onClick} className="dropdown"><h2>2. Enter your location</h2>seta</div>
        { showContent ?  <p>Download the application in App Store and you acan find the wizard in any location around the world. </p> : null}
        </li>
        <li><div onClick={onClick}  className="dropdown"><h2>3. Find your tattoo mester</h2>seta</div>
        { showContent ? <p>Download the application in App Store and you acan find the wizard in any location around the world. </p> : null}
        </li>
      </ul>
     </Content>
  </StepsStyles>
  )
}

export default StepsSection

const StepsStyles = styled.div`
  background: url(${girl}) no-repeat left;
  background-position: left center;
  background-size: contain;  
  margin-top: 200px;
  text-align: left;
  display: grid;
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
// eslint-disable-next-line
  // const Steps = [
  //   {
  //     title: '',
  //     desc: ''
  //   },
  //   {
  //     title: '',
  //     desc: ''
  //   },
  //   {
  //     title: '',
  //     desc: ''
  //   }
  // ]