import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchAppBar from "../components/Appbar/Appbar";
import Navbar from "../components/Navbar/Navbar";
import Business from "../pages/Business";
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";
import Design from "../pages/Design";
import Health from "../pages/Health";
import Home from "../pages/Home";
import Politics from "../pages/Politics";
import Sport from "../pages/Sport";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <SearchAppBar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
        <Route path="/design" element={<Design />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
