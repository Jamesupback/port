import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'daisyui/dist/full.css';
import profile from '../images/profile.jpg'; // Replace with your own image

const Details = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Sample skills - replace with your own
  const skills = [
    'React',
    'JavaScript',
    'HTML',
    'Bootstrap',
    'Node.js',
    'CSS',
    'Tailwind',
    'Express',
    'MongoDB',
    'Python',
    'Git',
  ];

  return (
    <section className="bg-base-200 p-10" id="details">
      <div className="hero min-h-screen bg-base-600">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <div
            className="avatar"
            data-aos="fade-right"
          >
            <div className="w-64 rounded-box ring ring-primary ring-offset-base-100 ring-offset-2 shadow-xl">
              {/* Changed rounded-3xl to rounded-full for a circular profile picture */}
              <img src={profile} alt="Profile" />
            </div>
          </div>
         
          <div className="max-w-md" data-aos="fade-left">
            <h1 className="text-5xl font-bold mb-2">James Sajan</h1>
            <h2 className="text-2xl text-primary mb-6">Full Stack Developer</h2>
            <h2 className="text-2xl text-primary mb-6">Freelancer</h2>
            <p className="text-lg mb-8">
              A passionate developer with a focus on creating clean, efficient, and user-friendly
              web applications. With over 4 years of experience in the coding and development, I specialize in
              building modern web solutions that deliver exceptional user experiences. I also specialize in machine learning ,python
              and data analytics. I am always eager to learn new technologies and improve my skills.
            </p>
           
            <div className="divider">My Skills</div>
           
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="badge badge-primary badge-lg font-medium py-3 px-4"
                  data-aos="zoom-in"
                  data-aos-delay={50 * index}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;