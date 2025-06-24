import React from "react";

const Card = ({ name, text }) => {
  return (
    <>
      <div className="textHead">
        <div className="cardName">
          <h3>{name}</h3>
        </div>
        <div className="cardText">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
