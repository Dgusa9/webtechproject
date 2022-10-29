import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./AppRouter";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light justify-content-end">
        <a class="navbar-brand mb-0 h1" href="http://localhost:3000/search">
          Search
        </a>
        <a
          class="navbar-brand mb-0 h1"
          href="http://localhost:3000/my-bookings"
        >
          My Bookings
        </a>
      </nav>
      <AppRouter />
    </div>
  );
}

export default App;
