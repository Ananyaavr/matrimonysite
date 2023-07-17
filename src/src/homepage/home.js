import React from "react";
// import "./App.css";
// import homeback from "./photo/home back.webp";
import Navbar from "./nav";
import "./home.css";
import Footer from "../footer/footerhome";
export default function Home(){
    return(
         <div className="home">
            <div className="navdiv">
            <Navbar />
            </div>
            
            <div className="text-block" style={{height:800}}>
                <h1 className="text1" style={{padding:20}}>BE FABULOUS. BE EMPOWERED. BE BLOWN AWAY!</h1>
                <p className="text2" style={{padding:40}}>We're Committed to Service Excellence By EliteLove</p>
            </div>
         </div>
    );
}