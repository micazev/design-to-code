import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
width: 100%;
  background-color: #373737;
  color: #cccccc;
  display: flex;
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
`

export default function Footer() {
  return (
    <FooterStyles>
      <a href="https://dribbble.com/shots/12137524-Tattoo-Artist-website-landing-page-design-interaction/attachments/3767899?mode=media">Tatoo master.</a>
      <ul>
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
