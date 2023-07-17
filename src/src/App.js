import { Route,Routes } from "react-router-dom";
import Home from "./homepage/home";
// import Navbar from "./homepage/nav";
import SignInSide from "./loginpage/login";
import SignUp from "./register/register";
import About from "./homepage/about";
import Landing from "./landpage/landing";
import Success from "./success/successstory";
import { Provider } from "react-redux";
import store from "./redux/store";
import Contact from "./contact/contact";
import MatrimonyProfile from "./profile/profile";
import Match from "./matching/matchpage";
function App() {
  return (
      <div className="App">
        <Provider store={store}>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<SignInSide/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/profile" element={<MatrimonyProfile/>}/>
          <Route path="/match" element={<Match/>}/>
        </Routes> 
        </Provider>
      </div>
  );
}

export default App;
