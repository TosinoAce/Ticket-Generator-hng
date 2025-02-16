import "./TicketTypeCard.css";

export default function TicketTypeCard({
  type,
  price,
  available,
  isSelected,
  onClick,
}) {
  return (
    <div className={`ticket-card ${isSelected ? "selected" : ""}`} onClick={onClick} aria-label={type}>
      <p className="ticket-price">{price}</p>
      <div>
        <p className="ticket-type"> {type}</p>
        <p className="ticket-available">{available}</p>
      </div>
    </div>
  );
}
