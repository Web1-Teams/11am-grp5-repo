import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="hero">
      <div className="overlay">
        <h1>Welcome To <b>Next Goal</b></h1>
        <p>Your Way To The Top</p>
      </div>
      <video autoplay muted loop className="background-video">
        <source src='./assets/videos/Vidintro.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default Header;
