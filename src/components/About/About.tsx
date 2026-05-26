import React from 'react';
import aboutMain from '../../assets/images/about-main.jpg';
import './About.css';

interface FeatureItem {
  iconClass: string;
  title: string;
  desc: string;
}

const About: React.FC = () => {
  const features: FeatureItem[] = [
    {
      iconClass: 'ri-medal-fill',
      title: 'Imported Equipment',
      desc: 'World-class machines & free weights',
    },
    {
      iconClass: 'ri-leaf-fill',
      title: 'Nutrition & Recovery',
      desc: 'Personalized diet & recovery programs',
    },
    {
      iconClass: 'ri-user-star-fill',
      title: 'Pro Coaches',
      desc: 'Certified bodybuilding specialists',
    },
    {
      iconClass: 'ri-vip-crown-fill',
      title: 'VIP Lounge',
      desc: 'Exclusive member-only premium spaces',
    },
  ];

  return (
    <section className="section" id="about">
      <div className="about-wrap">
        <div className="about-media reveal">
          <img
            className="about-img-main"
            src={aboutMain}
            alt="Premium gym interior"
          />
          <div className="about-badge">
            <span className="about-badge-text">20+</span>
            <span className="about-badge-sub">Branches</span>
          </div>
        </div>

        <div>
          <div className="section-label reveal">Our Philosophy</div>
          <h2 className="section-heading reveal" style={{ marginBottom: '24px' }}>
            TRAIN IN A<br /><em>PREMIUM</em><br />ATMOSPHERE
          </h2>
          <p
            style={{
              color: 'var(--muted2)',
              fontSize: '16px',
              lineHeight: '1.9',
              fontWeight: 300,
              marginBottom: '40px',
            }}
            className="reveal"
          >
            Our luxury fitness center fuses elite training systems with modern architecture, premium lighting, dedicated recovery zones, and world-class athlete support — all in one place.
          </p>

          <div className="about-features reveal">
            {features.map((feat, index) => (
              <div key={index} className="about-feat">
                <div className="about-feat-icon">
                  <i className={feat.iconClass}></i>
                </div>
                <div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
