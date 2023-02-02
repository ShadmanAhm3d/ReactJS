import React, { useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({ data }) => {
  const [filteredData, setFilteredData] = useState("");

  const onchangeInputHandler = (event) => {
    const searchWord = event.target.value;
    const newfilter = data.filter((val) => {
      return val.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newfilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search Here"
          onChange={onchangeInputHandler}
        />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 10).map((val, key) => {
            return (
              <a key={key} target="_blank" className="dataItem" href={val.link}>
                <p>{val.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
