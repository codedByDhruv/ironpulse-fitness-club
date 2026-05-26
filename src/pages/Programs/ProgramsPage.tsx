import React from 'react';
import Programs from '../../components/Programs/Programs';
import './ProgramsPage.css';

interface PricingPlan {
  title: string;
  price: string;
  desc: string;
  popular: boolean;
  features: string[];
}

interface ScheduleRow {
  time: string;
  class: string;
  trainer: string;
  room: string;
}

const ProgramsPage: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      title: 'Basic Plan',
      price: '$29',
      desc: 'Perfect for casual gym goers seeking self-guided strength training and standard access.',
      popular: false,
      features: [
        'Access to Surat club floor',
        'Standard locker and changing room',
        'All cardio & strength machine areas',
        '1 Group fitness class per month',
        'Standard Wi-Fi',
      ],
    },
    {
      title: 'Elite Club',
      price: '$79',
      desc: 'Our most popular membership tier for dedicated lifters wanting classes and coaching.',
      popular: true,
      features: [
        '24/7 Access to club spaces',
        'Premium lockers and steam room',
        'Unlimited group classes & yoga',
        '1 Personal coach session per month',
        'Customized basic nutrition draft',
        'Recovery zone access (1x/week)',
      ],
    },
    {
      title: 'VIP Premium',
      price: '$149',
      desc: 'For elite athletes requiring absolute access, personal coaching, and luxury treatment.',
      popular: false,
      features: [
        'All elite features included',
        '24/7 Unlimited club & VIP lounge',
        'Unlimited recovery zone (infrared sauna, massages)',
        '3 Dedicated coach sessions per week',
        'Science-backed nutrition & meal delivery prep plan',
        'Free IronPulse apparel kit on signup',
      ],
    },
  ];

  const schedule: ScheduleRow[] = [
    { time: '06:00 AM - 07:30 AM', class: 'Strength Training', trainer: 'Michael Lee', room: 'Strength Zone A' },
    { time: '08:00 AM - 09:00 AM', class: 'Cardio Blast', trainer: 'Sarah Smith', room: 'Cardio Deck' },
    { time: '10:00 AM - 11:30 AM', class: 'Yoga & Mobility', trainer: 'Emma Watson', room: 'Mind & Body Studio' },
    { time: '04:30 PM - 06:00 PM', class: 'Bodybuilding Elite', trainer: 'David John', room: 'Heavy Weight Pit' },
    { time: '06:30 PM - 07:30 PM', class: 'HIIT Conditioning', trainer: 'Sarah Smith', room: 'HIIT Lab' },
    { time: '08:00 PM - 09:30 PM', class: 'Powerlifting Base', trainer: 'Michael Lee', room: 'Plates Area B' },
  ];

  return (
    <div className="programs-page">
      {/* Banner */}
      <section className="page-banner">
        <div className="banner-content">
          <div className="banner-eyebrow">IRONPULSE Premium</div>
          <h1>ELITE <em>TRAINING</em></h1>
        </div>
      </section>

      {/* Programs Grid (Imported from components) */}
      <Programs />

      {/* Pricing Packages */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-label reveal">Membership Plans</div>
        <h2 className="section-heading reveal">CHOOSE YOUR<br /><em>PULSE</em></h2>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card reveal ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="popular-badge">Popular</span>}
              <h3>{plan.title}</h3>
              <div className="pricing-price">
                {plan.price} <span>/ Month</span>
              </div>
              <p className="pricing-desc">{plan.desc}</p>
              <ul className="pricing-features">
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    <i className="ri-checkbox-circle-fill"></i> {feat}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="pricing-btn">
                Select Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Table */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="section-label reveal">Class Schedule</div>
        <h2 className="section-heading reveal">WEEKLY CLASS<br /><em>TIMETABLE</em></h2>

        <div className="schedule-table-wrap reveal">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time Slot</th>
                <th>Class Focus</th>
                <th>Certified Coach</th>
                <th>Workout Studio</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: 500, color: 'var(--white)' }}>{row.time}</td>
                  <td>
                    <span className="class-tag">{row.class}</span>
                  </td>
                  <td>{row.trainer}</td>
                  <td>{row.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
