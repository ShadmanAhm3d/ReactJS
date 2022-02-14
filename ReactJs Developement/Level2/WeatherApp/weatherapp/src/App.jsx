import { useState, useEffect } from "react";
import './App.css'
import Form1 from "./components/form/Form1";

function App() {
  const [inputvalue, setInputvalue] = useState(" ");
  const [apidata, setApidata] = useState([]);
  const [finalpoint, setFinalpoint] = useState("");
  useEffect(() => {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=+${inputvalue}&days=3`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key": "7f89bf16ebmsh9dff0f23f963d34p190691jsn264543e18108"
        }
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) return null;
        setApidata([data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [finalpoint]);

  const onchangeinput = (e) => {
    setInputvalue(e.target.value);
  };

  const onsubmithandler = (e) => {
    e.preventDefault();
    setFinalpoint(inputvalue);
  };

  console.log("test", apidata);

  return (
    <div className="App">
      <div className="main">
        <h1 style={{ color : "white",fontFamily: "sans-serif", marginTop: 29}}>Welcome To weather App </h1>
      </div>
      <Form1 inputvalue={inputvalue} onsubmithandler={onsubmithandler} setInputvalue={setInputvalue} onchangeinput={onchangeinput} />
          <div className="datashow_card">
      <div className="datashow">
      {apidata.length
        ? apidata.map((data, i) => {
            return (
                < span key={i}>
                <h1 >Country : {data.location.country}</h1>
                <h2> Temperature : {data.current.feelslike_c} </h2>

            </span>
            );
          })
        : null}
        </div>
        </div> 
    </div>
    //Map
  );
}

export default App;
