import { categories } from "../pages/data";
import "./DisplayBar.css";

function DisplayBar() {
  return (
    <div>
      <div className="wrapper-categories">
        {categories.map((item) => {
          return (
            <div className="wrapper-items">
              <img src={item.img} alt="/" className="image-bar" />
              <div className="info">
                <h1> {item.title} </h1>
                <button> ShopNow </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayBar;
