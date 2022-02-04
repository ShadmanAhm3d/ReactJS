import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Coin } from "./components/Coin";

function App() {
  const [listofCoins, setListofCoins] = useState([]);
  const [searchWord, setSearchWords] = useState("");
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListofCoins(response.data.coins);
      }
    );
  }, []);

  const filterdWords = listofCoins.filter((coins) => {
    return coins.name.includes(searchWord);
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bitcoin ....."
          onChange={(event) => {
            setSearchWords(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {" "}
        {filterdWords.map((coins) => {
          return (
            <Coin
              name={coins.name}
              price={coins.price}
              symbol={coins.symbol}
              icon={coins.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
