import React from "react";
import styles from "@/components/home/styles/latestCollection.module.css";

function latestCollection() {
  return (
    <>
      <div className={styles.latestCollection_con}>
        <div className={styles.latestCollection_row}>
          <div className={styles.text_div}>
            <h1 className={styles.h1_collection}>
              <span style={{ color: "#707070", fontWeight: "400" }}>
                Latest
              </span>{" "}
              Collections
            </h1>
            <p className={styles.hr_line}></p>
          </div>
          <p className={styles.text_collection}>
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
                <img src={`/images/Rectangle1.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle 2.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle 3.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle 4.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
          </div>
          <div className={styles.product_con}>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle6.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle7.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle8.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle9.png`} alt="" />
              </div>
              <p className={styles.product_heading}>
                Women Round Neck Cotton Top
              </p>
              <p className={styles.product_price}>$149</p>
            </div>
            <div className={styles.product_box}>
              <div className={styles.product_image}>
                <img src={`/images/Rectangle10.png`} alt="" />
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

export default latestCollection;
