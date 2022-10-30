import React from "react";

import { AppRouter } from "./AppRouter";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light justify-content-end">
        <a className="navbar-brand mb-0 h1" href="http://localhost:3000/search">
          Search
        </a>
        <a
          className="navbar-brand mb-0 h1"
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
