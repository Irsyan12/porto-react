import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <>
      <div className="mx-auto mt-14 w-3/4 flex flex-col bg-white sm:mt-15">
        <img
          src="pp.jpg"
          alt="Profile Picture"
          className="w-32 mx-auto rounded-full sm:w-16 sm:mx-0 md:mx-0 lg:mx-0 lg:mt-5 shadow-lg"
          draggable="false"
        />
        <div className="mt-4 ">
          <h3 className="text-center sm:text-left lg:text-xl sm:text-lg text-zinc-700 font-semibold">
            Irsyan Ramadhan
          </h3>
          <h1
            id="developer-title"
            className="text-center text-xl sm:text-left sm:text-2xl md:text-4xl lg:text-5xl  mt-2 font-bold text-zinc-800"
            style={{ userSelect: "none" }}
          >
            Web & Mobile Developer
          </h1>
        </div>
        <p
          className="text-center sm:text-left md:w-3/4 lg:w-3/5 mt-4 text-zinc-600 font-normal text-md"
          draggable="false"
          style={{ userSelect: "none" }}
          onCopy={(e) => e.preventDefault()}
        >
          I am a Computer Engineering student at Syiah Kuala University with a
          passion for Machine Learning, deep learning, Web Development, and
          mobile development. I have earned certificates from Coursera and
          Dicoding Indonesia, and completed several application projects. I
          enjoy learning and sharing knowledge.
        </p>
        <div className="text-center mt-10 text-zinc-600 font-normal text-xl space-x-4 sm:text-left">
          <a href="https://www.instagram.com/irsan.rmd_/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className="hover:text-slate-800 transition duration-300 ease-in-out text-zinc-500"
            />
          </a>

          <a href="https://github.com/Irsyan12">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className="hover:text-slate-800 transition duration-300 ease-in-out text-zinc-500"
            />
          </a>

          <a href="https://www.linkedin.com/in/irsyanramadhan/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="hover:text-slate-800 transition duration-300 ease-in-out text-zinc-500"
            />
          </a>

          <a href="mailto:irsyanramadhan72@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="hover:text-slate-800 transition duration-300 ease-in-out text-zinc-500"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
