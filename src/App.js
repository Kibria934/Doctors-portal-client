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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/DashBoard/Dashboard";
import MyAppointment from "./Pages/DashBoard/MyAppointment";
import MyReview from "./Pages/DashBoard/MyReview";
import MyHistory from "./Pages/DashBoard/MyHistory";
import AllUsers from "./Pages/DashBoard/AllUsers";
import RequiredAdmin from "./Pages/SharedPage/RequiredAdmin";

function App() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequiredAuth>
              <AppointmentPage></AppointmentPage>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <Dashboard></Dashboard>
            </RequiredAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route
            path="users"
            element={
              <RequiredAdmin>
                <AllUsers></AllUsers>
              </RequiredAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
