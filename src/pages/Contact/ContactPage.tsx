import React, { useState } from 'react';
import './ContactPage.css';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Membership Query',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: 'What is included in the VIP Premium membership?',
      answer: 'The VIP Premium membership includes 24/7 unlimited access to all club floors, massage and infrared recovery zones, dedicated private locker spaces, 3 hours of personal coaching sessions per week, a custom premium nutritional planning guide, and a complementary IronPulse luxury training kit upon registration.',
    },
    {
      question: 'Can I request a trial session before committing?',
      answer: 'Yes! We offer a one-day complimentary pass for Surat residents. This allows you to explore our training equipment, experience our luxury facilities, and take part in any scheduled group workout sessions. Simply fill out our contact form and request a guest pass.',
    },
    {
      question: 'How do I cancel or temporarily freeze my membership?',
      answer: 'Memberships can be frozen for up to 3 calendar months per year free of charge. Cancellations or pauses must be requested in writing at our front reception desk or by sending an official email to support@ironpulse.com at least 7 days before your next billing cycle.',
    },
    {
      question: 'Are all your fitness trainers certified?',
      answer: 'Yes, absolutely. Every coach at IronPulse holds international certifications in strength instruction, kinesiology, or personal nutrition. Many are competitive bodybuilders or professional sports trainers with a minimum of 5 years of coaching experience.',
    },
    {
      question: 'Do you offer secure parking facilities?',
      answer: 'Yes, we provide secure, private multi-level parking for cars and two-wheelers. Valet parking is complimentary for our Elite Club and VIP Premium members during club hours.',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 450);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="contact-page">
      {/* Banner */}
      <section className="page-banner">
        <div className="banner-content">
          <div className="banner-eyebrow">IRONPULSE Club</div>
          <h1>GET IN <em>TOUCH</em></h1>
        </div>
      </section>

      {/* Info & Form */}
      <section className="section">
        <div className="section-label reveal">Contact Channels</div>
        <h2 className="section-heading reveal">CONNECT WITH OUR<br /><em>OFFICE</em></h2>

        <div className="contact-grid">
          {/* Info cards left */}
          <div className="contact-info-block reveal">
            <div className="contact-widget">
              <div className="widget-icon">
                <i className="ri-mail-send-fill"></i>
              </div>
              <h3>Email Support</h3>
              <p>support@ironpulse.com</p>
              <p>info@ironpulse.com</p>
            </div>

            <div className="contact-widget">
              <div className="widget-icon">
                <i className="ri-phone-fill"></i>
              </div>
              <h3>Call Reception</h3>
              <p>+91 98765 43210</p>
              <p>+91 261 456789</p>
            </div>

            <div className="contact-widget widget-wide">
              <div className="widget-icon">
                <i className="ri-map-pin-2-fill"></i>
              </div>
              <h3>Physical Address</h3>
              <p>Plot 40-45, Elite Business Hub, VIP Road, Vesu, Surat, Gujarat, 395007</p>
            </div>

            <div className="contact-widget widget-wide">
              <div className="widget-icon">
                <i className="ri-time-fill"></i>
              </div>
              <h3>Opening Hours</h3>
              <p style={{ fontWeight: 500, color: 'var(--accent)' }}>Open 24 Hours / 7 Days — 365 Days A Year</p>
              <p style={{ marginTop: '4px', fontSize: '13px' }}>Reception desk is attended from 06:00 AM to 10:00 PM daily.</p>
            </div>
          </div>

          {/* Form right */}
          <div className="contact-form-card reveal">
            {isSubmitted ? (
              <div className="success-message">
                <i className="ri-checkbox-circle-line"></i>
                <h3>Message Sent!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.subject}</strong> has been received.
                </p>
                <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--accent)' }}>
                  Our hospitality desk will contact you via email at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button className="submit-btn" style={{ width: 'auto', padding: '12px 32px', marginTop: '24px' }} onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
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
                  <label htmlFor="subject">Subject Topic</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange}>
                    <option value="Membership Query">Membership Query</option>
                    <option value="Elite Trainer Inquiry">Elite Trainer Inquiry</option>
                    <option value="Guest Pass Request">Guest Pass Request</option>
                    <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you need..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="section-label reveal" style={{ justifyContent: 'center' }}>Support Hub</div>
        <h2 className="section-heading reveal" style={{ textAlign: 'center' }}>FREQUENTLY ASKED<br /><em>QUESTIONS</em></h2>

        <div className="faq-wrap reveal">
          {faqItems.map((item, index) => {
            const isActive = activeFaq === index;
            return (
              <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
                <button className="faq-header" onClick={() => toggleFaq(index)}>
                  <h3>{item.question}</h3>
                  <span className="faq-icon-wrapper">
                    <i className="ri-arrow-down-s-line"></i>
                  </span>
                </button>
                <div className="faq-body">
                  <div className="faq-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
