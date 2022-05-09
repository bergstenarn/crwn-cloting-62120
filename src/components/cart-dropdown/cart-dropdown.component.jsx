import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles.jsx";
import React from "react";

const CartDropdown = () => {
  const { cartItems, toggleCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    toggleCartOpen();
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button style={{ "margin-top": "auto" }} onClick={goToCheckoutHandler}>
        CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
