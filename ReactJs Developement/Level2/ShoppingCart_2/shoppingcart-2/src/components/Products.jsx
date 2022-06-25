import "./Products.css";
import { popularProducts } from "../pages/data.js";

function Products() {
  const onclickhandler = () => {
    console.log("clockkked");
  };

  return (
    <div className="product-container">
      {popularProducts.map((item) => {
        return (
          <div className="products">
            <img
              src={item.img}
              className="image-products"
              alt="/"
              onClick={onclickhandler}
            />
            <button className="btn-product">
              <a href="/productid">Show Prices</a>{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
