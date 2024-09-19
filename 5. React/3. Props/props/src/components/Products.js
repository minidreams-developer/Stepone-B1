import React from "react";
import Product from "./Product";
import products from "./data";

const Products = () => {
  // while, do..while, for, for..of, forEach, map
  // Array.map((arr)=>{})

  /**
   * let name = 'aj'
   * let age = 34
   * < Child
   *    userName={name}
   *    age={age}
   *
   *  />
   *
   */
  return (
    <div>
      {products.map((prod) => (
        <Product
          key={prod.id}
          productTitle={prod.title}
          productDes={prod.description}
          productPrice={prod.price}
          productImage={prod.image}
          productRating={prod.rating.rate}
          productCount={prod.rating.count}
        />
      ))}
    </div>
  );
};

export default Products;
