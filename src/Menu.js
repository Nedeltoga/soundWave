import { Container, Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"



function Menu () {
    return (
      <Navbar fixed="top" >
        <Container >
        <Navbar.Brand href="#landId" className="blank">
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
            <Nav.Item>
          <Nav.Link href="#discoverId" className="blank">Discover</Nav.Link>

            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#joinId" className="blank">Join</Nav.Link>
            </Nav.Item>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Menu