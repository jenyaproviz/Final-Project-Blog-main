import React from "react";
import FileSaver from "file-saver";
import LogoImage from "../utils/LOGO.jpg";

const downloadCV = () => {
  const cvFilePath = `${process.env.PUBLIC_URL}/Jenya Proviz FS.pdf`;
  FileSaver.saveAs(cvFilePath, "My_CV.pdf");
  console.log("Downloading CV...");
};

const AboutMePage = () => {
  return (
    <div className="max-w-[900px] mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-9">
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            className="rounded-2xl w-32 md:w-40 h-auto shadow-lg"
            src={LogoImage}
            alt="portfolio"
          />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-2xl text-gray-300 font-bold mb-4">About Me</h2>
          <p className="text-gray-400 mb-4">
I'm Jenya Proviz, a Full Stack Web Developer with a frontend focus, combining hands-on experience in modern web technologies with a solid background in industrial engineering and management.
          </p>
          <p className="text-gray-400 mb-4">
           I bring over a year of experience as a Junior Frontend Developer, where I contributed to financial software tools using React, TypeScript, Redux, and REST APIs. My work included building reusable UI components, implementing responsive templates, and optimizing performance for better user experience.
          </p>
          <p className="text-gray-400 mb-4">
            Before transitioning into tech, I spent 20+ years in production planning and procurement, leading complex workflows and process improvements in industrial environments. This experience sharpened my skills in problem-solving, systems thinking, and teamwork—qualities I now apply to software development. <br />
            <br />
           My technical toolkit includes React, Redux, TypeScript, JavaScript, Node.js, Express, MongoDB, SQL, Tailwind, and Bootstrap, alongside practical experience with tools like Jira, Figma, GitHub, and SendGrid.
            <br />
            <br />
            I'm passionate about building scalable, user-friendly solutions and continuously learning new technologies. Fluent in Hebrew and Russian, with strong English proficiency, I thrive in collaborative, multicultural teams.
          </p>
          <p className="text-gray-400 mb-4">
            Currently, I'm seeking opportunities as a Frontend or Full Stack Developer where I can grow, contribute, and create impactful solutions. <br />
            <br />
            <button
              className="bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded"
              onClick={downloadCV}
            >
              Download CV
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
