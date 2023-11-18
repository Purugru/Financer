// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Transactions from './pages/Transactions';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Alltrans from './pages/Alltrans';
import Login from './pages/Login';

export default function App() {
  const isLoginPage = window.location.pathname === '/login';

  return (
    <div className="App">
      <BrowserRouter>
        {!isLoginPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions/all" element={<Alltrans />} />
          {/* Redirect to home if the user tries to access the login page when already authenticated */}
          {isLoginPage && <Route path="/login" element={<Navigate to="/home" />} />}
        </Routes>
        {!isLoginPage && <Footer />}
      </BrowserRouter>
    </div>
  );
}
