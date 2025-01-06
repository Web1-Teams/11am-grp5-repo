import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./Heartbtn.css";

function Heartbtn () {
    const[loved, setloved]=useState(false);
    const onlovebtnclick=() =>{
        setloved(!loved);
    }
  return (
    <button className={`lovebtn ${loved?"loved":"" }`} onClick={onlovebtnclick}>
      <FontAwesomeIcon icon={faHeart}  /> {loved ? "تم الإعجاب  ": "إعجاب"}
    </button>
  );
};

export default Heartbtn;
