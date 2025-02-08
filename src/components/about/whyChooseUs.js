import React from "react";
import styles from "@/components/about/styles/whyChooseUs.module.css";
function whyChooseUs() {
  return (
    <>
      <div className={styles.whyChooseUs_con}>
        <div className={styles.whyChooseUs_row}>
          <div className={styles.text_why_Choose_Us}>
            <h1 className={styles.h1_whyChooseUs}>
              <span style={{ color: "#707070", fontWeight: "400" }}>Why</span>{" "}
              Choose US
            </h1>
            <p className={styles.hr_line}></p>
          </div>
          <div className={styles.why_choose_colums_div}>
            <div className={styles.choose_colums1}>
              <h4>Quality Assurance:</h4>
              <p>
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>
            <div className={styles.choose_colums2}>
              <h4>Convenience:</h4>
              <p>
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>
            <div className={styles.choose_colums3}>
              <h4>Exceptional Customer Service:</h4>
              <p>
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default whyChooseUs;
