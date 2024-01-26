import { useContext } from "react";
import portofolios from "../assets/portofolios";
import { DarkMode } from "../context/DarkMode";
import CardPortofolio from "./Fragments/CardPortofolio";

const Portofolio = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className="mt-5 w-full" id="certification">
      <h1
        className={`text-2xl my-5 font-bold justify-center mt-10 text-center ${
          isDarkMode ? "text-zinc-300" : "text-zinc-600 "
        }`}
      >
        Certification
      </h1>
      <div className="flex flex-col w-4/6 hover:cursor-pointer mx-auto justify-center items-center sm:flex-row sm:flex-wrap md:w-full ">
        {portofolios.map((portofolio) => (
          <CardPortofolio
            key={portofolio.id}
            image={portofolio.image}
            id={`porto${portofolio.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
