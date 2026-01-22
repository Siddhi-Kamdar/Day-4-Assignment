import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <h2>Cart is empty</h2>;
  }

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.map((item) => (
        <div
          key={`${item.productId}-${item.customizationKey}`}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.productId))}>
            +
          </button>

          <button onClick={() => dispatch(decreaseQty(item.productId))}>
            -
          </button>

          <button onClick={() => dispatch(removeFromCart(item.productId))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;