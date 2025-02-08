import React from "react";
import styles from "@/components/about/styles/about.module.css";

function about() {
  return (
    <>
      <div className={styles.about_con}>
        <div className={styles.about_row}>
          <div className={styles.text_div}>
            <h1 className={styles.h1_about}>
              <span style={{ color: "#707070", fontWeight: "400" }}>ABOUT</span>{" "}
              US
            </h1>
            <p className={styles.hr_line}></p>
          </div>
          <div className={styles.about_colums_div}>
            <div className={styles.about_col1}>
              <img src={`/images/about_img.png`} alt="" />
            </div>
            <div className={styles.about_col2}>
              <p className={styles.about_para}>
                Forever was born out of a passion for innovation and a desire to
                revolutionize the way people shop online. Our journey began with
                a simple idea: to provide a platform where customers can easily
                discover, explore, and purchase a wide range of products from
                the comfort of their homes.
              </p>
              <p className={styles.about_para}>
                Since our inception, we've worked tirelessly to curate a diverse
                selection of high-quality products that cater to every taste and
                preference. From fashion and beauty to electronics and home
                essentials, we offer an extensive collection sourced from
                trusted brands and suppliers.
              </p>
              <h4 className={styles.about_title}>Our Mission:</h4>
              <p className={styles.about_para}>
                Our mission at Forever is to empower customers with choice,
                convenience, and confidence. We're dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
