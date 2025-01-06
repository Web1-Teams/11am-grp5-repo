import React from "react";
import './footer.css';
function Footer () {
    return (
    <footer>
        <div className="row">
            <div className="col">
                <h1>NextGoal</h1>
                <p>
                    A sports website that brings together various information in one place for easy access. 
                    It is a website that targets all age groups, each according to their favorite sport.
                </p>
            </div>  

            <div className="col">
             <h3>Contact Us <div className="underline"><spane></spane></div></h3>
             <p className="address">Address:990 street</p>
             <p className="phone">Phone:+1234567890</p>
             <p className="email">Email:Next.Goal@gmail.com </p>
            </div>

            <div className="col">
                <h3>Links <div className="underline"><spane></spane></div></h3>
                <ul className="list">
                    <li><a href="">Home</a></li>
                    <li><a href="">Nutrition</a></li>
                    <li><a href="">Clubs Locations</a></li>
                    <li><a href="">Sports</a></li>
                </ul>
            </div>
            <div className="col">
                <h3>Follow Us <div className="underline"><spane></spane></div></h3>
                  <div className="Follow">
                   <a id="instagram" href="https://www.instagram.com/Next_Goal" target="_blank">
                    <i className="fab fa-instagram"></i>
                    </a>
  
                    <a id="facebook" href="https://www.facebook.com/Next_Goal" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                    </a>
  
                    <a id="pinterest" href="https://www.pinterest.com/Next_Goal" target="_blank">
                    <i className="fab fa-pinterest"></i>
                    </a>
                  </div>
  
                </div>
  
            </div>
  
        </footer>
        );
};
export default Footer;