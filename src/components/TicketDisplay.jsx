import Barcode from "react-barcode";
import "./TicketDisplay.css";

export default function TicketDisplay({ formData, onBack }) {
  return (
    <div className="ready-ticket-container">
      <div>
        <h3>Your Ticket is Booked!</h3>
        <p>Check your email for a copy or you can download</p>
      </div>
      <div>
        <div className="ticket">
          <div className="t-details">
            <h2 aria-label="Event Name">Techember Fest ”25</h2>
            <p>📍 04 Rumens road, Ikoyi, Lagos</p>
            <p>📅 March 15, 2025 | 7:00 PM</p>
            <div>
              <img
                src={formData.avatarUrl}
                alt="Profile photo"
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div id="sub-details">
              <div className="div1" aria-label="name">
                <p className="sub-heading">Name</p>
                <p>{formData.fullName}</p>
              </div>
              <div className="div2" aria-label="email">
                <p className="sub-heading">Email</p>
                <p>{formData.fullName}</p>
              </div>
              <div className="div3" aria-label="ticket type">
                <p className="sub-heading">Ticket Type:</p>
                <p>{formData.ticketType}</p>
              </div>
              <div className="div4" aria-label="ticket quantity">
                <p className="sub-heading">Ticket For:</p>
                <p>{formData.ticketQuantity}</p>
              </div>
              <div className="div5" aria-label="special request?">
                <p className="sub-heading">Special Request?</p>
                <p>{formData.specialRequest || "Nil"}</p>
              </div>
            </div>
          </div>
          <div id="dotcut">
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
            <div className="dotcutbar"></div>
          </div>
          <div className="barcode-container">
            <Barcode
              value={`${formData.ticketQuantity} 2345 9964`}
              width={1.5}
              background="transparent"
              lineColor="#fafafa"
            />
          </div>
          <div className="ball" id="top-left"></div>
          <div className="ball" id="top-right"></div>
          <div className="ball" id="bottom-right"></div>
          <div className="ball" id="bottom-left"></div>
          <div className="ball middle" id="middle-left"></div>
          <div className="ball middle" id="middle-right"></div>
        </div>
      </div>
      <div id="button-container">
        <button onClick={onBack} className="Prev" aria-label="Book another ricket">
          Book Another Ticket
        </button>
        <button className="Next" aria-label="download ticket">Download Ticket</button>
      </div>
    </div>
  );
}
