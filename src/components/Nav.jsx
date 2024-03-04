import React, { useContext } from "react";
import { itemContext } from "../store/itemContext";

const Nav = (props) => {
  const { items } = useContext(itemContext);
  const totalCart = items.reduce((currentVal,item)=>{
    return currentVal + item.amount;
  },0);
  return (
    <div className="nav">
      <h2>Shopping</h2>
      <button onClick={props.showCartHandler}>
        Cart <span>({totalCart})</span>
      </button>
    </div>
  );
};

export default Nav;
