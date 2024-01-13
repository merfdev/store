import { categoryList } from "../constant/constant";
import { creatQueryObject } from "../helpers/helper";
import styles from "./Categories.module.css";

function Categories({ setQuery }) {
  const categoryHandler = (event) => {
    const item = event.target.innerText.toLowerCase();
    setQuery((query) => creatQueryObject(query, { item }));
  };
  return (
    <div>
      {categoryList.map((cat) => (
        <li key={cat.id} onClick={categoryHandler}>
          {cat.category}
        </li>
      ))}
    </div>
  );
}

export default Categories;
