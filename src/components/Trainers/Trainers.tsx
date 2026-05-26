import React from 'react';
import { Link } from 'react-router-dom';
import trainerMichael from '../../assets/images/trainer-michael.jpg';
import trainerSarah from '../../assets/images/trainer-sarah.jpg';
import trainerDavid from '../../assets/images/trainer-david.jpg';
import './Trainers.css';

interface TrainerItem {
  tag: string;
  name: string;
  image: string;
  instagram: string;
  twitter: string;
}

const Trainers: React.FC = () => {
  const trainers: TrainerItem[] = [
    {
      tag: 'Strength Coach',
      name: 'Michael Lee',
      image: trainerMichael,
      instagram: '#',
      twitter: '#',
    },
    {
      tag: 'Fitness Expert',
      name: 'Sarah Smith',
      image: trainerSarah,
      instagram: '#',
      twitter: '#',
    },
    {
      tag: 'Bodybuilding Coach',
      name: 'David John',
      image: trainerDavid,
      instagram: '#',
      twitter: '#',
    },
  ];

  return (
    <section className="section" id="trainers">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '60px', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <div className="section-label reveal">Expert Coaches</div>
          <h2 className="section-heading reveal" style={{ marginBottom: 0 }}>
            MEET OUR<br /><em>TRAINERS</em>
          </h2>
        </div>
        <Link to="/trainers" className="btn-ghost reveal" style={{ marginBottom: '8px' }}>
          View All Trainers
        </Link>
      </div>

      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <article key={index} className="trainer-card reveal">
            <img src={trainer.image} alt={trainer.name} />
            <div className="trainer-info">
              <span className="trainer-tag">{trainer.tag}</span>
              <div className="trainer-name">{trainer.name}</div>
              <div className="trainer-socials">
                <a href={trainer.instagram} aria-label="Instagram">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href={trainer.twitter} aria-label="Twitter">
                  <i className="ri-twitter-x-line"></i>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
