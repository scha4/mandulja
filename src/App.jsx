import React from "react";
import Navbar from "./componenets/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./componenets/Footer";
import HomePage from "./pages/HomePage";
import BusinessPage from "./pages/BusinessPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Business" element={<BusinessPage />} />
        <Route path="/Service" element={<ServicePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
