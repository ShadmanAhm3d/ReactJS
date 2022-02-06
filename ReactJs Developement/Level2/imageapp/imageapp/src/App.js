import { useState } from "react";
import "./App.css";
import Images from "./components/Images";

function App() {
  const [selectedimage, setSelectedimage] = useState(Images[1]);

  return (
    <div className="app">
      <div className="container">
        <img src={selectedimage} alt="selectedIMage" className="selected" />
        <div className="imageContainer">
          {Images.map((img, index) => {
            return (
              <>
                <img
                  key={index}
                  src={img}
                  alt="#"
                  onClick={(index) => setSelectedimage(img)}
                  style={{
                    border: selectedimage === img ? "2px solid red" : ""
                  }}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
