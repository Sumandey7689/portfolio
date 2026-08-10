import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Tracks scroll to add styling and detect active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Works', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of the navbar
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        transition: 'var(--transition-smooth)',
        backgroundColor: scrolled ? 'rgba(5, 5, 8, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-lg)' : 'none',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} style={{ display: 'flex', alignItems: 'center' }}>
          <h1
            style={{
              fontSize: '1.65rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: 0,
              fontFamily: 'var(--font-sans)',
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
            <span style={{ color: '#fff' }}>Dey</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      position: 'relative',
                      padding: '0.25rem 0',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link.name}
                    {/* Sliding underline */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: isActive ? '100%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                        transition: 'var(--transition-smooth)',
                      }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="./assets/images/My_Resume.pdf"
            download="Suman_Dey_Resume.pdf"
            className="btn btn-secondary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="mobile-menu-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(5, 5, 8, 0.98)',
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          zIndex: 89,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '2.5rem 1.5rem',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            padding: 0,
            margin: '0 0 2rem 0',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    display: 'block',
                  }}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div style={{ marginTop: 'auto' }}>
          <a
            href="./assets/images/My_Resume.pdf"
            download="Suman_Dey_Resume.pdf"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
          >
            <FileText size={18} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      <style>{`
        /* Desktop vs Mobile display queries */
        @media (max-width: 900px) {
          header nav {
            display: none !important;
          }
          header .mobile-menu-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          header + div {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
