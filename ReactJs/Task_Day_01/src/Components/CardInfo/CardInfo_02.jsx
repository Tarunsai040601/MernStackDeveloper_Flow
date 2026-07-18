import React, { useState } from "react";
import "./CarInfo_02.css";
const CardInfo_02 = (userDetails) => {
  console.log("userDetails:", userDetails);
  const [clickButton, setclickButton] = useState(false);
  const handlerChange = () => {
    setclickButton(!clickButton);
  };
  return (
    <>
      <div >
        {clickButton && (
          <div className="box">
            <h1>Name:{userDetails.userDetails.Name}</h1>
            <h2>Age:{userDetails.userDetails.Age}</h2>
            <h2>City:{userDetails.userDetails.City}</h2>
          </div>
        )}
      </div>
      <br />
      <br />
      <div>
        <button onClick = {handlerChange}>
          {clickButton ? "Hidden" : "ShowDetails"}
        </button>
      </div>
    </>
  );
};

export default CardInfo_02;
