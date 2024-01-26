import { useContext } from "react";
import { DarkMode } from "../context/DarkMode";
import Form from "./Form";
import Maps from "./Maps";

const ContactMe = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className="flex flex-col" id="contactme">
      <h1 className={`text-2xl my-5 font-bold justify-center mt-10 text-center ${isDarkMode ? "text-zinc-300" : "text-zinc-600 "}`}>
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row w-5/6 mx-auto justify-center md:space-x-10">
        <Maps />
        <Form />
      </div>
    </div>
  );
};

export default ContactMe;
