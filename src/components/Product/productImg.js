import React, { useState } from "react";
import styles from "@/components/Product/styles/productImg.module.css";
import { Rating } from "react-simple-star-rating";

function ProductImg() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // Other logic
  };

  // Optional callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <>
      <div className={styles.productImg_con}>
        <div className={styles.productImg_row}>
          <div className={styles.productImg_col1}>
            <img src={`/images/singleprduct.png`} alt="" />
          </div>
          <div className={styles.productImg_col2}>
            <h2 className={styles.productImg_h2}>
              Men Round Neck Pure Cotton T-shirt
            </h2>
            <div className="App">
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                /* Available Props */
              />
            </div>
            <p className={styles.productImg_price}>$149</p>
            <p className={styles.productImg_para}>
              A lightweight, usually knitted, pullover shirt, close-fitting and
              with a round neckline and short sleeves, worn as an undershirt or
              outer garment.
            </p>
            <button className={styles.productImg_btn}>ADD TO CART</button>
            <hr />
            <p className={styles.product_Quality}>100% Original product.</p>
            <p className={styles.product_Quality}>
              Cash on delivery is available on this product.
            </p>
            <p className={styles.product_Quality}>
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductImg;
