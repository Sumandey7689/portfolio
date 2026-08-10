import React from 'react';
import { Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from './BrandIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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

  const socials = [
    { icon: <GitHubIcon size={18} />, href: portfolioData.contact.githubUrl, label: 'GitHub' },
    { icon: <LinkedInIcon size={18} />, href: portfolioData.contact.linkedinUrl, label: 'LinkedIn' },
    { icon: <WhatsAppIcon size={18} />, href: portfolioData.contact.whatsappUrl, label: 'WhatsApp' },
    { icon: <FacebookIcon size={18} />, href: portfolioData.contact.facebookUrl, label: 'Facebook' },
    { icon: <InstagramIcon size={18} />, href: portfolioData.contact.instagramUrl, label: 'Instagram' },
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-darker)',
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 0 2rem 0',
        color: 'var(--text-secondary)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {/* Logo & Note */}
          <div>
            <h4
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '0.5rem',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Suman
              </span>
              Dey
            </h4>
            <p style={{ fontSize: '0.875rem', maxWidth: '300px' }}>
              Full Stack Developer specializing in backend architectures and modern web applications.
            </p>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} style={{ fontSize: '0.9rem' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} style={{ fontSize: '0.9rem' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>About</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} style={{ fontSize: '0.9rem' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Services</a>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')} style={{ fontSize: '0.9rem' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Works</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} style={{ fontSize: '0.9rem' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Contact</a>
          </div>

          {/* Social icons */}
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
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 0, 79, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 0, 79, 0.3)';
                  e.currentTarget.style.color = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
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

        <hr style={{ border: '0.5px solid rgba(255, 255, 255, 0.06)', marginBottom: '1.5rem' }} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
          }}
        >
          <p>Copyright © {currentYear} Suman Dey. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Made with <Heart size={14} fill="var(--primary)" color="var(--primary)" /> in West Bengal, India
          </p>
        </div>
      </div>
    </footer>
  );
};
