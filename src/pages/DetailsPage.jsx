import { Link, useParams } from "react-router-dom";
import { useProductDeatails } from "../context/ProductContext";
import Loader from "../components/Loader";
import { MdCategory } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();
  const productDetails = useProductDeatails(+id);
  if (!productDetails) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.info}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <MdCategory />
          {productDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <GiPriceTag />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />

            <span> Back to Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
