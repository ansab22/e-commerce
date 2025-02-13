import React from "react";
import styles from "@/components/Product/styles/productDescription.module.css";
import { Tabs } from "antd";
function ProductDescription() {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Description",
      children: (
        <div className={styles.tabContent}>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
          <br />
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </div>
      ),
    },
    {
      key: "2",
      label: "Reviews",
      children: (
        <div className={styles.tabContent}>
          The Men Round Neck Pure Cotton T-shirt is a lightweight, close-fitting
          pullover shirt made from 100% pure cotton, offering exceptional
          comfort and breathability. With a round neckline and short sleeves,
          it’s versatile enough to be worn as an undershirt or outer garment.
          Priced at $149, this T-shirt is available in multiple colors and
          sizes, catering to a wide range of preferences. Customers have praised
          its soft fabric, perfect fit, and durability, with an overall rating
          of 4.5/5 stars. While some noted slight color fading after multiple
          washes, the T-shirt remains a popular choice for casual wear, gym
          sessions, or daily use. The product comes with eco-friendly packaging,
          cash-on-delivery options, and an easy 7-day return policy. Highly
          recommended for its affordability, style, and quality, this T-shirt is
          a must-have addition to any wardrobe.
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={styles.productDescrip_con}>
        <div className={styles.productDescrip_row}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            tabBarStyle={{
              color: "#686868", // Default font color
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ProductDescription;
