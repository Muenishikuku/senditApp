import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Delivery from "./Components/Delivery";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetch("https://sendit-backend-lje2.onrender.com/session", { credentials: "include" })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((user) => {
        console.log("User", user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message); 
      });
  }, [refresh]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/delivery" element={<Delivery/>} />
      </Routes>
    </Router>
  );
}

export default App;
