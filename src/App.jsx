import Navbar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portofolio from "./components/Portifolios";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { DarkMode } from "./context/DarkMode";
import { useContext, useEffect } from "react";

function App() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  
  return (
    <div
      className={`flex flex-col  sm:flex sm:flex-col w-full overflow-hidden ${
        isDarkMode ? "bg-black" : "bg-slate-100"
      }`}
    >
      <main
        className={`flex flex-col  w-5/6 mx-auto drop-shadow ${
          isDarkMode
            ? "bg-zinc-900 text-white ring-1 ring-gray-800"
            : "bg-white text-black"
        }`}
      >
        <Navbar />
        <About id="about" />
        <Skills />
        <Portofolio />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
