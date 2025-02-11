import React, { useState } from "react";
import styles from "@/components/home/styles/beforeFoter.module.css";
import { Input, Button } from "antd";
function beforeFoter() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset after 200ms
  };
  return (
    <>
      <div className={styles.beforeFooter_con}>
        <div className={styles.beforeFooter_row}>
          <h4 className={styles.beforeFooter_title}>
            Subscribe now & get 20% off
          </h4>
          <p className={styles.beforeFooter_para}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </>
  );
}

export default beforeFoter;
