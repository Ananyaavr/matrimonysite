import { Route,Routes } from "react-router-dom";
import Home from "./homepage/home";
import About from "./homepage/about";
import Landing from "./landpage/landing";
import Success from "./success/successstory";
import { Provider } from "react-redux";
import store from "./redux/store";
import Contact from "./contact/contact";
import MatrimonyProfile from "./profile/profile";
import Match from "./matching/matchpage";
import MatrimonySearchPage from "./search/searchfilter";
import LoginForm from "./loginpage/login";
import RegisterForm from "./register/register";
import Feedback from "./landpage/feedback";
function App() {
  return (
      <div className="App">
        <Provider store={store}>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/profile" element={<MatrimonyProfile/>}/>
          <Route path="/match" element={<Match/>}/>
          <Route path="/search" element={<MatrimonySearchPage/>}/>
          <Route path="/feed" element={<Feedback/>}/>
        </Routes> 
        </Provider>
      </div>
  );
}

export default App;
