import React from 'react';
import './Programs.css';

interface ProgramItem {
  num: string;
  iconClass: string;
  title: string;
  desc: string;
}

const Programs: React.FC = () => {
  const programs: ProgramItem[] = [
    {
      num: '01',
      iconClass: 'ri-boxing-fill',
      title: 'Strength Training',
      desc: 'Build raw power and sculpted muscle using elite imported equipment guided by certified strength coaches.',
    },
    {
      num: '02',
      iconClass: 'ri-heart-pulse-fill',
      title: 'Cardio Fitness',
      desc: 'Incinerate calories and boost endurance with modern high-intensity cardio programs built for results.',
    },
    {
      num: '03',
      iconClass: 'ri-user-star-fill',
      title: 'Personal Coaching',
      desc: 'One-on-one sessions with elite coaches who craft a plan tailored precisely to your goals.',
    },
    {
      num: '04',
      iconClass: 'ri-leaf-fill',
      title: 'Nutrition Plans',
      desc: 'Science-backed diet plans customized by certified nutritionists to accelerate your transformation.',
    },
    {
      num: '05',
      iconClass: 'ri-mental-health-fill',
      title: 'Recovery & Wellness',
      desc: 'Premium recovery zones with massage therapy, infrared sauna, and guided mobility sessions.',
    },
    {
      num: '06',
      iconClass: 'ri-group-fill',
      title: 'Group Classes',
      desc: 'High-energy group sessions — from HIIT to yoga — led by world-class instructors.',
    },
  ];

  return (
    <section className="section" id="programs">
      <div className="section-label reveal">Premium Services</div>
      <h2 className="section-heading reveal">EXCLUSIVE<br /><em>PROGRAMS</em></h2>

      <div className="programs-grid">
        {programs.map((prog, index) => (
          <div key={index} className="prog-card reveal">
            <div className="prog-number">{prog.num}</div>
            <div className="prog-icon">
              <i className={prog.iconClass}></i>
            </div>
            <h3>{prog.title}</h3>
            <p>{prog.desc}</p>
            <div className="prog-link">
              Explore <i className="ri-arrow-right-line"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
