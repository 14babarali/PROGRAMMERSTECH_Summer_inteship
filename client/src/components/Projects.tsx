import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Projects & Work Experience</h2>
      <div className="container mx-auto px-3">
        <div className="project mb-10">
          <h3 className="text-2xl font-semibold mb-4">Full Stack Web Developer & Mobile App</h3>
          <p className="mb-4">For my final year project, I built a complete web application and mobile app from scratch using the MERN stack.</p>
          <p className="text-sm text-gray-600">July 2023 - Present | Full Stack Web Developer & Mobile App | Final Year Project</p>
        </div>
        <div className="project mb-10">
          <h3 className="text-2xl font-semibold mb-4">Full Stack Web Developer | Ecommerce website</h3>
          <p className="mb-4">Developed a dynamic Ecommerce website as a Full Stack Web Developer.</p>
          <p className="text-sm text-gray-600">April 2022 - July 2022 | Full Stack Web Developer | Ecommerce website</p>
        </div>
        <div className="project mb-10">
          <h3 className="text-2xl font-semibold mb-4">Full Stack Web Developer | Job Portal Project</h3>
          <p className="mb-4">Developed a comprehensive platform connecting job seekers and employers using the MERN stack.</p>
          <p className="text-sm text-gray-600">Freelancing Project | Full Stack Web Developer | Job Portal Project</p>
        </div>
        <div className="project mb-10">
          <h3 className="text-2xl font-semibold mb-4">Full Stack Web Developer | Weather App Project</h3>
          <p className="mb-4">Developed a Weather App using the MERN stack, providing real-time weather updates and forecasts.</p>
          <p className="text-sm text-gray-600">Freelancing Project | Full Stack Web Developer | Weather App Project</p>
        </div>
        <div className="text-center">
          <a href="https://github.com/your-github-account" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View more projects on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
