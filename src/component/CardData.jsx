import React, { useState } from "react";

const CardData = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="cardData">
        <div className="input">
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name..."
            onChange={handleName}
          />
          <input
            type="text"
            value={text}
            placeholder="Enter Something..."
            onChange={handleText}
          />
        </div>
      </div>
    </>
  );
};

export default CardData;
