import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import MobileStock from './components/Mobile Stock';
import LeftDotAnimation from './components/LeftDotAnimation';
import UpperNavBar from './components/UpperNavBar';

function App(props) {
  return (
    <section>
      <UpperNavBar/>
      <NavBar/>
      <Hero/>
      <img src="/after hero.png" className='w-[100%]' />
      <MobileStock/>
      <LeftDotAnimation/>
    </section>
  );
}

export default App;