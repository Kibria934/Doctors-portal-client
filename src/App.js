import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import auth from "./firebase.init";
import About from "./Pages/About/About";
import AppointmentPage from "./Pages/AppointmentPage/AppointmentPage";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Loading from "./Pages/SharedPage/Loading";
import Navbar from "./Pages/SharedPage/Navbar";
import RequiredAuth from "./Pages/SharedPage/RequiredAuth";



function App() {
  const [user, loading, error] = useAuthState(auth);
  if(loading){
    <Loading></Loading>
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={<RequiredAuth><AppointmentPage></AppointmentPage></RequiredAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
