import React from "react";
import styled from "styled-components";

import peoplesay from "../assets/testimonials-image.png";
import tattoo1 from "../assets/client-tattoo1.png";
import tattoo2 from "../assets/client-tattoo2.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";

function TestimonialsSection() {
  return (
    <TestimonialsStyles className="sections" id="testimonials">
      <Illustration />

      <Content>
        <div className="comments">
          <p> view all comments </p>
          <div>
            <span className="tag">></span>
          </div>
        </div>

        <Boxes>
          <Box>
            <img src={tattoo1} alt="client tattoo 1" />
            <BoxInfo>
              <img className="avatar" src={avatar1} alt="client tattoo 1" />
              <div className="info">
                <div className="nome">Kate Mida</div>
                <div className="comment">
                  <p>The tattoo I made in Berlin. I'm delighted!</p>
                </div>
              </div>
            </BoxInfo>
          </Box>

          <Box>
            <img src={tattoo2} alt="client tattoo 1" />
            <BoxInfo>
              <img className="avatar" src={avatar2} alt="client tattoo 1" />
              <div className="info">
                <div className="nome">Larry Perry</div>
                <div className="comment">
                  <p>
                    Mira is a very kind master. I had a difficult order but it
                    was fine!
                  </p>
                </div>
              </div>
            </BoxInfo>
          </Box>

          <Box>
            <img src={tattoo2} alt="client tattoo 1" />
            <BoxInfo>
              <img className="avatar" src={avatar2} alt="client tattoo 1" />
              <div className="info">
                <div className="nome">Larry Perry</div>
                <div className="comment">
                  <p>
                    Mira is a very kind master. I had a difficult order but it
                    was fine!
                  </p>
                </div>
              </div>
            </BoxInfo>
          </Box>
        </Boxes>
      </Content>
    </TestimonialsStyles>
  );
}

export default TestimonialsSection;

const TestimonialsStyles = styled.div`
  background: url(${peoplesay}) no-repeat left;
  background-position: left 50px center;
  background-size: contain;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  height: 50vh;
  img {
    width: auto;
    height: 100%;
  }
  @media (max-width: 700px) {
    grid-template-columns: 0.5fr 1fr;
  }
`;

const Illustration = styled.div`
  grid: 1;
`;

const Content = styled.div`
  grid: 2;
  text-align: left;
  display: grid;
  .comments {
    display: flex;
    flex: 1 100%;
    justify-self: end;
    text-align: right;
    padding: 20px;
    gap: 10px;
  }
`;
const Boxes = styled.div`
  width: 100%;
  display: flex;
  // justify-content: flex-end;
  padding-right: 20px;
  height: 300px;
  img {
    border-radius: 30px;
  }
  @media (max-width: 700px) { 
    & > div:not(:first-child) { 
      display: none;
    }
`;
const Box = styled.div`
  width: clamp(250px, 50%, 300px);
  img {
    border-radius: 30px;
    margin-bottom: 20px;
  }
`;

const BoxInfo = styled.div`
  width: 40%;
  display: grid;
  gap: 10px;
  grid-template-columns: 40px 1fr;

  .avatar {
    grid: 1;
    width: 45px;
    height: auto;
  }
  .nome {
    font-weight: bold;
  }
  .info {
    grid: 2;
    width: clamp(200px, 100%, 200px);
  }
`;
