import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faToolbox, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faAngular, faVuejs, faPython, faJs, faPhp, faCss3Alt, faHtml5, faBootstrap, faFigma } from '@fortawesome/free-brands-svg-icons';

const Skills: React.FC = () => {
  return (
    <>
      <section id="skills" className="bg-gray-100 py-20">
        <div className="container mx-auto px-3">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Skills</h2>
          <div className="skill-category grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="category p-5 shadow-md rounded-lg bg-white">
              <FontAwesomeIcon icon={faCode} className="text-4xl text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Programming Languages</h3>
              <ul className="list-disc pl-5">
                <li className="text-gray-600"><FontAwesomeIcon icon={faPython} className="mr-2" /> Python</li>
                <li className="text-gray-600"><FontAwesomeIcon icon={faJs} className="mr-2" /> JavaScript</li>
                <li className="text-gray-600">TypeScript</li>
                <li className="text-gray-600"><FontAwesomeIcon icon={faPhp} className="mr-2" /> PHP</li>
                <li className="text-gray-600">C++</li>
              </ul>
            </div>

            <div className="category p-5 shadow-md rounded-lg bg-white">
              <FontAwesomeIcon icon={faToolbox} className="text-4xl text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Web Technologies</h3>
              <ul className="list-disc pl-5">
                <li className="text-gray-600">MERN Stack</li>
                <li className="text-gray-600">RESTful APIs</li>
                <li className="text-gray-600">MEAN Stack</li>
              </ul>
            </div>

            <div className="category p-5 shadow-md rounded-lg bg-white">
              <FontAwesomeIcon icon={faFileCode} className="text-4xl text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Frameworks</h3>
              <ul className="list-disc pl-5">
                <li className="text-gray-600"><FontAwesomeIcon icon={faReact} className="mr-2" /> React.js</li>
                <li className="text-gray-600"><FontAwesomeIcon icon={faNodeJs} className="mr-2" /> Node.js</li>
                <li className="text-gray-600">Express.js</li>
                <li className="text-gray-600">Next.js</li>
                <li className="text-gray-600"><FontAwesomeIcon icon={faAngular} className="mr-2" /> Angular</li>
                <li className="text-gray-600">Django</li>
                <li className="text-gray-600"><FontAwesomeIcon icon={faVuejs} className="mr-2" /> Vue.js</li>
              </ul>
            </div>
            <div className="category p-5 shadow-md rounded-lg bg-white">
              <FontAwesomeIcon icon={faDatabase} className="text-4xl text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Databases</h3>
              <ul className="list-disc pl-5">
                <li className="text-gray-600">MongoDB</li>
                <li className="text-gray-600">SQL</li>
                <li className="text-gray-600">PostgreSQL</li>
              </ul>
            </div>
            <div className="category p-5 shadow-md rounded-lg bg-white">
              <FontAwesomeIcon icon={faToolbox} className="text-4xl text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Tools</h3>
              <ul className="list-disc pl-5">
                <li className="text-gray-600">VS Code</li>
                <li className="text-gray-600">Cursor</li>
                <li className="text-gray-600">Git</li>
                <li className="text-gray-600">Github</li>
                <li className="text-gray-600">NPM</li>
                <li className="text-gray-600"><FontAwesomeIcon icon={faHtml5} className="mr-2" /> HTML</li>
                <li className="text-gray-600"><FontAwesomeIcon icon={faCss3Alt} className="mr-2" /> CSS</li>
                <li className="text-gray-600"><FontAwesomeIcon icon={faBootstrap} className="mr-2" /> Bootstrap</li>
                <li className="text-gray-600"><FontAwesomeIcon icon={faFigma} className="mr-2" /> Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
