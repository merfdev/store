import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Emma's Shop </Link>
        <Link to="/checkout">
          <div>
            <MdOutlineShoppingCartCheckout />
            {!!state.itemCounter && <span>{state.itemCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed by <a href="https://github.com/merfdev">muhammad</a> with
          Hope
        </p>
      </footer>
    </>
  );
}

export default Layout;
