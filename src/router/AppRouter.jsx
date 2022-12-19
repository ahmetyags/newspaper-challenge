import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchAppBar from "../components/Appbar/Appbar";
import Navbar from "../components/Navbar/Navbar";
import About from "../pages/About";
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";

const AppRouter = () => {
  return (
    <>
      <SearchAppBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default AppRouter;
