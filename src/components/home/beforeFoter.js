import React, { useState } from "react";
import styles from "@/components/home/styles/beforeFoter.module.css";
import { Input, Button } from "antd";
import { Row, Col } from "antd";

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
          <Row justify="center">
            <Col xs={24} sm={18} md={16} lg={12}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Input
                  placeholder="Enter your email id"
                  style={{
                    flex: 1,
                    height: "50px",
                    borderRadius: "5px 0 0 5px",
                    fontSize: "16px",
                  }}
                />
                <Button
                  type="primary"
                  style={{
                    height: "50px",
                    background: "black",
                    color: "white",
                    borderRadius: "0 5px 5px 0",
                    fontSize: "16px",
                  }}
                >
                  SUBSCRIBE
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default beforeFoter;
