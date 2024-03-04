const { createContext, useReducer } = require("react");

const initialState = {
  items: [],
  totalAmount: 0,
};
const itemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existItem = state.items[existItemIndex];
    let updateItems;
    if (existItem) {
      const updateItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existItem = state.items[existItemIndex];
    const updateTotalAmount = state.totalAmount - existItem.price;
    let updateItems;
    if (existItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...existItem, amount: existItem.amount - 1 };
      updateItems = [...state.items];
      updateItems[existItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return initialState;
};
export const itemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const ItemContextProvider = (props) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    dispatchItem({ type: "ADD_ITEM", item });
  };
  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };
  const itemCtx = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <itemContext.Provider value={itemCtx}>
      {props.children}
    </itemContext.Provider>
  );
};

export default ItemContextProvider;
