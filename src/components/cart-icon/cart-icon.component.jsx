import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ShoppingIcon, CartIconContainer, CartCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { toggleCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
