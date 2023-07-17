import React from "react";
import "./nav.css";
import logo from "./photo/logo.svg";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="navback">
        <nav className="nav">
            <a href="/" className="sitename">
            <img className="logo" src={logo} alt="logo1"/>
            EliteLove
            </a>
            <ul>
                <li>
                    <a href="/home"><Link to="/">HOME</Link></a>
                </li>
                <li>
                    <a href="/about"><Link to="/aboutus">ABOUT</Link></a>
                </li>
                <li>
                    <a href="/contact"><Link to="/contact">CONTACT</Link></a>
                </li>
                <li>
                    <a href="/login"><Link to="/login">LOGIN</Link></a>
                </li>
                <li>
                    <a href="/register"><Link to="/register">REGISTER</Link></a>
                </li>
            </ul>
        </nav>
        </div>
    );
}