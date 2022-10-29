import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyBookings } from "./MyBookings";
import { Search } from "./Search";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </BrowserRouter>
  );
};
