import React from "react";
import assetImg from "../../assets/New-assignment.jpg";

const Product = (props) => {
  let {
    productTitle,
    productDes,
    productPrice,
    productImage,
    productRating,
    productCount,
  } = props;

  console.log("productTitle=>", productTitle);
  console.log("productDes=>", productDes);
  console.log("productPrice=>", productPrice);
  console.log("productImage=>", productImage);
  console.log("productRating=>", productRating);
  console.log("productCount=>", productCount);

  return (
    <div className="product">
      <h2>Product Title: {productTitle}</h2>
      <p>Product Description: {productDes} </p>
      <p>
        <img src={assetImg} alt={productTitle} height={100} width={100} />
      </p>
      <p>Product Rating: {productRating} </p>
      <p>Product Count: {productCount} </p>
      <hr />
    </div>
  );
};

export default Product;
