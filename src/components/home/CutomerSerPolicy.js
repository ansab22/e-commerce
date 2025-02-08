import React from "react";
import styles from "@/components/home/styles/CutomerSerPolicy.module.css";
function CutomerSerPolicy() {
  return (
    <>
      <div className={styles.CutomerSerPolicy_con}>
        <div className={styles.CutomerSerPolicy_row}>
          <div className={styles.exchangePolicy_col}>
            <img src={`/images/exchange_icon.png`} alt="" />
            <h4 className={styles.exchange_title}>Easy Exchange Policy</h4>
            <p className={styles.exchange_para}>
              We offer hassle free exchange policy
            </p>
          </div>
          <div className={styles.qualityPolicy_col}>
            <img src={`/images/quality_icon.png`} alt="" />
            <h4 className={styles.quality_title}>7 Days Return Policy</h4>
            <p className={styles.quality_para}>
              We provide 7 days free return policy
            </p>
          </div>
          <div className={styles.supportPolicy_col}>
            <img src={`/images/support_img.png`} alt="" />
            <h4 className={styles.support_title}>Best Customer Support</h4>
            <p className={styles.support_para}>
              We provide 24/7 customer support
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CutomerSerPolicy;
