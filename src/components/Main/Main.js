
import { Route, Routes } from 'react-router-dom';

//import the pages for routing
import Home from "../Pages/Home";
import Aboutpage from "../Pages/Aboutpage";
import Menu from "../Pages/Menu";
import Reservationspage from "../Pages/Reservationspage";
import Onlineorderpage from "../Pages/Onlineorderpage";
import Loginpage from "../Pages/Loginpage";
import Errorpage from "../Pages/Errorpage";
import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking"



function Main() {
    return <main>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservationspage />} />
        <Route path="/onlineorder" element={<Onlineorderpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/*" element={<Errorpage />} />
        <Route path="/booking-confirmation" element={<ConfirmedBooking/>}/>
      </Routes>
     
  </main>;
}

export default Main;
