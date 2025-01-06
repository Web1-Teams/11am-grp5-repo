import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ image, title, intro, info }) => {
  const [isExpanded, setIsExpanded] = useState(false);


  const handleButtonClick = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      <img src={image} className="card-img-top" alt={`Image for ${title}`} />
      <div className="card-body">
        <div className="card-head">
          <h1>{title}</h1>
        </div>
        <p className="card-text">{intro}</p>
        {isExpanded && (
          <div className="card-info">
            <span>{info}</span>
          </div>
        )}
      </div>
      <button onClick={handleButtonClick} className="card-btn">
        {isExpanded ? "عرض أقل" : "عرض المزيد"}
      </button>
    </div>
  );
};

export default Card;

