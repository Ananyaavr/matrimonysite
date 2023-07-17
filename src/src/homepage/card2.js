import { blue } from "@mui/material/colors";
import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Card2=()=>{
    return(
        <React.Fragment>
            <div class="container">
  <div className="row">
    <div className="col-sm"><div class="card">
  <img class="card-img-top" src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" height="230"/>
  <div class="card-body">
    <h5 class="card-title" style={{fontFamily:'initial',fontSize:30}}>Success Stories</h5>
    <p class="card-text" style={{fontSize:20,fontFamily:'inherit',color:'Highlight'}}>30,000+ users found their soulmates through us.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div><br/><br/>
    <div className="col-sm"><div class="card">
  <img class="card-img-top" src="https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" height="230"/>
  <div class="card-body">
    <h5 class="card-title" style={{fontFamily:'initial',fontSize:30}}>Manually Verified</h5>
    <p class="card-text" style={{fontSize:20,fontFamily:'inherit',color:'Highlight'}}>Profiles are manually screened by our team before publishing.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div><br/><br/>
    <div className="col-sm"><div class="card">
  <img class="card-img-top" src="https://images.pexels.com/photos/888899/pexels-photo-888899.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" height="230"/>
  <div class="card-body">
    <h5 class="card-title" style={{fontFamily:'initial',fontSize:30}}>Best Matches</h5>
    <p class="card-text" style={{fontSize:20,fontFamily:'inherit',color:'Highlight'}}>1,00,000+ manually verified profiles to choose from.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
  </div>
</div>
        </React.Fragment>
    )
}
export default Card2;