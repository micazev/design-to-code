import React from 'react';
import styled from 'styled-components';
import appstore from '../assets/appstore.jpg';

export default function Nav() {
  return (
    <NavStyles>
      <a className="logo" href="https://dribbble.com/shots/12137524-Tattoo-Artist-website-landing-page-design-interaction">
        Tattoo master.
      </a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#steps">Steps</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#our app">Our app</a>
        </li>
      </ul>
      <a href="/"><img src={appstore} alt="download at appstore" /></a>
    </NavStyles>
  );
}


const NavStyles = styled.nav`
  width: 80%;
  margin: 0 auto;
  padding: 3vh 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 3rem; */
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
    display: flex;
    gap: 10px;
  }
  li a {
    text-decoration: none;
    padding-right: 10px;
    color: var(--dark-gray);
  }
  li a:last-child {
  padding-right: none;
  }

  img {
    margin: 0;
    padding: 0;
    width: 100px;
    height: auto;
  }
  .logo{
    color: #221f20;
  }
`;
