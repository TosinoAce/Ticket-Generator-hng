import { useState, useEffect } from 'react';
import AvatarUpload from './AvatarUpload';
import "./ConferenceTicketForm.css"

const ConferenceTicketForm = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    avatarUrl: '',
    specialRequest: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('conferenceForm'));
    if (savedData) setFormData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('conferenceForm', JSON.stringify(formData));
  }, [formData]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.avatarUrl.trim()) newErrors.avatarUrl = 'Avatar URL is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvatarUpload = (url) => {
    setFormData({ ...formData, avatarUrl: url });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData); // This sends the data up to TicketGenerator component
    }
  };

  return (
    <div className="form-container" aria-label='Second Step in Booking'>
      <form onSubmit={handleSubmit} noValidate>
        <div className="photo" aria-label='upload your image'>
          <AvatarUpload onUploadSuccess={handleAvatarUpload} />
          {errors.avatarUrl && <span className="error">{errors.avatarUrl}</span>}
        </div>
        <div className="form-group" aria-label='enter yout name'>
          <p htmlFor="fullName">Enter your name</p><br />
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="form-group" aria-label='enter your email'>
          <p htmlFor="email">Enter your email*</p><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group" aria-label='enter special request'>
          <p htmlFor="specialRequest">Special Request?</p><br />
          <textarea
            id="specialRequest"
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
          />
        </div>

        <div className="form-buttons">
          <button type="button" onClick={onBack} aria-label="Go Back">Go Back</button>
          <button type="submit" id='genTicket' aria-label="Generate Ticket">Get My Free Ticket</button>
        </div>
      </form>
    </div>
  );
};

export default ConferenceTicketForm;
