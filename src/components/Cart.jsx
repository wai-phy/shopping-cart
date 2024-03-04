import { useContext } from "react";
import CartItem from "./CartItem";
import { itemContext } from "../store/itemContext";

const Cart = (props) => {
  const { items, totalAmount } = useContext(itemContext);
  const totalPrice = `$ ${totalAmount.toFixed(2)}`
  return (
    <div className="cart-box">
      <h2>Your cart items are Here!</h2>
      <section className="overflow-ctr">
        {items.length < 1 ? (
          <h1 className="no-items">No Items Here</h1>
        ) : (
          <>
            {items.map((fruit) => (
              <CartItem key={fruit.id} fruit={fruit} />
            ))}
          </>
        )}
      </section>

      <hr />
      <div className="total">
        <h2>Total Prices</h2>
        <p> {totalPrice}</p>
      </div>
      <div className="btns">
        <button className="close-btn" onClick={props.hideCartHandler}>
          Close
        </button>
        {items.length < 1 ? (
          <></>
        ) : (
          <button className="order-btn" onClick={()=>{
            alert("Ordered success!!")
          }}>Order</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
