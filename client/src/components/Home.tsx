import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <section id="home" className="bg-white py-16">
      <div className="intro text-center mb-12">
        <img src="your-photo.jpg" alt="Babar Ali" className="w-32 h-32 rounded-full mx-auto mb-6" />
        <h1 className="text-5xl font-extrabold mb-4">Babar Ali</h1>
        <p className="text-2xl text-gray-700">Software Engineer | MERN Stack Developer</p>
      </div>

      <header className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <p className="text-xl text-gray-800 mb-8 text-center">
            A dedicated Software Engineer specializing in MERN Full Stack Web Development.
         
          </p>
          <ul className="contact-icons flex justify-center space-x-8">
            <li>
              <a href="mailto:bainfo14@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> WhatsApp
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/14babarali/" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/14babarali" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </header>
      
      <div className="text-center mt-12">
        <a href="your-cv.pdf" className="btn bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300">Download CV</a>
      </div>
    </section>
  );
}

export default Home;
