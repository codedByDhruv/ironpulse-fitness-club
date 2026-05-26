import React from 'react';
import About from '../../components/About/About';
import galleryStrength from '../../assets/images/gallery-strength.jpg';
import galleryCardio from '../../assets/images/gallery-cardio.jpg';
import galleryVip from '../../assets/images/gallery-vip.jpg';
import galleryRecovery from '../../assets/images/gallery-recovery.jpg';
import './AboutPage.css';

interface GalleryItem {
  image: string;
  title: string;
}

interface ValueItem {
  icon: string;
  title: string;
  desc: string;
}

const AboutPage: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      image: galleryStrength,
      title: 'Strength Arena',
    },
    {
      image: galleryCardio,
      title: 'Cardio Deck',
    },
    {
      image: galleryVip,
      title: 'VIP Lounge',
    },
    {
      image: galleryRecovery,
      title: 'Recovery Zone',
    },
  ];

  const values: ValueItem[] = [
    {
      icon: 'ri-fire-fill',
      title: 'Absolute Passion',
      desc: 'We are driven by elite performance, supporting athletes who demand the very best from their bodies.',
    },
    {
      icon: 'ri-shield-check-fill',
      title: 'Premium Quality',
      desc: 'From imported Italian strength machines to luxury interior finishes, we refuse to compromise.',
    },
    {
      icon: 'ri-hand-heart-fill',
      title: 'Elite Coaching',
      desc: 'Our staff are verified bodybuilding & nutrition experts dedicated to coaching real, scientific results.',
    },
    {
      icon: 'ri-hand-coin-fill',
      title: 'Total Inclusivity',
      desc: 'No matter your starting base, we provide the luxury equipment and personal encouragement to help you level up.',
    },
  ];

  return (
    <div className="about-page">
      {/* Banner */}
      <section className="page-banner">
        <div className="banner-content">
          <div className="banner-eyebrow">IRONPULSE Legacy</div>
          <h1>OUR <em>PHILOSOPHY</em></h1>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Core Values */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="section-label reveal">Club Ideals</div>
        <h2 className="section-heading reveal">OUR CORE<br /><em>VALUES</em></h2>

        <div className="values-grid">
          {values.map((val, index) => (
            <div key={index} className="value-card reveal">
              <div className="value-icon">
                <i className={val.icon}></i>
              </div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gym Gallery */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-label reveal">Inside The Club</div>
        <h2 className="section-heading reveal">PREMIUM SURAT<br /><em>FACILITIES</em></h2>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-card reveal">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
