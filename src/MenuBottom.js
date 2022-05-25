import { Container, Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"



function MenuBottom () {
    return (
      <Navbar variant="dark" bg="dark" fixed="bottom">
        <Container>
        <Navbar.Toggle />
          <Navbar.Collapse >
          <Nav.Link className="bottom-left blank" href="#home">About us</Nav.Link>
          <Nav.Link className="bottom-left blank" href="#features">Contact</Nav.Link>
          </Navbar.Collapse>
        <Navbar.Brand href="#home" className="justify-content-end">
        <img
          alt="Twitter logo"
          src={process.env.PUBLIC_URL + '/images/twitter.svg'}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Twitter
      </Navbar.Brand>
      <Navbar.Brand href="#home" className="justify-content-end">
        <img
          alt="Facebook logo"
          src={process.env.PUBLIC_URL + '/images/facebook.svg'}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Facebook
      </Navbar.Brand>
        </Container>
      </Navbar>
    )
}
export default MenuBottom