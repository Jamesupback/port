import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your images
import responsive from '../images/responsive.png';
import javascript from '../images/javascript.png';
import frontend from '../images/frontend.png';
import data from '../images/data.png';
import relational from '../images/relational.png';
import backend from '../images/backend.png';
import quality from '../images/quality.png';

function Certifications() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      offset:120,
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  // Certifications data
  const certificationsData = [
    {
      id: 1,
      title: 'Responsive Web Design',
      image: responsive,
      description: 'Mastery in creating websites that work on all devices and screen sizes.'
    },
    {
      id: 2,
      title: 'JS Algorithms And Data Structures',
      image: javascript,
      description: 'Expertise in JavaScript fundamentals, algorithms, and data structures.'
    },
    {
      id: 3,
      title: 'Front-end Libraries',
      image: frontend,
      description: 'Proficiency in React, Redux, and other modern frontend frameworks.'
    },
    {
      id: 4,
      title: 'Data Visualization',
      image: data,
      description: 'Skills in creating visual representations of data using D3.js and other tools.'
    },
    {
      id: 5,
      title: 'Relational Database',
      image: relational,
      description: 'Knowledge of SQL, database design, and management of relational databases.'
    },
    {
      id: 6,
      title: 'Backend Development & APIs',
      image: backend,
      description: 'Experience in building server-side applications and RESTful APIs.'
    },
    {
      id: 7,
      title: 'Quality Assurance',
      image: quality,
      description: 'Techniques for testing, debugging, and ensuring application reliability.'
    },
  ];

  return (
    // Single div to control theme - change data-theme to any DaisyUI theme
    <section id="certifications" data-theme="dark" className="transition-colors duration-300">
      {/* Header */}
      <div className="py-16 bg-base-200" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-center">Skill Certifications</h1>
        <div className="divider max-w-xs mx-auto"></div>
      </div>
      
      {/* Certification Cards Grid */}
      <div className="bg-base-100 px-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-delay={index * 150}
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <div className="card bg-base-200 shadow-xl h-full overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <figure className="relative overflow-hidden min-h-56">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{cert.title}</h2>
                  <p className="text-sm text-base-content text-opacity-80">{cert.description}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;