import React from "react";
import { useState } from "react";
import TicketTypeCard from "./TicketTypeCard";
import "./ConferenceTicketType.css";

export default function ConferenceTicketType({ onNext }) {
  const [ticketType, setTicketType] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedType, setSelectedType] = useState('')
  const ticketTypes = ["REGULAR ACCESS", "VIP ACCESS", "VVIP ACCESS"];
  const handleTicketTypeClick = (type) => {
    setTicketType(type);
    setSelectedType(type);
  };

  const handleNext = () => {
    if (!ticketType || ticketQuantity < 1) {
      alert("Please select a ticket type and a valid quantity.");
      return;
    }
    onNext({ ticketType, ticketQuantity });
    
  };

  return (
    <div className="ticket-type-wrapper" aria-label="First step">
      <div className="eventdisplay">
        <h3>Techember Fest ”25</h3>
        <p>
          Join us for an unforgettable experience at <br /> [Event Name]! Secure
          your spot now.
        </p>
        <div>
          <p>📍[Event Location]</p>
          <p id="demarcator">| |</p>
          <p>March 15, 2025 | 7:00 PM</p>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <p className="subHeading">Select Ticket Type:</p>
      <div className="TicketTypeCard-wrapper">
        <TicketTypeCard
          type="REGULAR ACCESS"
          price={"Free"}
          available={20 + "/" + 50}
          isSelected={selectedType === "REGULAR ACCESS"}
          onClick={() => handleTicketTypeClick("REGULAR ACCESS")}
        />
        <TicketTypeCard
          type="VIP ACCESS"
          price={"$150"}
          available={20 + "/" + 50}
          isSelected={selectedType === "VIP ACCESS"}
          onClick={() => handleTicketTypeClick("VIP ACCESS")}
        />
        <TicketTypeCard
          type="VVIP ACCESS"
          price={"$200"}
          available={20 + "/" + 50}
          isSelected={selectedType === "VVIP ACCESS"}
          onClick={() => handleTicketTypeClick("VVIP ACCESS")}
        />
      </div>
      </div>
      <div className="ticketQuantityContainer">
        <label htmlFor="ticketQuantity" className="subHeading">
          Number of Tickets
        </label><br />
        <select
          id="ticketQuantity"
          type="number"
          min="1"
          value={ticketQuantity}
          onChange={(e) => setTicketQuantity(parseInt(e.target.value) || 1)}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
      </div>
      <div id="btn-container">
      <button 
        className="Prev"
        aria-label="button to Cancel booking"
      >
        Cancel
      </button>
        <button 
        onClick={handleNext}
        className="Next"
        aria-label="button to Next step"
      >
        Next
      </button>
      </div>
      
    </div>
  );
}
