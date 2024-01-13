import { MdYoutubeSearchedFor } from "react-icons/md";
import { creatQueryObject } from "../helpers/helper";
import styles from "./SearchBox.module.css";
function SearchBox({ setQuery, search, setSearch }) {
  const searchHandler = () => {
    setQuery((query) => creatQueryObject(query, { search }));
  };
  return (
    <div className={styles.searchBox}>
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
  );
}

export default SearchBox;
