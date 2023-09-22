import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyles>
      <a className="logo" href="#">
        Tatoo master.
      </a>
      <ul className="menu">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/pizzas">Steps</a>
        </li>
        <li>
          <a href="/slicemaster">Testimonials</a>
        </li>
        <li>
          <a href="/orders">Our app</a>
        </li>
      </ul>
      <a href="/">redes sociais</a>
    </FooterStyles>
  );
}

const FooterStyles = styled.div`
  min-height: 80px;
  padding: 20px 30px;
  background-color: #373737;
  color: #cccccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  a {
    color: #cccccc;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  .logo {
    color: white;
  }
  @media (max-width: 600px) {
    gap: 30px;
  }
`;
