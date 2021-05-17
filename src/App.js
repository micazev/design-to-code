import logo from './logo.svg';
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles';

import Nav from './components/Navbar';
import AboutSection from './components/AboutSection';
import { HeroSection } from './components/HeroSection';
import StepsSection from './components/StepsSection';
import Footer from './components/Footer';
import TestimonialsSection from './components/Testimonials';
import { TryApp } from './components/TryApp';

function App() {
  return (
    <div className="">
      <GlobalStyles />
      <Nav />
      <HeroSection />
      <AboutSection />
      <StepsSection />
      <TestimonialsSection />
      <TryApp />
      <Footer />
    </div>
  );
}

export default App;
