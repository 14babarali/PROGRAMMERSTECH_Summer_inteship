import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="about-content max-w-4xl mx-auto px-4">
        <p className="mb-4 text-lg leading-relaxed">
          I am Babar Ali, a dedicated Software Engineer specializing in MERN Full Stack Web Development. With a Bachelor's degree in Software Engineering from Riphah International University, I have honed my skills in both frontend and backend technologies, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          My journey into programming began during my studies, where I developed a passion for creating innovative solutions that enhance user experiences. As a Full Stack Web Developer, I have successfully delivered several projects, including dynamic eCommerce platforms, interactive job portals, and real-time weather applications. These experiences have strengthened my ability to architect scalable applications and collaborate effectively within multidisciplinary teams.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Beyond technical proficiency, I possess strong problem-solving skills, attention to detail, and a proactive approach to learning new technologies. I am committed to continuous improvement and thrive in dynamic environments where I can contribute my expertise and drive impactful solutions.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Currently based in Islamabad, I am actively seeking opportunities to further develop my skills and contribute to innovative projects that align with my professional goals. I am passionate about leveraging technology to solve real-world challenges and eager to join a team where I can make a meaningful impact.
        </p>
      </div>
    </section>
  );
};

export default About;
