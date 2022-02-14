import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./data";

function App() {
  return (
    <div className="App">
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;
