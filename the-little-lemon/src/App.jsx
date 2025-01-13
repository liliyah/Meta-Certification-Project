import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TableBookingForm from "./components/TableBookingForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/HomeScreen";
import Contacts from "./components/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';  // This works if App.css is in the src folder


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/reservation" element={<TableBookingForm />} /> {/* Reservation page */}
            <Route path="/contacts" element={<Contacts />} /> {/* Contacts page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
