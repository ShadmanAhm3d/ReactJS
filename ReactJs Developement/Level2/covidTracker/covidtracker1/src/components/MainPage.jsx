import React, { useEffect, useState } from "react";
import "./Mainpage.css";

const MainPage = () => {
  const [initial, setInitial] = useState("");
  const [apidata, setApidata] = useState([]);
  const [finale,setFinale] =   useState("")
  

  const fetchme = () => {
    fetch("https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
        "x-rapidapi-key": "7f89bf16ebmsh9dff0f23f963d34p190691jsn264543e18108",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        if(data.error) return null;
        setApidata([data])
        
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(()=>{
      fetchme();

  })


  const onchangehandler = (e) =>{
      setInitial(e.target.value);
  }

  const onsubmitHandler =(e) =>{
 
    e.preventDefault();
    setFinale(initial);
  }


  return (
    <div className="container_ALL">
      <div className="textarea-1">
        <h1>Welcome</h1>
      </div>
      <div className="inputbar">
        <form  onSubmit={onsubmitHandler} >
          <input type="text" value={initial} onChange={onchangehandler} placeholder="Search your City" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="cardcontainer">
      <div className="card">
        
      {apidata.length
        ? apidata.map((data, i) => {
            return (
                <div key={i}>
              <h1 >Country : {data.location.countryOrRegion}</h1>
              <h3> Total Confirmed Cases : {data.stats.totalConfirmedCases}</h3>
              <h3>New Cases : {data.stats.newlyConfirmedCases}</h3>
              <h3>Total Deaths : {data.stats.totalDeaths}</h3>
              <h3>Total Recovered : {data.stats.totalRecoveredCases}</h3>

              </div>
            )
          })
        : null}
        
        </div>  
      </div>
    </div>
  );
};

export default MainPage;
