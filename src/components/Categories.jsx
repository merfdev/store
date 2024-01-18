import { categoryList } from "../constant/constant";
import { creatQueryObject } from "../helpers/helper";
import styles from "./Categories.module.css";
import { FaList } from "react-icons/fa6";

function Categories({ setQuery, query }) {
  const categoryHandler = (event) => {
    const item = event.target.innerText.toLowerCase();
    setQuery((query) => creatQueryObject(query, { item }));
  };
  return (
    <div className={styles.categories}>
      <div className={styles.heading}>
        <FaList />
        <p>Categories</p>
      </div>
      <div>
        {categoryList.map((cat) => (
          <li
            key={cat.id}
            onClick={categoryHandler}
            className={
              cat.category.toLowerCase() === query.item ? styles.selected : ""
            }
          >
            {cat.category}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Categories;
