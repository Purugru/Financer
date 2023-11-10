import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Transactions from './pages/Transactions'; // Add this import
import Goals from './pages/Goals'; // Add this import
import Profile from './pages/Profile'; // Add this import
import Footer from './components/Footer';
export default function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/transactions" element={<Transactions />} /> {/* Add this route */}
          <Route path="/goals" element={<Goals />} /> {/* Add this route */}
          <Route path="/profile" element={<Profile />} /> {/* Add this route */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}