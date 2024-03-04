import { useContext, useState } from "react";
import { itemContext } from "../store/itemContext";
const Card = ({ fruit }) => {
  const {id, name, description, price} = fruit;
  const {addItem} = useContext(itemContext);
  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;
  const addToCartHandler = () => {
    if(currentAmountNumber <1 || currentAmountNumber > 5){
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber

    })
  };

  return (
    <div className="card">
      <div>
        <p className="card-title">{name}</p>
        <p className="card-description">{description}</p>
        <p className="card-price">$ {price}</p>
      </div>
      <div>
        <input
          type="number"
          className="card-input"
          min={1}
          max={5}
          value={currentAmount}
          onChange={(e) => {
            setCurrentAmount(e.target.value);
          }}
        />
        <button className="card-btn" onClick={addToCartHandler}>
          +ADD
        </button>
      </div>
    </div>
  );
};

export default Card;
