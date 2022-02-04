import { toggleButtonClasses } from "@mui/material";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import styled from "styled-components";
import { Data } from "./Data";

export default function Accordion() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked == index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <div className="accordionsection">
        <div className="container">
          {Data.map((value, index) => {
            return (
              <>
                <div className="wrap" onClick={() => toggle(index)}>
                  <h2>{value.question}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="Dropdown">
                    <p> {value.answer}</p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
}
