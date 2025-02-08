import React from "react";
import styles from "@/components/home/styles/bestSeller.module.css";
function bestSeller() {
  return (
    <>
      <div className={styles.bestseller_con}>
        <div className={styles.bestseller_row}>
          <div className={styles.text_div}>
            <h1 className={styles.h1_bestseller}>
              <span style={{ color: "#707070", fontWeight: "400" }}>Best</span>{" "}
              Seller
            </h1>
            <p className={styles.hr_line}></p>
          </div>
          <p className={styles.text_bestseller}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className={styles.product_con}>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle5.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle11.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle12.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle13.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle14.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default bestSeller;
