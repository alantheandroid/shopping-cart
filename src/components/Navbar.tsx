import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartIcon from "../assets/CartIcon";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, closeCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          className="rounded-circle"
          style={{
            width: "3rem",
            height: "3rem",
            position: "relative",
          }}
          variant={cartQuantity > 0 ? "outline-primary" : "outline-secondary"}
          onClick={openCart}
        >
          <CartIcon />
          {cartQuantity > 0 && (
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center text-white position-absolute bottom-0 end-0"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </NavbarBS>
  );
}
