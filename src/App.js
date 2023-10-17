import './App.css';
import Home from "./Pages/Home";
import ReserveATable from "./Pages/ReserveATable";
import ReservationDetails from "./Pages/ReservationDetails";
import ThankYou from "./Pages/ThankYou";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/reserveAtable' element={<ReserveATable /> } />
                <Route path='/reservationDetails' element={<ReservationDetails value /> } />
                <Route path='/thankYou' element={<ThankYou  /> } />
            </Routes>
            {/* <Footer />  */}
        </>
    );
}

export default App;
