import React, { useState } from 'react';
import { 
  ExternalLink, 
  Server, 
  Terminal, 
  MessageSquare, 
  ShoppingBag, 
  DollarSign, 
  Activity, 
  Award, 
  Package, 
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GitHubIcon } from '../components/BrandIcons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'enterprise' | 'open-source'>('all');

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  // Returns a custom icon for non-image cards based on project characteristics
  const getProjectIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('wms') || t.includes('warehouse')) return <Package size={24} color="var(--primary)" />;
    if (t.includes('loyalty') || t.includes('gainwell')) return <Award size={24} color="var(--primary)" />;
    if (t.includes('loan') || t.includes('cooperative')) return <DollarSign size={24} color="var(--primary)" />;
    if (t.includes('transplant') || t.includes('nephro') || t.includes('care')) return <Activity size={24} color="var(--primary)" />;
    if (t.includes('giftyo') || t.includes('commerce') || t.includes('shop')) return <ShoppingBag size={24} color="var(--primary)" />;
    if (t.includes('automation') || t.includes('cli')) return <Terminal size={24} color="var(--primary)" />;
    if (t.includes('whatsapp') || t.includes('pipeline')) return <MessageSquare size={24} color="var(--primary)" />;
    if (t.includes('package') || t.includes('laravel')) return <Layers size={24} color="var(--primary)" />;
    return <Server size={24} color="var(--primary)" />;
  };

  return (
    <section id="portfolio" style={{ backgroundColor: 'var(--bg-darker)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="sub-title">
          My <span>Works</span>
        </h2>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
          }}
        >
          {([
            { id: 'all', label: 'All Projects' },
            { id: 'enterprise', label: 'Enterprise & Client' },
            { id: 'open-source', label: 'Open Source' },
          ] as const).map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`btn ${isActive ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  fontSize: '0.875rem',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '25px',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card">
              
              {/* Card Face: Image (if personal) or Banner (if backend/enterprise) */}
              {project.imageUrl ? (
                <div className="project-card-banner">
                  <img src={project.imageUrl} alt={project.title} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 10, 15, 0.95) 0%, rgba(10, 10, 15, 0.4) 60%, transparent 100%)',
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', right: '1.5rem', zIndex: 1 }}>
                    <span className="project-card-gradient-cat">{project.category}</span>
                    <h4 className="project-card-gradient-title" style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>
                      {project.title}
                    </h4>
                  </div>
                </div>
              ) : (
                <div className="project-card-gradient">
                  <div className="project-card-gradient-icon">
                    {getProjectIcon(project.title)}
                  </div>
                  <span className="project-card-gradient-cat">{project.category}</span>
                  <h4 className="project-card-gradient-title">{project.title}</h4>
                  <p className="project-card-gradient-snippet">
                    {project.description.length > 90 
                      ? `${project.description.slice(0, 90)}...` 
                      : project.description
                    }
                  </p>
                </div>
              )}

              {/* Hover Layer overlay containing info & action links */}
              <div className="project-card-layer">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                
                {/* Tech Pills */}
                <div className="project-techs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#fff',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#fff',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'var(--transition-smooth)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.color = '#000';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)';
                        e.currentTarget.style.color = '#fff';
                      }}
                    >
                      <GitHubIcon size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#fff',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'var(--transition-smooth)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.color = '#000';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)';
                        e.currentTarget.style.color = '#fff';
                      }}
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {!project.githubUrl && !project.demoUrl && (
                    <a
                      href={portfolioData.contact.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#fff',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'var(--transition-smooth)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.color = '#000';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)';
                        e.currentTarget.style.color = '#fff';
                      }}
                    >
                      <GitHubIcon size={14} />
                      <span>GitHub Profile</span>
                    </a>
                  )}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
