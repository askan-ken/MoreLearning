import { Navbar, Container, Nav, Button } from "react-bootstrap"

const Footer = () => {
  return (
    <div>
      <Navbar variant="dark">
            <Container>
                <Button variant="dark"><Navbar.Brand href="/">Project Name</Navbar.Brand></Button>
                <Nav>
                <Button variant="dark"><Nav.Link href="#horror">HORROR</Nav.Link></Button>
                <Button variant="dark"><Nav.Link href="#romance">ROMANCE</Nav.Link></Button>
                </Nav>
            </Container>
      </Navbar>
    </div>
  )
}

export default Footer