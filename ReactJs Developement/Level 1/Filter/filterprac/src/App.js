import { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  // const datas = JSONDATA.filter((names) =>{
  //   JSONDATA.includes()
  // })

  const [initialnames, setInitalnames] = useState(null);

  const [typedWord, setTypedWord] = useState("");


  const onchangeHandler = (event) =>{
    setTypedWord(event.target.value)
  }
  return (
    <div className="App">
      <input
        className="input"
        type="text"
        placeholder="Search Here"
        onChange={onchangeHandler}
      />
      {/* <button onClick={HideallnamesHandler}> Show all </button> */}
      {JSONDATA.filter((val) => {
        if (typedWord == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(typedWord.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p> {val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
