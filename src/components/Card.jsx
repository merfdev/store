import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, shortenText } from "../helpers/helper";
import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";
import { MdDeleteSweep } from "react-icons/md";

function Card({ data }) {
  const { title, price, image, id } = data;
  const [state, dispatch] = useCart();

  const AddProductHandler = (type) => {
    dispatch({ type, payload: data });
  };
  const quantity = productQuantity(state, id);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>${price}</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity == 1 && (
            <button>
              <MdDeleteSweep onClick={() => AddProductHandler("REMOVE_ITEM")} />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => AddProductHandler("DECREASE_ITEM")}>
              -
            </button>
          )}
          {!!quantity && <span> {quantity}</span>}
          {quantity == 0 ? (
            <button>
              <TbShoppingBagCheck
                onClick={() => AddProductHandler("ADD_ITEM")}
              />
            </button>
          ) : (
            <button onClick={() => AddProductHandler("INCREASE_ITEM")}>
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
