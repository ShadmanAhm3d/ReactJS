import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [endpoint, setEndpoint] = useState("");
  const [incomingData, setIncomingData] = useState([]);
  const [finale, setFinale] = useState("");

  const FetchingAPI = () => {
    fetch(
      `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=+${endpoint}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
          "x-rapidapi-key":
            "7f89bf16ebmsh9dff0f23f963d34p190691jsn264543e18108",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIncomingData(data.hints);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    FetchingAPI();
  }, [finale]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFinale(endpoint);
  };

  const onChangeHandler = (e) => {
    setEndpoint(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={endpoint} onChange={onChangeHandler} />
        <button type="submit">submit</button>
      </form>
      {/* <Grid container>
        <Grid item xs={3} md={4}>
      <Cards />
      </Grid>
      </Grid> */}
      {incomingData.map((data, index) => {
        return <h5>{data.hints.label}</h5>;
      })}
    </div>
  );
}

export default App;
