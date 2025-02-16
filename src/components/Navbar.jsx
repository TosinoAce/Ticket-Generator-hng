import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div id="logo">
        <div>
          <img src="/hugeicons_ticket-01.svg" alt="ticket-icon" />
        </div>
        <img src="/ticz.svg" alt="ticz logo" />
      </div>
      <div id="nav-links">
        <li className="active">Events</li>
        <li>My Tickets</li>
        <li>About Project</li>
      </div>
      <button>MY TICKETS <img src="/arrow.svg" alt="arrow" /></button>
    </header>
  );
};

export default Navbar;
