import React from 'react';
import "./styles.css"
import Menu from './Menu';
import MenuBottom from './MenuBottom'
import Circle from './Circle'
import LandpageImg from './LandpageImg'
import LandingText from './LandingText'
import { Col, Container, Row } from 'react-bootstrap';
import Join from './Join'
import FormJoin from './FormJoin'

function App() {
  return (

    <div className='App vh-100'>
      
      <Menu />
      <Circle background='#bc3a801a'/>
      <Circle background='#3457b21a'/>
      <Circle background='#3457b21a'/>
      <Container className='h-100 d-flex land' fluid>
        <Row className='flex-grow-1 d-flex d-flex align-items-center justify-content-center' >
          <Col md={{ span: 3, offset: 1 }} ><LandpageImg /></Col>
          <Col md={{ span: 4, offset: 1 }} ><LandingText /></Col>
        </Row>
       </Container>
       <Container className='h-100 d-flex Join' fluid>
        <Row className='flex-grow-1 d-flex d-flex align-items-center justify-content-center' >
          <Col md={{ span: 3, offset: 1 }} ><Join /></Col>
          <Col md={{ span: 4, offset: 1 }} ><FormJoin /></Col>
        </Row>
       </Container>
      
      
      <MenuBottom />
    </div>
  );
}

export default App;
