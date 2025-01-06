import React from "react";
import './Navbar.css';
import Login from './Login.js';
import Logo from './Logo.js';
function Navbar(){

return(
    <>

    <nav dir="rtl">
    <Logo/>
    
<ul>
    <li><a href="/">الصفحة الرئيسية</a></li>
    <li><a href="/Nutrition">التغذية</a></li>
    <li><a href="/clubs">أماكن الأندية</a></li>

</ul>
<Login/>
</nav>
</>
);



};
export default Navbar;