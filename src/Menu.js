import { Container, Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"



function Menu () {
    return (
      <Navbar fixed="top" >
        <Container >
        <Navbar.Brand href="#home" className="blank">
        <img
          alt="Soundwave logo"
          src={process.env.PUBLIC_URL + '/images/logo.png'}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Soundwave
      </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home" className="blank">Discover</Nav.Link>
          <Nav.Link href="#features" className="blank">Join</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Menu