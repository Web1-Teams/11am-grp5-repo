import React, { useState } from "react";
import "./StyleHeader.css";
import Logo from "./Logo";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNavigation = () => {
        console.log("Opening navigation...");
    setIsOpen(true);
    };

    const closeNavigation = () => {
    setIsOpen(false);
    };

    const menuList = [
    { id: 1, className: "football", text: "كرة القدم" },
    { id: 2, className: "Basketball", text: "كرة السلة" },
    { id: 3, className: "Volleyball", text: "كرة الطائرة" },
    { id: 4, className: "handball", text: "كرة اليد" },
    { id: 5, className: "Tennis", text: "تنس الطاولة" },
    { id: 6, className: "swimming", text: "السباحة" },
    ];

    return (
    <div>
        <div id="mainbox" onClick={openNavigation}>&#9776;</div>
        {isOpen && (
        <div id="list">
            <span id="close-btn" onClick={closeNavigation}>&times;</span>
            <div className="logo">
                <Logo/>
                </div>
            <ul>

            {menuList.map((item) => (
                <li key={item.id}>
                <a href="#" className={item.className}>{item.text}</a>
                </li>
            ))}
            </ul>
        </div>
        )}
    </div>
    );
};

export default Header;