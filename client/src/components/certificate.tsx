import React, { useState } from 'react';

const Certificate: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="certificates" className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Certificates</h2>
      <div className="container mx-auto px-3 flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Full Stack Web Development</h3>
            <p className="mb-4">Completed the Full Stack Web Development course on Coursera.</p>
            <p className="text-sm text-gray-600">Coursera | Full Stack Web Development | 2022</p>
            <a href="https://www.coursera.org/specializations/full-stack-web-development" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Python for Everybody</h3>
            <p className="mb-4">Completed the Python for Everybody course on Coursera.</p>
            <p className="text-sm text-gray-600">Coursera | Python for Everybody | 2021</p>
            <a href="https://www.coursera.org/specializations/python" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Web Development Bootcamp</h3>
            <p className="mb-4">Completed the Web Development Bootcamp on Udemy.</p>
            <p className="text-sm text-gray-600">Udemy | Web Development Bootcamp | 2020</p>
            <a href="https://www.udemy.com/course/web-development-bootcamp/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Machine Learning with Python</h3>
            <p className="mb-4">Completed the Machine Learning with Python course on Eduonix.</p>
            <p className="text-sm text-gray-600">Eduonix | Machine Learning with Python | 2020</p>
            <a href="https://www.eduonix.com/machine-learning-with-python" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Data Science with Python</h3>
            <p className="mb-4">Completed the Data Science with Python course on Coursera.</p>
            <p className="text-sm text-gray-600">Coursera | Data Science with Python | 2022</p>
            <a href="https://www.coursera.org/specializations/data-science-python" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">ReactJS Development</h3>
            <p className="mb-4">Completed the ReactJS Development course on Udemy.</p>
            <p className="text-sm text-gray-600">Udemy | ReactJS Development | 2021</p>
            <a href="https://www.udemy.com/course/reactjs-development/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">NodeJS Development</h3>
            <p className="mb-4">Completed the NodeJS Development course on Eduonix.</p>
            <p className="text-sm text-gray-600">Eduonix | NodeJS Development | 2020</p>
            <a href="https://www.eduonix.com/nodejs-development" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Angular Development</h3>
            <p className="mb-4">Completed the Angular Development course on Coursera.</p>
            <p className="text-sm text-gray-600">Coursera | Angular Development | 2022</p>
            <a href="https://www.coursera.org/specializations/angular-development" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">VueJS Development</h3>
            <p className="mb-4">Completed the VueJS Development course on Udemy.</p>
            <p className="text-sm text-gray-600">Udemy | VueJS Development | 2021</p>
            <a href="https://www.udemy.com/course/vuejs-development/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">JavaScript Development</h3>
            <p className="mb-4">Completed the JavaScript Development course on Eduonix.</p>
            <p className="text-sm text-gray-600">Eduonix | JavaScript Development | 2020</p>
            <a href="https://www.eduonix.com/javascript-development" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">HTML/CSS Development</h3>
            <p className="mb-4">Completed the HTML/CSS Development course on Coursera.</p>
            <p className="text-sm text-gray-600">Coursera | HTML/CSS Development | 2022</p>
            <a href="https://www.coursera.org/specializations/html-css-development" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Bootstrap Development</h3>
            <p className="mb-4">Completed the Bootstrap Development course on Udemy.</p>
            <p className="text-sm text-gray-600">Udemy | Bootstrap Development | 2021</p>
            <a href="https://www.udemy.com/course/bootstrap-development/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Figma Design</h3>
            <p className="mb-4">Completed the Figma Design course on Eduonix.</p>
            <p className="text-sm text-gray-600">Eduonix | Figma Design | 2020</p>
            <a href="https://www.eduonix.com/figma-design" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
          <div className="certificate mb-10 p-4 max-w-sm rounded-lg shadow-md bg-white flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
            <p className="mb-4">Completed the UI/UX Design course on Coursera.</p>
            <p className="text-sm text-gray-600">Coursera | UI/UX Design | 2022</p>
            <a href="https://www.coursera.org/specializations/ui-ux-design" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;

