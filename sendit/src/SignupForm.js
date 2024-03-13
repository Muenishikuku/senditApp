import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Delivery from "./Components/Delivery";
import Home from "./Home";
import MapSearch from "./Components/MapSearch";



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/delivery" element={<Delivery/>} />
                <Route path="/mapsearch" element={<MapSearch/>} />
            </Routes>
        </Router>
    );
};

export default App;
