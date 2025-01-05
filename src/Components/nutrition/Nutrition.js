import React from "react";
import './nutrition.css'
function Nutrition(){
    return(
        <div className="content" dir="rtl">
            <div className="overllay"></div>
            <img src="/assets/images/foodimages/photo.jpg"/>
           <div className="foodcontent">
                <h2>قسم التغذية</h2>
                <p>التغذية مع الرياضة أساس للصحة واللياقة؛
                  إذ توفر التغذية الطاقة لبذل الجهد وتساعد على بناء العضلات واستعادتها.
                 تناول وجبات متوازنة وشرب الماء يعزز الأداء الرياضي ويحافظ على النشاط والحيوية
                </p>
                <button>الأصناف</button>
            </div>
        </div>
    );
};
export default Nutrition;