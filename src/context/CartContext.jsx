import { createContext, useContext, useReducer } from "react";
import { sumProduct } from "../helpers/helper";

const CartContext = createContext();

const initialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((item) => item.id == action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }

      return {
        selectedItem: [...state.selectedItem],
        ...sumProduct(state.selectedItem),
        checkout: false,
      };
    case "REMOVE_ITEM":
      state.selectedItem = state.selectedItem.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, ...sumProduct(state.selectedItem) };
    case "INCREASE_ITEM":
      const index = state.selectedItem.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItem[index].quantity++;
      return { ...state, ...sumProduct(state.selectedItem) };
    case "DECREASE_ITEM":
      const decindex = state.selectedItem.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItem[decindex].quantity--;
      return { ...state, ...sumProduct(state.selectedItem) };
    case "CHECKOUT":
        return {
            selectedItem: [],
            itemCounter: 0,
            total: 0,
            checkout: true,
        }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
