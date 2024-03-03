import CartItem from "./CartItem";

const fruits = [
  {
    id: 1,
    price: 10.89,
    name: "Banana",
    description: "fresh banana from YeU",
    quantity: 2,
  },
  {
    id: 2,
    price: 12.89,
    name: "Apple",
    description: "fresh Apple from YeU",
    quantity: 2,
  },
  {
    id: 3,
    price: 1.89,
    name: "Guava",
    description: "fresh Guava from YeU",
    quantity: 2,
  },
];
const Cart = () => {
  return (
    <div className="cart-box">
        <h2>Carts</h2>
      {fruits.map((fruit)=>(
        <CartItem key={fruit.id} fruit={fruit}/>
      ))}
      <hr />
      <div className="total">
        <h2>Total Prices</h2>
        <p>$ 300</p>
      </div>
      <div className="btns">
        <button className="close-btn">Close</button>
        <button className="order-btn">Order</button>
      </div>
    </div>
  );
};

export default Cart;
