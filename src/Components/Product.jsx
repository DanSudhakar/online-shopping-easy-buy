import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Product = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      // <div className="four wide column" key={id}>
      //   <Link to={`/product/${id}`}>
      //     <div className="ui link cards">
      //       <div className="card">
      //         <div className="image">
      //           <img src={image} alt={title}></img>
      //         </div>
      //         <div className="content">
      //           <div className="header">{title}</div>
      //           <div className="meta price">${price}</div>
      //           <div className="meta">{category}</div>
      //         </div>
      //       </div>
      //     </div>
      //   </Link>
      // </div>
      <div class="col">
        <Link to={`/product/${id}`}>
          <div class="card">
            <img src={image} class="card-img-top" alt={title} />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="row row-cols-1 row-cols-md-3 g-4">{renderList}</div>;
};
export default Product;
