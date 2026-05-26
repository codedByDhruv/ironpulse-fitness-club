import React from 'react';
import { Link } from 'react-router-dom';
import testDaniel from '../../assets/images/testimonial-daniel.jpg';
import testSophia from '../../assets/images/testimonial-sophia.jpg';
import testMichael from '../../assets/images/testimonial-michael.jpg';
import testEmma from '../../assets/images/testimonial-emma.jpg';
import './Testimonials.css';

interface TestimonialItem {
  image: string;
  stars: number;
  text: string;
  name: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      image: testDaniel,
      stars: 5,
      text: 'Amazing trainers and premium environment.',
      name: 'Daniel',
      role: 'Member',
    },
    {
      image: testSophia,
      stars: 5,
      text: 'Luxury gym with world-class coaching.',
      name: 'Sophia',
      role: 'Athlete',
    },
    {
      image: testMichael,
      stars: 5,
      text: 'Best transformation experience ever.',
      name: 'Michael',
      role: 'Bodybuilder',
    },
    {
      image: testEmma,
      stars: 5,
      text: 'Modern equipment and elite atmosphere.',
      name: 'Emma',
      role: 'Fitness Coach',
    },
  ];

  return (
    <section className="section">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '60px', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <div className="section-label reveal">Member Reviews</div>
          <h2 className="section-heading reveal" style={{ marginBottom: 0 }}>
            SUCCESS<br /><em>STORIES</em>
          </h2>
        </div>
        <Link to="/about" className="btn-ghost reveal" style={{ marginBottom: '8px' }}>
          View All Reviews
        </Link>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((test, index) => (
          <article key={index} className="testimonial-card reveal">
            <img src={test.image} alt={test.name} />
            <div className="testimonial-overlay">
              <div className="testimonial-stars">
                {Array.from({ length: test.stars }).map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
              <p className="testimonial-text">{test.text}</p>
              <div className="testimonial-user">
                <h3>{test.name}</h3>
                <span>{test.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
