import React from "react";
import { Route, Routes } from "react-router-dom";
import HistoryPage from "../pages/HistoryPage";
import HomePage from "../pages/HomePage";


const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
};

export default AppRouter;
