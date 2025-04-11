import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  // Handle smooth scrolling
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  // Track which section is currently in view
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['details', 'projects', 'certifications'];
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const inView = rect.top <= 100 && rect.bottom >= 100;
          
          if (inView) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-lg fixed top-0 left-0 right-0 z-50">
  <div className="w-full flex justify-center">
    <ul className="menu menu-horizontal px-4 py-2 flex items-center justify-center gap-8">
      <li>
        <a
          onClick={() => handleScroll('details')}
          className={`text-xl font-medium hover:text-primary transition-colors ${
            activeSection === 'details' ? 'text-primary font-bold' : ''
          }`}
        >
          Details
        </a>
      </li>
      <li>
        <a
          onClick={() => handleScroll('projects')}
          className={`text-xl font-medium hover:text-primary transition-colors ${
            activeSection === 'projects' ? 'text-primary font-bold' : ''
          }`}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={() => handleScroll('certifications')}
          className={`text-xl font-medium hover:text-primary transition-colors ${
            activeSection === 'certifications' ? 'text-primary font-bold' : ''
          }`}
        >
          Certifications
        </a>
      </li>
    </ul>
  </div>
</div>

  );
};

export default Navbar;