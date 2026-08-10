import React, { useState } from 'react';
import { Cpu, Briefcase, GraduationCap, Award, Languages } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education'>('skills');

  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-darker)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="sub-title">
          About <span>Me</span>
        </h2>

        <div className="about-grid">
          {/* Left Column: Image Card */}
          <div className="about-image-col">
            <div
              className="image-card-wrapper"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <img
                src="./assets/images/user.png"
                alt="Suman Dey"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'var(--transition-smooth)',
                  filter: 'grayscale(15%) contrast(105%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 10, 15, 0.8) 0%, transparent 50%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>Suman Dey</h4>
                  <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    Backend / Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
            
            {/* Quick stats grid below image */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '1.5rem',
              }}
            >
              <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.75rem', fontWeight: 800 }}>3+</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Years Exp
                </p>
              </div>
              <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--secondary)', fontSize: '1.75rem', fontWeight: 800 }}>10+</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Projects Completed
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Tabs */}
          <div className="about-content-col" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#fff' }}>
              Turning Code Into Reliable Systems
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              As a Full Stack Developer with over 3 years of experience, I am passionate about engineering efficient and 
              highly scalable backend architectures. Currently finishing my B.Tech in Computer Science and Engineering, 
              I actively contribute to production codebases at Softhought. My work centers on architecting RESTful APIs, 
              deploying infrastructure, managing async queues, and deploying automated CI/CD pipelines.
              I am a quick learner, an effective team player, and I continuously seek to improve application responsiveness 
              and code maintainability.
            </p>

            {/* Tab Links */}
            <div
              style={{
                display: 'flex',
                borderBottom: '1px solid var(--border-color)',
                marginBottom: '2rem',
                gap: '2rem',
              }}
            >
              {(['skills', 'experience', 'education'] as const).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: '0.75rem 0',
                      position: 'relative',
                      textTransform: 'capitalize',
                      transition: 'var(--transition-smooth)',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      {tab === 'skills' && <Cpu size={16} />}
                      {tab === 'experience' && <Briefcase size={16} />}
                      {tab === 'education' && <GraduationCap size={16} />}
                      {tab}
                    </span>
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '-1px',
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: 'var(--primary)',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab Contents */}
            <div style={{ minHeight: '300px' }}>
              
              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'aboutFadeIn 0.3s ease-out' }}>
                  {portfolioData.skills.map((category) => (
                    <div key={category.category}>
                      <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {category.category}
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {category.skills.map((skill) => (
                          <span key={skill} className="badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* Languages section in Skills */}
                  <div style={{ marginTop: '0.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Languages size={15} color="var(--primary)" />
                      <span>Languages</span>
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {portfolioData.languages.map((lang) => (
                        <span key={lang} className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', animation: 'aboutFadeIn 0.3s ease-out' }}>
                  {portfolioData.experience.map((exp, idx) => (
                    <div key={idx} style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--primary)' }}>
                      <div
                        style={{
                          position: 'absolute',
                          left: '-6px',
                          top: '6px',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary)',
                          boxShadow: '0 0 8px var(--primary)',
                        }}
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <div>
                          <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700 }}>{exp.role}</h4>
                          <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600 }}>{exp.company}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{exp.duration}</span>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{exp.location}</p>
                        </div>
                      </div>
                      
                      <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {exp.bulletPoints.map((bp, bpIdx) => (
                          <li key={bpIdx}>
                            <strong style={{ color: '#fff' }}>{bp.title}:</strong> {bp.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  {/* Certifications inside Experience panel */}
                  {portfolioData.certifications.length > 0 && (
                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '1rem' }}>
                      <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Award size={18} color="var(--primary)" />
                        <span>Certifications</span>
                      </h4>
                      {portfolioData.certifications.map((cert, certIdx) => (
                        <div key={certIdx} className="glass-card" style={{ padding: '1rem', background: 'rgba(255,255,255,0.01)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                            <strong style={{ color: '#fff', fontSize: '0.95rem' }}>{cert.title}</strong>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>{cert.year}</span>
                          </div>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{cert.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', animation: 'aboutFadeIn 0.3s ease-out' }}>
                  {portfolioData.education.map((edu, idx) => (
                    <div key={idx} style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--secondary)' }}>
                      <div
                        style={{
                          position: 'absolute',
                          left: '-6px',
                          top: '6px',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--secondary)',
                          boxShadow: '0 0 8px var(--secondary)',
                        }}
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <div>
                          <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700 }}>{edu.degree}</h4>
                          <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 600 }}>{edu.institution}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{edu.duration}</span>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{edu.location}</p>
                        </div>
                      </div>

                      <div style={{ marginBottom: '0.75rem' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            backgroundColor: 'rgba(124, 58, 237, 0.08)',
                            border: '1px solid rgba(124, 58, 237, 0.3)',
                            color: 'var(--secondary)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                          }}
                        >
                          CGPA: {edu.gpa}
                        </span>
                      </div>

                      <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {edu.details.map((detail, detIdx) => (
                          <li key={detIdx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* About section layout styling */
        .about-grid {
          display: grid;
          grid-template-columns: 3.5fr 6.5fr;
          gap: 3.5rem;
          align-items: start;
        }
        
        .about-image-col {
          display: flex;
          flex-direction: column;
        }

        .image-card-wrapper:hover img {
          transform: scale(1.03);
        }

        @keyframes aboutFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .about-image-col {
            max-width: 450px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
