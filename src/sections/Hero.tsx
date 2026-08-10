import React from 'react';
import { MapPin, Mail, Phone, ArrowRight, Download, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '../components/BrandIcons';

export const Hero: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  const mainTech = ['Laravel', 'PHP', 'Node.js', 'MySQL', 'Redis', 'AWS', 'AI Services'];

  const socials = [
    { icon: <GitHubIcon size={20} />, href: portfolioData.contact.githubUrl, label: 'GitHub' },
    { icon: <LinkedInIcon size={20} />, href: portfolioData.contact.linkedinUrl, label: 'LinkedIn' },
    { icon: <WhatsAppIcon size={20} />, href: portfolioData.contact.whatsappUrl, label: 'WhatsApp' },
    { icon: <FacebookIcon size={20} />, href: portfolioData.contact.facebookUrl, label: 'Facebook' },
    { icon: <InstagramIcon size={20} />, href: portfolioData.contact.instagramUrl, label: 'Instagram' },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Graphic Blurs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
          zIndex: 0,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)',
          zIndex: 0,
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', animation: 'heroFadeIn 0.8s ease-out' }}>
          
          {/* Availability Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 0, 79, 0.06)',
              border: '1px solid rgba(255, 0, 79, 0.2)',
              borderRadius: '30px',
              padding: '0.4rem 1rem',
              fontSize: '0.825rem',
              fontWeight: 600,
              color: 'var(--primary)',
              marginBottom: '2rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                boxShadow: '0 0 8px var(--primary)',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }}
            />
            Available for Freelance & Full-Time Opportunities
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--primary)',
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '2px',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            {portfolioData.contact.title}
          </p>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              color: '#fff',
            }}
          >
            Building Scalable <br />
            <span
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Backend Architectures
            </span>{' '}
            & APIs.
          </h2>

          {/* Short Introduction */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            Hi, I'm <strong style={{ color: '#fff' }}>Suman Dey</strong>, a developer based in West Bengal, India.
            I specialize in Laravel, database optimization, cloud infrastructures, and integrating cutting-edge AI services
            to deliver high-performance production solutions.
          </p>

          {/* Details Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              borderLeft: '2px solid rgba(255, 255, 255, 0.1)',
              paddingLeft: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={16} color="var(--primary)" />
              <span>Murshidabad, WB, India</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Mail size={16} color="var(--primary)" />
              <a href={`mailto:${portfolioData.contact.email}`} style={{ borderBottom: '1px solid transparent' }} onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--primary)')} onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}>{portfolioData.contact.email}</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Phone size={16} color="var(--primary)" />
              <a href={`tel:${portfolioData.contact.mobile.replace(/\s+/g, '')}`}>{portfolioData.contact.mobile}</a>
            </div>
          </div>
          {/* Main technologies list */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {mainTech.map((tech) => (
              <span key={tech} className="badge" style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem' }}>
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            <a href="#portfolio" onClick={(e) => handleContactClick(e, 'portfolio')} className="btn btn-primary">
              <span>View My Work</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" onClick={(e) => handleContactClick(e, 'contact')} className="btn btn-secondary">
              <span>Get in Touch</span>
              <Send size={16} />
            </a>
            <a
              href="./assets/images/My_Resume.pdf"
              download="Suman_Dey_Resume.pdf"
              className="btn btn-secondary"
              style={{
                borderColor: 'rgba(255, 0, 79, 0.3)',
                background: 'rgba(255, 0, 79, 0.02)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 0, 79, 0.06)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 0, 79, 0.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 0, 79, 0.3)';
              }}
            >
              <Download size={16} color="var(--primary)" />
              <span style={{ color: 'var(--text-primary)' }}>Download CV</span>
            </a>
          </div>

          {/* Social Icons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '2rem',
            }}
          >
            <span
              style={{
                fontSize: '0.825rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Find me on
            </span>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 0, 79, 0.08)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.5; box-shadow: 0 0 0 0 rgba(255, 0, 79, 0.7); }
          70% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 8px rgba(255, 0, 79, 0); }
          100% { transform: scale(0.95); opacity: 0.5; box-shadow: 0 0 0 0 rgba(255, 0, 79, 0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
