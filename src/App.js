import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles';

import Nav from './components/Navbar';
import AboutSection from './components/AboutSection';
import { HeroSection } from './components/HeroSection';
import StepsSection from './components/StepsSection';
import Footer from './components/Footer';
// import TestimonialsSection from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <HeroSection />
      <AboutSection />
      <StepsSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
}

export default App;
