import React from "react";
import "./matchnav.css";
import logo2 from "./logoland.svg";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";
 import { selectUser } from "../redux/user";
import { useState } from "react";
export default function Matchnav(){
    const [isSidebarVisible, setSidebarVisibility] = useState(false);
   
    const user=useSelector(selectUser);

  const handleMouseEnter = () => {
    setSidebarVisibility(true);
  };

  const handleMouseLeave = () => {
    setSidebarVisibility(false);
  };
    return(
        <div className="navback">
        <nav className="nav2" style={{ marginTop:'-20px'}}>
            <a href="/" className="sitename2">
            <img className="logo2" src={logo2} alt="logo2"/>
            EliteLove
            </a>
            <ul>
                <li>
                    <a href="/home"><Link to="/landing">HOME</Link></a>
                </li>
                <li>
                    <a href="/suc"><Link to="/success">HAPPY STORIES</Link></a>
                </li>
                <li>
                    <a href="/plans">PREMIUM PLANS</a>
                </li>
           <div onMouseEnter={handleMouseEnter}>
              <AccountCircleIcon style={{fontSize:"40px"}}/>
              </div>
              <div>{user.name2}</div>
              
            </ul>
            {isSidebarVisible && (
        <div className="sidebar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a className="sidebar-link">
               <Link to="/profile"> Your Profile</Link>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                Help
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                <Link to="/login">Logout</Link>
                <div  className="logouticon" >
                <LogoutIcon style={{ fontSize: '15px',color: 'whitesmoke' }}/>
                </div>
              </a>
            </li>
          </ul>
        </div>
            )}
            {/* </div> */}
        </nav>
        </div>
    );
}