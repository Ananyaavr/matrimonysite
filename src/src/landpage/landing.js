import React from "react";
import "./landing.css";
import { Button } from "@mui/material";
import Landnav from "./landnav";
import { Link } from "react-router-dom";
export default function Landing(){
    return(
         <div className="land">
            <div className="landnav">
            <Landnav />
            </div>
            <div className="textland" style={{height:800}}>
                <p className="landtext1" >Every Love Story is</p>
                <p className="landtext2" >Beautiful...</p>
                <p className="landtext3" >Make Yours</p>
                <p className="landtext4">Special By EliteLove Matrimony!</p>
               <Button className="landbut1" variant="contained" component={Link} to="/match">Matching Collections</Button>
            </div>
         </div>
    );
}