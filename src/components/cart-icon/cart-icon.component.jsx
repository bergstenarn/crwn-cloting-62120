import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, CartCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { toggleCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon style={{ width: "30px", height: "30px" }} />
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
