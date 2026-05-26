import React, { useState } from 'react';
import Trainers from '../../components/Trainers/Trainers';
import './TrainersPage.css';

interface BookingFormData {
  name: string;
  email: string;
  coach: string;
  date: string;
  timeSlot: string;
  message: string;
}

const TrainersPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    coach: 'Michael Lee',
    date: '',
    timeSlot: '08:00 AM - 09:30 AM',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) {
      alert('Please fill out all required fields.');
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div className="trainers-page">
      {/* Banner */}
      <section className="page-banner">
        <div className="banner-content">
          <div className="banner-eyebrow">IRONPULSE Coaching</div>
          <h1>ELITE <em>TRAINERS</em></h1>
        </div>
      </section>

      {/* Trainers Grid */}
      <Trainers />

      {/* Booking Form Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="section-label reveal">Book a Coach</div>
        <h2 className="section-heading reveal">RESERVE A 1-ON-1<br /><em>SESSION</em></h2>

        <div className="booking-wrap">
          {/* Benefits info column */}
          <div className="booking-info reveal">
            <h3>Accelerate Your Goals With Elite Coaching</h3>
            <p>
              Work directly with our certified coaches who craft bespoke routines, correct your form in real-time, keep you strictly accountable, and design personalized nutrition plans.
            </p>
            <div className="booking-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="ri-gps-fill"></i>
                </div>
                <div className="benefit-text">
                  <h4>Custom Workouts</h4>
                  <p>Training split tuned exactly to your goals (hypertrophy, conditioning, or power).</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="ri-restaurant-2-fill"></i>
                </div>
                <div className="benefit-text">
                  <h4>Science-backed Diet</h4>
                  <p>Macronutrient calculations mapped to support recovery and progress.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="ri-heart-3-fill"></i>
                </div>
                <div className="benefit-text">
                  <h4>Form Correction</h4>
                  <p>In-person mechanics coaching to prevent injuries and optimize motor recruiting.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="booking-card reveal">
            {isSubmitted ? (
              <div className="success-message">
                <i className="ri-checkbox-circle-line"></i>
                <h3>Session Reserved!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Your session with <strong>{formData.coach}</strong> has been requested for <strong>{formData.date}</strong> at <strong>{formData.timeSlot}</strong>.
                </p>
                <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--accent)' }}>
                  A representative will email you confirmation details within 2 hours.
                </p>
                <button className="submit-btn" style={{ width: 'auto', padding: '12px 32px', marginTop: '24px' }} onClick={() => setIsSubmitted(false)}>
                  Book Another Session
                </button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="coach">Select Elite Coach *</label>
                  <select id="coach" name="coach" value={formData.coach} onChange={handleInputChange}>
                    <option value="Michael Lee">Michael Lee (Strength Specialist)</option>
                    <option value="Sarah Smith">Sarah Smith (HIIT & Cardio Expert)</option>
                    <option value="David John">David John (Bodybuilding Pro)</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeSlot">Time Slot *</label>
                    <select id="timeSlot" name="timeSlot" value={formData.timeSlot} onChange={handleInputChange}>
                      <option value="06:00 AM - 07:30 AM">06:00 AM - 07:30 AM</option>
                      <option value="08:00 AM - 09:30 AM">08:00 AM - 09:30 AM</option>
                      <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                      <option value="04:30 PM - 06:00 PM">04:30 PM - 06:00 PM</option>
                      <option value="06:30 PM - 08:00 PM">06:30 PM - 08:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Brief Goals description</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="E.g., build strength, weight loss, competition preparation..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Reservation Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainersPage;
