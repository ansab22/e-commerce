import React from "react";
import ProductPage from "@/components/Product/productImg";
import ProductDescription from "@/components/Product/productDescription";
import RelatedProduct from "@/components/Product/relatedProduct";
function productPage() {
  return (
    <>
      <ProductPage />
      <ProductDescription />
      <RelatedProduct />
    </>
  );
}

export default productPage;
