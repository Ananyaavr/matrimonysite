import React from "react";
import Navbar from "./nav";
import "./about.css";
import Card2 from "./card2";
import Footer from "../footer/footerhome";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function About(){
    return(
        <div className="Aboutus">
            <div className="navabout">
                <Navbar/>
            </div>
            <div className="aboutmid">
                <div className="divtext1">
                <h1 className="abouttext1">FIND YOUR PERFECT MATCH IN ELITELOVE MATRIMONY!</h1>
                </div>
                <div className="divtext2">
                    <p className="abouttext2">“Marriage is like watching the color of leaves in the fall; ever changing and more stunningly beautiful with each passing day.” —Fawn Weaver</p>
                </div>
                <div className="divtext3">
                    <p className="abouttext3">
                        What Makes
                    </p>
                    <p className="abouttext4">
                        ELiteLove Matrimony Special?
                    </p>
                </div>
                <div className="divcard1">
                    <Card2/>
                </div>
                <br />
            </div>
                <div className="footer1">
                    <Footer/>
                </div>
        </div>
    )
}