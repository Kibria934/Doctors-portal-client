import { Route, Routes,Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AppointmentPage from "./Pages/AppointmentPage/AppointmentPage";
import Home from "./Pages/HomePage/Home/Home";
import MakeAppointment from "./Pages/HomePage/MakeAppointment/MakeAppointment";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/SharedPage/Navbar";





function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={<AppointmentPage></AppointmentPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
