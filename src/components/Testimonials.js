import React from 'react'
import styled from 'styled-components'
import peoplesay from '../assets/steps-image.png'


function TestimonialsSection() {
  return (
    <TestimonialsStyles className="sections">
      <img src={peoplesay} alt="what people say" />
      <div className="comments">      
<p>        view all comments </p>   
 <div><span className="tag">></span></div>
 </div>

      What people say
      <Box>  {testimonials.map((i, t) => {
   
  // <img src={t.img} alt="tatoo pic" />
  // <img src={t.avatar} alt="avatar" />
  <h2>{t.name}</h2>
  <p>{t.comment}</p>


      })}  </Box>
   
    </TestimonialsStyles>
  )
}

export default TestimonialsSection

const TestimonialsStyles = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  .comments {
    display: flex;
    justify-content: space-between;
  }
`

const Box = styled.div`
  display: grid;


  .tattoopic {

  }
`
const BoxInfo = styled.div`

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