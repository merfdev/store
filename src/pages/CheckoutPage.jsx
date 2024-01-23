import { all } from "axios";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";

import Styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();
  const local = [];

  const clickHandler = (type, payload) => dispatch({ type, payload });
  if (!state.itemCounter && localStorage.length === 0) {
    return <div className={Styles.container}>Empty</div>;
  } else {
    local.push(JSON.parse(localStorage.getItem(3)));
  }
  return (
    <div className={Styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />

      <div className={Styles.products}>
        {state.selectedItem.map((item) => (
          <BasketCard key={item.id} data={item} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
