import { useState } from "react";
import ConferenceTicketForm from "./ConferenceTicketForm";
import ConferenceTicketType from "./ConferenceTicketType";
import TicketDisplay from "./TicketDisplay";
import "./TicketGenerator.css";

export default function TicketGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ticketType: "",
    ticketQuantity: 1,
    fullName: "",
    email: "",
    avatarUrl: "",
    specialRequest: "",
  });

  var stepHead = "Ticket Selection";
  var stepNumber = 1 ;
  var stepBar = <div id="bar" style={{ width: '34%' }}></div>;

  const handleNextStepOne = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleNextStepTwo = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };
  
  if (step === 1) {
    stepHead = "Ticket Selection";
    stepNumber = 1 ;
    stepBar = <div id="bar" style={{ width: '34%' }}></div>;
  } else if (step === 2) {
    stepHead = "Attendee Details";
    stepNumber = 2 ;
    stepBar = <div id="bar" style={{ width: '68%' }}></div>;
  }else if (step === 3) {
    stepHead = "Ready";
    stepNumber = 3 ;
    stepBar = <div id="bar" style={{ width: '100%' }}></div>;
  }

  return (
    <div className="ticket-gen-wrapper">
      <div>
        <div className="ticket-header">
          <h2>{stepHead}</h2>
          <p>
            Step <span>{stepNumber}</span>/3
          </p>
        </div>
        <div className="progressBar">
        {stepBar}
        </div>
      </div>
      <div>
      {step === 1 && <ConferenceTicketType onNext={handleNextStepOne} />}
      {step === 2 && <ConferenceTicketForm onNext={handleNextStepTwo} onBack={handleBack} />}
      {step === 3 && <TicketDisplay formData={formData} onBack={handleBack} />}
      </div>
    </div>
  );
}
