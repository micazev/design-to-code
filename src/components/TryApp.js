import React from "react";
import styled from "styled-components";
import tryapp from "../assets/tryapp-image.png";
import appstore from "../assets/appstore.jpg";

export const TryApp = () => {
  return (
    <TryAppStyles>
      <Content>
        <div>
          <span className="tag" id="our app">
            App
          </span>
        </div>
        <h1>Try Tattoo Master App for free for 14 days</h1>
        <p>
          The application provides access <br />
          to a huge community around the world. Download and try!
        </p>
        <img src={appstore} alt="" />
      </Content>
      <Illustration />
    </TryAppStyles>
  );
};

const TryAppStyles = styled.div`
  background: url(${tryapp}) no-repeat;
  background-position: right top;
  background-size: contain;
  min-height: 50vh;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr 0.5fr;
  margin-top: 200px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Content = styled.div`
  padding-left: 50px;
  h1 {
    margin: 20px;
  }
  p {
    font-weight: bold;
    margin-left: 30px;
  }
  img {
    margin: 30px 0 0 30px;
    width: 120px;
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 2em;
      margin-bottom: 20px;
      margin-left: 0;
    }
    p {
      margin-left: 0;
    }
    img {
      width: 100px;
      margin-left: 0;
    }
  }
`;

const Illustration = styled.div``;
