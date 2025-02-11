import React from "react";
import styles from "@/components/Contact/styles/contactUs.module.css";
function contactUs() {
  return (
    <>
      <div className={styles.contact_con}>
        <div className={styles.contact_row}>
          <div className={styles.text_div}>
            <h1 className={styles.h1_contactUs}>
              <span style={{ color: "#707070", fontWeight: "400" }}>
                CONTACT
              </span>{" "}
              US
            </h1>
            <p className={styles.hr_line}></p>
          </div>
          <div className={styles.contactUs_colums_div}>
            <div className={styles.contactUs_col1}>
              <img src={`/images/contact_img.png`} alt="" />
            </div>
            <div className={styles.contactUs_col2}>
              <h2 className={styles.contactUs_h2}>OUR STORE</h2>
              <ul className={styles.contactUs_ul}>
                <li>
                  54709 Willms Station <br />
                  Suite 350, Washington, USA
                </li>
                <li>Tel: (415) 555‑0132</li>
                <li>Email: infotrisagesolutions.com</li>
              </ul>
              <h2 className={styles.contactUs_h3}>CAREERS AT FOREVER</h2>
              <p className={styles.contactUs_para}>
                Learn more about our teams and job openings.
              </p>
              <button className={styles.contactUs_btn}>Explore Jobs</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contactUs;
