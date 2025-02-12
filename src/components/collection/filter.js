import React, { useState } from "react";
import styles from "@/components/collection/styles/filter.module.css";
import { Checkbox, Select } from "antd"; // Import Select component
import styled from "styled-components";

// Styled component for custom checkbox
const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    border-color: black; /* Default border color */
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: black; /* Background color when checked */
    border-color: black; /* Border color when checked */
  }

  .ant-checkbox-checked::after {
    border-color: black; /* Checkmark color */
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: black; /* Border color on hover and focus */
  }
`;

function Filter() {
  // State to manage all checkboxes
  const [checkboxes, setCheckboxes] = useState({
    men: false,
    women: false,
    kids: false,
    topwear: false,
    bottomwear: false,
    winterwear: false,
  });

  // State to manage the selected sorting option
  const [sortBy, setSortBy] = useState("");

  // Handler to update checkbox state
  const onCheckboxChange = (key) => (e) => {
    setCheckboxes({
      ...checkboxes,
      [key]: e.target.checked,
    });
  };

  // Handler to update sorting option
  const onSortChange = (value) => {
    setSortBy(value);
    console.log("Sort By:", value);
  };

  // Options for the "Sort By" dropdown
  const sortOptions = [
    { value: "priceLowToHigh", label: " Sort: Price: Low to High" },
    { value: "priceHighToLow", label: "Sort: Price: High to Low" },
    { value: "popularity", label: "Popularity" },
  ];

  return (
    <>
      <div className={styles.collection_con}>
        <div className={styles.collection_row}>
          <div className={styles.collection_col1}>
            <h2 className={styles.filters_h2}>FILTERS</h2>

            {/* Categories Section */}
            <div className={styles.Categories_div}>
              <h3 className={styles.Categories_h3}>CATEGORIES</h3>
              <div>
                <StyledCheckbox
                  checked={checkboxes.men}
                  onChange={onCheckboxChange("men")}
                >
                  Men
                </StyledCheckbox>
              </div>
              <div>
                <StyledCheckbox
                  checked={checkboxes.women}
                  onChange={onCheckboxChange("women")}
                >
                  Women
                </StyledCheckbox>
              </div>
              <div>
                <StyledCheckbox
                  checked={checkboxes.kids}
                  onChange={onCheckboxChange("kids")}
                >
                  Kids
                </StyledCheckbox>
              </div>
            </div>

            {/* Type Section */}
            <div className={styles.Type_div}>
              <h3 className={styles.Type_h3}>TYPE</h3>
              <div>
                <StyledCheckbox
                  checked={checkboxes.topwear}
                  onChange={onCheckboxChange("topwear")}
                >
                  Topwear
                </StyledCheckbox>
              </div>
              <div>
                <StyledCheckbox
                  checked={checkboxes.bottomwear}
                  onChange={onCheckboxChange("bottomwear")}
                >
                  Bottomwear
                </StyledCheckbox>
              </div>
              <div>
                <StyledCheckbox
                  checked={checkboxes.winterwear}
                  onChange={onCheckboxChange("winterwear")}
                >
                  Winterwear
                </StyledCheckbox>
              </div>
            </div>
          </div>

          {/* Collection Column 2 */}
          <div className={styles.collection_col2}>
            <div className={styles.collection_head}>
              <div className={styles.text_div}>
                <h1 className={styles.h1_collection}>
                  <span style={{ color: "#707070", fontWeight: "400" }}>
                    ALL
                  </span>{" "}
                  COLLECTIONS
                </h1>
                <p className={styles.hr_line}></p>
              </div>

              {/* Sort By Dropdown Section */}
              <div className={styles.SortBy_div}>
                <Select
                  defaultValue="priceLowToHigh" // Default selected option
                  style={{ width: "100%", fontSize: "18px" }} // Set the width of the dropdown
                  onChange={onSortChange} // Handler for when an option is selected
                  options={sortOptions} // List of options
                />
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img1.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img2.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img3.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Girls Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img4.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img5.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img6.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Girls Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img7.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Tapered Fit Flat-Front Trousers
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img8.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img9.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Girls Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img10.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Tapered Fit Flat-Front Trousers
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img11.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img12.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img13.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img14.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Boy Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img14.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Tapered Fit Flat-Front Trousers
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img16.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Girls Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img17.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Tapered Fit Flat-Front Trousers
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img18.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Boy Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img19.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Boy Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img20.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Palazzo Pants with Waist Belt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img21.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Zip-Front Relaxed Fit Jacket
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img22.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img23.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Boy Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img24.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Boy Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img25.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Girls Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img26.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Zip-Front Relaxed Fit Jacket
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img27.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Girls Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img28.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Slim Fit Relaxed Denim Jacket
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img29.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img30.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Girls Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img31.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img32.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img33.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Girls Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img34.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img35.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Zip-Front Relaxed Fit Jacket
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img36.png`} alt="" />
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
                  <img src={`/images/p_img37.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Boy Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img38.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Printed Plain Cotton Shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img39.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Slim Fit Relaxed Denim Jacket
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img40.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img41.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Boy Round Neck Pure Cotton T-shirt
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img42.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Kid Tapered Slim Fit Trouser
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img43.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Zip-Front Relaxed Fit Jacket
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img44.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Slim Fit Relaxed Denim Jacket
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img45.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Slim Fit Relaxed Denim Jacket
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img46.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Kid Tapered Slim Fit Trouser
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img47.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Slim Fit Relaxed Denim Jacket
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img48.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Kid Tapered Slim Fit Trouser
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
            <div className={styles.product_con}>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img49.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Kid Tapered Slim Fit Trouser
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img50.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Kid Tapered Slim Fit Trouser
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img51.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Women Round Neck Cotton Top
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
              <div className={styles.product_box}>
                <div className={styles.product_image}>
                  <img src={`/images/p_img52.png`} alt="" />
                </div>
                <p className={styles.product_heading}>
                  Men Slim Fit Relaxed Denim Jacket
                </p>
                <p className={styles.product_price}>$149</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
