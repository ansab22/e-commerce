import React from "react";
import styles from "@/components/footer/styles/footer.module.css";
function footer() {
  return (
    <>
      <div className={styles.footer_con}>
        <div className={styles.footer_row}>
          <div className={styles.footer_colums}>
            <div className={styles.footer_col1}>
              <img src={`/images/logo.png`} alt="Logo" />
              <p className={styles.logo_para}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                nobis voluptatibus quas aperiam, quibusdam laudantium
                consectetur quis debitis. Hic sapiente quo mollitia nemo! Culpa
                voluptatum totam aliquid dignissimos numquam sit?
              </p>
            </div>
            <div className={styles.footer_col2}>
              <h4 className={styles.Company_h4}>COMPANY</h4>
              <ul className={styles.page_list}>
                <li className={styles.page_link}>Home</li>
                <li className={styles.page_link}>About</li>
                <li className={styles.page_link}>Delivery</li>
                <li className={styles.page_link}>Privacy policy</li>
              </ul>
            </div>
            <div className={styles.footer_col3}>
              <h4 className={styles.Touch_h4}>Get in Touch</h4>
              <ul className={styles.Touch_list}>
                <li className={styles.Touch_link}>+1-212-456-7890</li>
                <li className={styles.Touch_link}>info@trisagesolutions.com</li>
              </ul>
            </div>
          </div>
          <div className={styles.copyWrite}>
            <p>Copyright 2024 © TrisageSolutions - All Right Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
