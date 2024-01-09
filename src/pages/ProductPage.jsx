import { useState } from "react";
import { MdYoutubeSearchedFor } from "react-icons/md";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductPage.module.css";
function ProductPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    console.log("searchHandler");
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <MdYoutubeSearchedFor />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>sidebar</div>
      </div>
    </>
  );
}

export default ProductPage;
