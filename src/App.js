import React, { useEffect, useState } from 'react';
import "./styles.css"
import Menu from './Menu';
import MenuBottom from './MenuBottom'
import Circle from './Circle'
import LandpageImg from './LandpageImg'
import LandingText from './LandingText'
import { Col, Container, Row } from 'react-bootstrap';
import Join from './Join'
import FormJoin from './FormJoin'
import DiscoverText from './DiscoverText';
import DiscoverImg from './DiscoverImg'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToShowFrom = 200;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);
  
    if (winScroll < heightToShowFrom && isVisible) {  
         setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };

  return (
    <div className='App vh-100'>
      <Menu />
      <Container >
        <Row className='containerCirclesTop'>
          <Col md={{span: 3, offset: 1}}><Circle className='twoCircles' id='rose' background='#b63d8715'/></Col>
          <Col md={{span: 3}}><Circle className='twoCircles' id='blue' background='#7396e715'/></Col>
          <Col md={{offset: 1, span: 3, offset: 1}}><Circle className='blueCircle' background='#7396e715'/></Col>
        </Row>
      </Container>
      <Container className='h-100 d-flex land' id='landId' fluid>
        <Row className='flex-grow-1 d-flex align-items-center justify-content-center' >
          <Col md={{ span: 3, offset: 1 }} ><LandpageImg /></Col>
          <Col md={{ span: 4, offset: 1 }} ><LandingText /></Col>
        </Row>
      </Container>
      <Container className='h-100 d-flex discover' id='discoverId' fluid>
        <Row className='flex-grow-1 d-flex align-items-center justify-content-center'>
          <Col md={{ span: 4 }}><DiscoverText /></Col>
            <Col className='colDiscoverImg' md={{ span: 3, offset: 1 }} ><DiscoverImg /></Col>
        </Row>
       </Container>
       <Container className='h-100 d-flex Join' id='joinId' fluid>
        <Row className='flex-grow-1 d-flex align-items-center justify-content-center' >
          <Col md={{ span: 3, offset: 1 }} ><Join /></Col>
          <Col md={{ span: 4}} ><FormJoin /></Col>
        </Row>
       </Container>
      {isVisible && <MenuBottom />}
    </div>
  );
}

export default App;
