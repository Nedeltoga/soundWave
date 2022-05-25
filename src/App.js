import React from 'react';
import "./styles.css"
import Menu from './Menu';
import MenuBottom from './MenuBottom'
import Circle from './Circle'
import LandpageImg from './LandpageImg'
import LandingText from './LandingText'

function App() {
  return (

    <div className='App'>
      
      <Menu />
      <Circle background='#bc3a801a'/>
      <Circle background='#3457b21a'/>
      <Circle background='#3457b21a'/>
      <LandingText />
      <LandpageImg />
      <MenuBottom />
    </div>
  );
}

export default App;
