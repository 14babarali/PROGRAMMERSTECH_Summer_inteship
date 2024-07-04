// 


import React from 'react';
import Certificate from './certificate';

const Education: React.FC = () => {
  return (
 <>
    <section id="education" className="bg-white py-10">
      <div className="container mx-auto px-3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
        <div className="education mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Bachelor of Software Engineering</h3>
          <p className="text-gray-600">Riphah International University | Sep 2019 - June 2023</p>
          <p className="text-gray-600">Specialization in Full Stack Web Development</p>
        </div>
        <div className="education">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Intermediate of Computer Science (ICS)</h3>
          <p className="text-gray-600">Pepperdine for Advanced Studies Skardu | Aug 2017 - Aug 2019</p>
        </div>
      </div>
    </section>

    <Certificate/>
 </>


  );
};

export default Education;
