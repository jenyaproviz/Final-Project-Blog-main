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
            My name is Jenya Proviz, and I am a Full Stack Web Developer with a
            strong frontend orientation. I combine over 20 years of experience
            in industrial engineering and production management with modern web
            development skills. My journey into tech began from a deep desire to
            build tools that are not only functional but also user-friendly and
            impactful.
          </p>
          <p className="text-gray-400 mb-4">
            I graduated with a B.Sc. in Industrial Engineering and Management
            from the Holon Institute of Technology. Prior to that, I earned my
            Practical Engineer diploma in Industrial Management from the College
            of Management Academic Studies. For two decades, I led complex
            production and procurement processes, developing a strong foundation
            in planning, coordination, and efficiency. <br /> <br />
            In 2022, I made a deliberate transition into the tech industry. I
            enrolled in the Full Stack Web Development program at HackerU, where
            I completed over 540 academic hours of intensive, hands-on training.
            The curriculum equipped me with a wide range of skills, including
            HTML, CSS, JavaScript, TypeScript, React, Redux, Node.js, MongoDB,
            REST APIs, and SQL.
          </p>
          <p className="text-gray-400 mb-4">
            I thrive on solving problems and building scalable, responsive user
            interfaces. As a Junior Frontend Developer in a startup environment,
            I contributed to internal financial systems using React and
            TypeScript. I worked with the team to create reusable UI components
            and implement responsive templates using HTML and CSS. <br />
            <br />
            I also built and managed dynamic email templates using SendGrid,
            ensuring that content rendered well across devices and email
            clients. One of my key achievements was migrating the frontend state
            management architecture from React Context to Redux, improving
            scalability and maintainability.
            <br />
            <br />
            My work is always guided by best practices in performance
            optimization, accessibility, and cross-browser compatibility. I
            enjoy debugging, testing, and polishing user-facing features to
            enhance the overall user experience. Collaboration is at the core of
            my work ethic—I value working with backend developers, QA engineers,
            and designers in Agile environments using tools like Jira, Figma,
            and GitHub.
          </p>
          <p className="text-gray-400 mb-4">
            This rich background in systems thinking and operational
            optimization informs how I approach software development today. I
            build with a keen understanding of how tools are used in the real
            world—both in the front office and on the factory floor. <br />
            <br />
            In my full-stack projects, I use React and TypeScript on the
            frontend, and Node.js with Express on the backend. I'm comfortable
            working with MongoDB and SQL databases, and I know how to design
            RESTful APIs. My favorite CSS frameworks include Tailwind CSS and
            Bootstrap, and I also enjoy working with SASS for modular styling.{" "}
            <br />
            <br />
            One of my proudest achievements during my studies was building a
            full blog application as my final project. This project involved a
            full-stack architecture using React, Node.js, and MongoDB, with
            real-world functionality like user authentication, post management,
            and comment systems. <br />
            <br />I love learning and staying up to date with new technologies.
            I regularly explore new tools, frameworks, and best practices to
            stay sharp and deliver modern, robust solutions. I also contribute
            to open-source projects and maintain my own repositories on GitHub.{" "}
            <br />
            <br />
            Creativity is essential to my process—I enjoy UI/UX design and
            strive to make user experiences intuitive and beautiful. I'm always
            experimenting with different layouts, animations, and interactions
            that enhance engagement without overwhelming the user. <br />
            <br />
            Beyond development, I bring soft skills honed through years of
            professional leadership. I'm organized, dependable, and take
            ownership of my work. I know how to meet deadlines, communicate
            across teams, and balance competing priorities.
            <br />
            <br />
            My military service as an electronics technician also laid the
            groundwork for my technical curiosity. I've always enjoyed
            understanding how things work—from communication devices to complex
            web applications. <br />
            <br />
            Currently, I'm seeking new challenges that allow me to grow further
            as a frontend or full stack developer. I am especially interested in
            projects that make a meaningful difference in people's lives—whether
            through better user experiences, smarter automation, or more
            efficient systems. <br />
            <br />
            When I'm not coding, I enjoy exploring new technologies, improving
            my design skills, and mentoring peers who are just starting their
            tech journey. I also maintain an active presence in developer
            communities and enjoy learning from others. <br />
            <br />
            Languages are another important part of my life. I am fluent in
            Russian and Hebrew and have a good command of English, which allows
            me to work effectively in multicultural and international teams.{" "}
            <br />
            <br />
            In the long term, I aim to become a Senior Frontend Engineer and
            possibly branch into product design or technical leadership. I'm
            passionate about bridging the gap between user needs and technical
            execution. <br />
            <br />
            Every project I take on is an opportunity to learn, grow, and
            contribute. I bring an engineer's mindset, a designer's sensitivity,
            and a leader's determination to every line of code I write. <br />
            <br />
            If you're looking for a developer who combines experience,
            discipline, and creativity, I'd be happy to connect. Let's build
            something great together.
          </p>
          <button
            className="bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded"
            onClick={downloadCV}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
