import React from 'react';
import styled from 'styled-components';
import community from '../assets/community-image.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

export default function AboutSection() {
  return (
<AboutStyles  className="sections">
  <div><span className="tag">about</span></div>
  <h1>Worldwide community</h1>

  <Features>
  <Box>
      <img className="icons" src={icon2} />
        <h3>All over the world</h3>
        <p>We bring togheter masters from around the world.</p>
      </Box>
    <Box>
    <img className="icons" src={icon3} />
      <h3>Any style</h3>
      <p>Masters work in different styles - blackworks, watercolor, traditional, new school.</p>
    </Box>
      <Box>
      <img className="icons" src={icon1} />
        <h3>Best tattoo masters</h3>
        <p>Tattoo artistis are tested and certified - you are in safe hands.</p>
      </Box>
      <Box>
      <img className="icons" src={icon4} />
        <h3>Real customer reviews</h3>
        <p>You can leave reviews and photos in the application - see the tattoos of other users and choose your master.</p>
      </Box>

  </Features>
  </AboutStyles>
  );
}

const AboutStyles = styled.div`
  flex: 1;
  background: #fff; // colocar a imagem
  max-width: 100vw; 
  display: grid;
  justify-content: center;

  h1{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 5vh;
    font-weight: 700;
  }

  .icons {
    max-width: 50px;
    max-height: 50px;
    margin: 0 0 10px 0;
    padding: 0;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
  }
`

const Features = styled.div`
  height: 50vh;
  width: 80vw;
  max-width: 2000px;
  background: url(${community}) no-repeat;
  background-position: center center;
  background-size: contain;
  margin-top: 10vh;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-content: space-between;
`

const Box = styled.div`
  flex: 1;
  width: 100%;
  text-align: left;
  p{
    max-width: 250px;
  }
`

const features = [
  {
    img: '',
    title: '',
    text: ''
  },
  {
    img: '',
    title: '',
    text: ''
  },
  {
    img: '',
    title: '',
    text: ''
  },
  {
    img: '',
    title: '',
    text: ''
  }
]