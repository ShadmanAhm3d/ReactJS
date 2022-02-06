import { useState } from "react";
import "./App.css";

function App() {
  const [typedword, setTypedword] = useState("");
  const [showdata, setShowdata] = useState([]);

  const additems = () => {
    if (!typedword) {
    } else {
      setShowdata([...showdata, typedword]);
      setTypedword("");
    }
  };

  const ondelete = () => {
    setShowdata([]);
  };

  const deleteItems= (id) =>{


    const updatedItems =  showdata.filter((data,i) => {
        return id != i;
    })


    setShowdata(updatedItems);


}




  return (
    <div
      className="container"
      style={{ height: "100vh", width: "100vw", background: "black" }}
    >
      <div className="inputform">
        <input
          onChange={(event) => setTypedword(event.target.value)}
          type="text"
          value={typedword}
          placeholder="Enter here"
        />
        <button onClick={additems}> Add </button>
        <button onClick={ondelete}
        style={{background: "red", color:"white"}}
      
      >DeleteALL</button>
      </div>
      <div className="taskcontainer">
        {showdata.map((data, i) => {
          return (
            <div key={i}>
              <h1 style={{ color: "white" }}>{data} </h1>
              <button onClick={() => deleteItems(i)}> Delete </button>
            </div>
          );
        })}
      </div>
    
    </div>
  );
}

export default App;
