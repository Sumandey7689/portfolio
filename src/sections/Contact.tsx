import React, { useState } from 'react';
import { Mail, Phone, Download, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '../components/BrandIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setFeedbackMsg('');

    try {
      // Create url encoded form data as expected by jQuery serialize() originally
      const formParams = new URLSearchParams();
      formParams.append('name', formData.name);
      formParams.append('email', formData.email);
      formParams.append('message', formData.message);

      const response = await fetch('https://sumandey7689-portfolio.000webhostapp.com/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString(),
      });

      // Original API returns json: { status: true } or similar
      const data = await response.json();

      if (data && data.status === true) {
        setStatus('success');
        setFeedbackMsg('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setFeedbackMsg('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact Form Error:', error);
      setStatus('error');
      setFeedbackMsg('Failed to connect to the server. Please try again.');
    }
  };

  const socials = [
    { icon: <GitHubIcon size={20} />, href: portfolioData.contact.githubUrl, label: 'GitHub' },
    { icon: <LinkedInIcon size={20} />, href: portfolioData.contact.linkedinUrl, label: 'LinkedIn' },
    { icon: <WhatsAppIcon size={20} />, href: portfolioData.contact.whatsappUrl, label: 'WhatsApp' },
    { icon: <FacebookIcon size={20} />, href: portfolioData.contact.facebookUrl, label: 'Facebook' },
    { icon: <InstagramIcon size={20} />, href: portfolioData.contact.instagramUrl, label: 'Instagram' },
  ];

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="sub-title">
          Contact <span>Me</span>
        </h2>

        <div className="contact-grid">
          {/* Left Column: Details & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
                Let's Discuss Your Project
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: '1.6' }}>
                Have an application to build, a database to optimize, or want to integrate AI features into your existing product? 
                Reach out to discuss details or schedule a meeting.
              </p>
            </div>

            {/* Contact Info Block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 0, 79, 0.04)',
                    border: '1px solid rgba(255, 0, 79, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail size={20} color="var(--primary)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Email Me</p>
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    style={{ fontSize: '1rem', color: '#fff', fontWeight: 500 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 0, 79, 0.04)',
                    border: '1px solid rgba(255, 0, 79, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Phone size={20} color="var(--primary)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Call Me</p>
                  <a
                    href={`tel:${portfolioData.contact.mobile.replace(/\s+/g, '')}`}
                    style={{ fontSize: '1rem', color: '#fff', fontWeight: 500 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                  >
                    {portfolioData.contact.mobile}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h4
                style={{
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '1rem',
                }}
              >
                Connect on Social Networks
              </h4>
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

            {/* CV Download CTA */}
            <div>
              <a
                href="./assets/images/My_Resume.pdf"
                download="Suman_Dey_Resume.pdf"
                className="btn btn-secondary"
                style={{
                  alignSelf: 'flex-start',
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
                <span style={{ color: 'var(--text-primary)' }}>Download Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass-card contact-form-card" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    backgroundColor: 'rgba(5, 5, 8, 0.5)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.85rem 1rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                    transition: 'var(--transition-smooth)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(255,0,79,0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    backgroundColor: 'rgba(5, 5, 8, 0.5)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.85rem 1rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                    transition: 'var(--transition-smooth)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(255,0,79,0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  style={{
                    backgroundColor: 'rgba(5, 5, 8, 0.5)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.85rem 1rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                    resize: 'vertical',
                    transition: 'var(--transition-smooth)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(255,0,79,0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.85rem',
                  fontSize: '1rem',
                  marginTop: '0.5rem',
                }}
              >
                <span>{status === 'submitting' ? 'Processing...' : 'Submit Message'}</span>
                <Send size={16} />
              </button>

              {/* Status Message */}
              {status !== 'idle' && status !== 'submitting' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    marginTop: '0.75rem',
                    backgroundColor: status === 'success' ? 'rgba(39, 201, 63, 0.08)' : 'rgba(255, 95, 86, 0.08)',
                    border: `1px solid ${status === 'success' ? 'rgba(39, 201, 63, 0.3)' : 'rgba(255, 95, 86, 0.3)'}`,
                    color: status === 'success' ? '#27c93f' : '#ff5f56',
                    animation: 'contactFadeIn 0.3s ease-out',
                  }}
                >
                  {status === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  <span>{feedbackMsg}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        /* Contact layout grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 4.5fr 5.5fr;
          gap: 4rem;
          align-items: start;
        }

        @keyframes contactFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};
