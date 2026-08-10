import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Printer, ArrowLeft } from 'lucide-react';

export const PrintResume: React.FC = () => {
  useEffect(() => {
    // Add print page class to body
    document.body.classList.add('print-body');
    
    // Automatically open print dialog after brief render delay
    const timer = setTimeout(() => {
      window.print();
    }, 1000);

    return () => {
      document.body.classList.remove('print-body');
      clearTimeout(timer);
    };
  }, []);

  const handleBackToSite = () => {
    window.close();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-print-container">
      {/* Controls Bar (hidden when printing) */}
      <div className="print-controls no-print">
        <button onClick={handleBackToSite} className="btn-control">
          <ArrowLeft size={16} />
          <span>Close Window</span>
        </button>
        <button onClick={handlePrint} className="btn-control btn-primary-control">
          <Printer size={16} />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Main Resume Sheet */}
      <div className="resume-sheet">
        {/* Header */}
        <div className="resume-header">
          <div className="resume-header-left">
            <h1 className="resume-name">{portfolioData.contact.name}</h1>
            <h2 className="resume-title">{portfolioData.contact.title}</h2>
          </div>
          <div className="resume-header-right">
            <p><strong>Location:</strong> {portfolioData.contact.location.split(' - ')[0]}</p>
            <p><strong>Email:</strong> {portfolioData.contact.email}</p>
            <p><strong>Mobile:</strong> {portfolioData.contact.mobile}</p>
            <p><strong>GitHub:</strong> github.com/Sumandey7689</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/sumandey7689</p>
          </div>
        </div>

        <div className="resume-divider" />

        {/* Professional Summary */}
        <div className="resume-section">
          <h3 className="resume-sec-title">Professional Summary</h3>
          <p className="resume-summary-text">{portfolioData.summary.text}</p>
        </div>

        {/* Experience Section */}
        <div className="resume-section">
          <h3 className="resume-sec-title">Work Experience</h3>
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="resume-job">
              <div className="resume-job-header">
                <div>
                  <span className="resume-job-role">{exp.role}</span>
                  <span className="resume-job-company"> | {exp.company}</span>
                </div>
                <span className="resume-job-date">{exp.duration}</span>
              </div>
              <p className="resume-job-location">{exp.location}</p>
              <ul className="resume-job-bullets">
                {exp.bulletPoints.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <strong>{bullet.title}:</strong> {bullet.desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h3 className="resume-sec-title">Technical Skills</h3>
          <div className="resume-skills-grid">
            {portfolioData.skills.map((cat, idx) => (
              <div key={idx} className="resume-skill-cat">
                <span className="resume-skill-cat-name">{cat.category}:</span>{' '}
                <span className="resume-skill-cat-list">{cat.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="resume-section">
          <h3 className="resume-sec-title">Key Projects</h3>
          
          {/* Render first 5 primary projects for resume spacing */}
          {portfolioData.projects.slice(0, 5).map((project, idx) => (
            <div key={idx} className="resume-project">
              <div className="resume-project-header">
                <span className="resume-project-name">{project.title}</span>
                <span className="resume-project-tech">{project.techStack.join(' · ')}</span>
              </div>
              <p className="resume-project-desc">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="resume-section">
          <h3 className="resume-sec-title">Education</h3>
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="resume-edu">
              <div className="resume-edu-header">
                <div>
                  <span className="resume-edu-degree">{edu.degree}</span>
                  <span className="resume-edu-school"> | {edu.institution}</span>
                </div>
                <span className="resume-edu-date">{edu.duration}</span>
              </div>
              <p className="resume-edu-gpa">CGPA: {edu.gpa} | {edu.location}</p>
            </div>
          ))}
        </div>

        {/* Bottom Metadata: Certifications & Languages */}
        <div className="resume-grid-two-col">
          <div>
            <h3 className="resume-sec-title">Certifications</h3>
            {portfolioData.certifications.map((cert, idx) => (
              <p key={idx} style={{ fontSize: '0.85rem', margin: '0.2rem 0' }}>
                <strong>{cert.title} ({cert.year})</strong> - {cert.description}
              </p>
            ))}
          </div>
          <div>
            <h3 className="resume-sec-title">Languages</h3>
            <p style={{ fontSize: '0.85rem', margin: '0.2rem 0' }}>
              {portfolioData.languages.join(', ')}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Styles for Resume Print Page */
        .resume-print-container {
          background-color: #f4f4f7;
          min-height: 100vh;
          padding: 2rem 1rem;
          color: #222;
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .print-controls {
          max-width: 800px;
          margin: 0 auto 1.5rem auto;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }

        .btn-control {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid #d1d5db;
          background-color: #fff;
          color: #374151;
          transition: all 0.2s;
        }

        .btn-control:hover {
          background-color: #f3f4f6;
          border-color: #9ca3af;
        }

        .btn-primary-control {
          background-color: #0f172a;
          color: #fff;
          border-color: #0f172a;
        }

        .btn-primary-control:hover {
          background-color: #1e293b;
          border-color: #1e293b;
        }

        .resume-sheet {
          background-color: #fff;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 2.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border-radius: 4px;
          box-sizing: border-box;
        }

        .resume-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .resume-name {
          font-size: 2.25rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          margin: 0 0 0.25rem 0;
        }

        .resume-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: #ff004f;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .resume-header-right {
          text-align: right;
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.5;
        }

        .resume-header-right p {
          margin: 0;
        }

        .resume-divider {
          height: 1.5px;
          background-color: #e2e8f0;
          margin: 1.5rem 0;
        }

        .resume-section {
          margin-bottom: 1.5rem;
        }

        .resume-sec-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border-bottom: 1.5px solid #0f172a;
          padding-bottom: 0.25rem;
          margin: 0 0 0.75rem 0;
        }

        .resume-summary-text {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #334155;
          margin: 0;
        }

        .resume-job {
          margin-bottom: 1.25rem;
        }

        .resume-job-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.15rem;
        }

        .resume-job-role {
          color: #0f172a;
        }

        .resume-job-company {
          color: #ff004f;
        }

        .resume-job-date {
          font-size: 0.85rem;
          font-weight: 500;
          color: #475569;
        }

        .resume-job-location {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0 0 0.4rem 0;
          font-style: italic;
        }

        .resume-job-bullets {
          padding-left: 1.15rem;
          margin: 0;
          font-size: 0.85rem;
          color: #334155;
          line-height: 1.5;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .resume-skills-grid {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .resume-skill-cat {
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .resume-skill-cat-name {
          font-weight: 700;
          color: #0f172a;
        }

        .resume-skill-cat-list {
          color: #334155;
        }

        .resume-project {
          margin-bottom: 0.75rem;
        }

        .resume-project-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.15rem;
        }

        .resume-project-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f172a;
        }

        .resume-project-tech {
          font-size: 0.75rem;
          font-weight: 600;
          color: #ff004f;
        }

        .resume-project-desc {
          font-size: 0.825rem;
          color: #334155;
          line-height: 1.4;
          margin: 0;
        }

        .resume-edu {
          margin-bottom: 0.75rem;
        }

        .resume-edu-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.15rem;
        }

        .resume-edu-degree {
          color: #0f172a;
        }

        .resume-edu-school {
          color: #ff004f;
        }

        .resume-edu-date {
          font-size: 0.825rem;
          font-weight: 500;
          color: #475569;
        }

        .resume-edu-gpa {
          font-size: 0.825rem;
          color: #64748b;
          margin: 0;
        }

        .resume-grid-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1rem;
        }

        /* PRINT STYLES */
        @media print {
          body.print-body {
            background-color: #fff !important;
            background-image: none !important;
            color: #000 !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .resume-print-container {
            background-color: #fff !important;
            padding: 0 !important;
            min-height: auto !important;
          }

          .no-print {
            display: none !important;
          }

          .resume-sheet {
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            border-radius: 0 !important;
          }

          .resume-sec-title {
            border-bottom-color: #000 !important;
          }
          
          /* Force page break settings */
          h3.resume-sec-title {
            break-after: avoid;
          }
          
          .resume-job {
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
};
