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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Input
              placeholder="Enter email id"
              type="email"
              style={{
                width: "50%",
                padding: "10px 20px",
                marginRight: "0px",
                borderRadius: "0px",
                outline: "none", // Remove the default outline
                border: "1px solid #000000", // Add a black border
              }}
              onFocus={(e) => {
                e.target.style.border = "1px solid #000000"; // Change border on focus
                e.target.style.bordershadow = " #000000";
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid #000000"; // Revert border on blur
              }}
            />
            <Button
              type="primary"
              style={{
                backgroundColor: isClicked ? "transparent" : "#000000", // Change background on click
                padding: "25px 25px",
                borderRadius: "0px",
                border: isClicked ? "1px solid black" : "1px solid #000000", // Add border on click
                color: isClicked ? "black" : "white", // Change text color on click
                transition:
                  "background-color 0.2s ease, color 0.2s ease, border 0.2s ease", // Smooth transition
              }}
              onClick={handleClick}
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default beforeFoter;
