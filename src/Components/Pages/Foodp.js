import React from "react";
import Navbar from '../navbar/Navbar';
import Nutrition from "../nutrition/Nutrition";
import Food from "./Food";

function Home() {
  return (
    <>
    <Navbar/>
    <Nutrition/>
    <>
    <Nutrients/>
    </>
    <Food/>
    </>
  );
}

export default Home;