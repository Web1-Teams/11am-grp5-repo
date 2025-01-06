
import React, { useState } from "react";
import './SportClub.css';

function Sportclub () {
  const [selectedCity, setSelectedCity] = useState("");
    const clubs = {
        "الخليل": "نادي شباب الخليل",
        "نابلس": "مركز بلاطة",
        "قلقيلية": "اسلامي قلقيلية",
        "القدس":"هلال القدس , جبل المكبر",
        "طولكرم": "ثقافي طولكرم",
        "رام الله": "مركز الأمعري , مؤسسة البيرة",
        "طوباس": "نادي شباب طوباس",
        "بيت لحم": "ترجي واد النيص",
        "جنين": "نادي جنين الرياضي",
      };

    const selectChange = (event) => {
    setSelectedCity(event.target.value);
  };
    return (
      <div>
        <h1> أندية كرة القدم</h1>
        <form>
          <label htmlFor="cities">ما هي مدينتك ؟</label>
          <select id="cities" name="cities" onChange={selectChange}>
            <option value="الخليل">الخليل</option>
            <option value="نابلس">نابلس</option>
            <option value="قلقيلية">قلقيلية</option>
            <option value="القدس">القدس</option>
            <option value="طولكرم">طولكرم</option>
            <option value="رام الله">رام الله</option>
            <option value="طوباس">طوباس</option>
            <option value="بيت لحم">بيت لحم</option>
            <option value="جنين">جنين</option>
          </select>
        </form>
        {selectedCity && <p>{clubs[selectedCity]}</p>}
      </div>
    );
  }
  
  export default Sportclub;


