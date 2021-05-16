import React from 'react'
import styled from 'styled-components'

import peoplesay from '../assets/testimonials-image.png'
import tattoo1 from '../assets/client-tattoo1.png'
import tattoo2 from '../assets/client-tattoo2.png'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'


function TestimonialsSection() {
  return (
    <TestimonialsStyles className="sections">
    <Illustration>
      {/* <img src={girl} /> */}
    </Illustration>
  
 <Content>

 <div className="comments">      
<p>        view all comments </p>   
 <div><span className="tag">></span></div>
 </div>

<Boxes>
 <Box>
 <img src={tattoo1} alt="client tattoo 1" />
<BoxInfo>
<img className="avatar" src={avatar1} alt="client tattoo 1" />
<div className="nome">nome</div>
  <div className="comment">comment</div>
 </BoxInfo>
 </Box>
 
 <Box>
 <img src={tattoo2} alt="client tattoo 1" />
<BoxInfo>
<img className="avatar" src={avatar2} alt="client tattoo 1" />
  <div className="nome">nome</div>
  <div className="comment">comment</div>
 </BoxInfo>
 </Box>
 </Boxes>
 </Content>


      {/* <Box>  {testimonials.map((i, t) => {
   
  // <img src={t.img} alt="tatoo pic" />
  // <img src={t.avatar} alt="avatar" />
  <h2>{t.name}</h2>
  <p>{t.comment}</p>


      })}  </Box> */}
   
    </TestimonialsStyles>
  )
}

export default TestimonialsSection

const TestimonialsStyles = styled.div`
  background: url(${peoplesay}) no-repeat left;
  background-position: left 50px center;
  background-size: contain;  
  display: grid;
  grid-template-columns: minmax(250px, 500px) 1fr;
  height: 50vh;
  img { 
    width: auto;
    height: 100%;
  }

`

const Illustration = styled.div`
grid: 1;
`

const Content = styled.div`
  grid: 2;
  text-align: left;

  .comments {
    display: flex;
    flex: 1 100%;    
    justify-self: flex-end;
    text-align: right;
    padding: 20px;
    gap: 20px;
  }
`
const Boxes = styled.div`
  width: 100%;
  display: flex;
  height: 300px;
  img{
    border-radius: 30px;
}
`
const Box = styled.div`
  width: 50%;

  img{
    border-radius: 30px;
}
`


const BoxInfo = styled.div`
  width: 40%;
  display: grid;
  gap: 20px;
  grid-template-columns: 40px 1fr;
  gap: 10px;
 
  .avatar {
    grid: 1;
    width: 45px;
  }
  .nome {
    grid: 2;
  }
  .comment {
    grid: 2;
  }
 
`


const testimonials = [
    { 
      img: '',
      avatar: '',
      name: 'Kate Mida',
      comment: 'The tattoo I made in Berlim, Im delight!'
    },
    { 
      img: '',
      avatar: '',
      name: 'Larry Perry',
      comment: 'Misa is very kind master. I had a difficult order but it was fine!'
    }
]