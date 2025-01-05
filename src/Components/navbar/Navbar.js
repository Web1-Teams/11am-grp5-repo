import React from "react";
import './Navbar.css';
import Login from './Login.js';
import Logo from './Logo.js';
import Header from "./Header.js";
function Navbar(){

return(
    <>
    
    <nav >
    <Logo/>
<ul>
    <li><a href="">الصفحة الرئيسية</a></li>
    <li><a href="">التغذية</a></li>
    <li><a href="">أماكن الأندية</a></li>

</ul>
<Login/>
</nav>
</>
);



};
export default Navbar;