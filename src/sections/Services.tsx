import React, { useState } from 'react';
import { Code2, Palette, Smartphone, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Service } from '../data/portfolioData';
import { Modal } from '../components/Modal';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={40} color="var(--primary)" />;
      case 'Figma':
        return <Palette size={40} color="var(--primary)" />;
      case 'Smartphone':
        return <Smartphone size={40} color="var(--primary)" />;
      default:
        return <Code2 size={40} color="var(--primary)" />;
    }
  };

  return (
    <section id="services">
      <div className="container">
        <h2 className="sub-title">
          My <span>Services</span>
        </h2>

        <div className="services-grid">
          {portfolioData.services.map((service) => (
            <div
              key={service.id}
              className="glass-card service-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedService(service)}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 0, 79, 0.04)',
                  border: '1px solid rgba(255, 0, 79, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.75rem',
                  transition: 'var(--transition-smooth)',
                }}
                className="service-icon-box"
              >
                {getIcon(service.icon)}
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' }}>
                {service.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '1.75rem', flexGrow: 1 }}>
                {service.shortDesc}
              </p>

              <button
                className="btn btn-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.6rem 1.25rem',
                  fontSize: '0.85rem',
                  borderColor: 'rgba(255, 255, 255, 0.04)',
                }}
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Modal for Service Details */}
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService?.title || ''}
        >
          {selectedService && (
            <div style={{ whiteSpace: 'pre-line' }}>
              {selectedService.longDesc}
            </div>
          )}
        </Modal>
      </div>

      <style>{`
        /* Services grid styling */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-card:hover .service-icon-box {
          background-color: var(--primary);
          border-color: var(--primary);
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255, 0, 79, 0.4);
        }

        .service-card:hover .service-icon-box svg {
          color: #fff !important;
        }
      `}</style>
    </section>
  );
};
