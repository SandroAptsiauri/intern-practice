import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HistoryPage from "../pages/HistoryPage";
import HomePage from "../pages/HomePage";
import Navbar from "../components/navbar/Navbar";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
