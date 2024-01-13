import { useEffect, useState } from "react";

import { FaList } from "react-icons/fa6";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductPage.module.css";
import Categories from "../components/Categories";
import {
  
  filterdProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
function ProductPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [displayed, setDisplayed] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);
  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalFilter = searchProducts(products, query.search);
    finalFilter = filterdProducts(finalFilter, query.item);

    setDisplayed(finalFilter);
  }, [query]);
  console.log(query);

  return (
    <>
      <SearchBox setSearch={setSearch} search={search} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((displayed) => (
            <Card key={displayed.id} data={displayed} />
          ))}
        </div>
        <div>
          <div>
            <FaList />
            <p>Categories</p>
          </div>
          <ul>
            <Categories query={query} setQuery={setQuery} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
