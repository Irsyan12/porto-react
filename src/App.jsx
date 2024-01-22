import Navbar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portofolio from "./components/Portifolios";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="flex flex-col bg-slate-100 sm:flex sm:flex-col w-full overflow-hidden">
      <main className="flex flex-col bg-white w-5/6 mx-auto drop-shadow">
        <Navbar />
        <About id="about" />
        <Skills />
        <Portofolio />
        <ContactMe/>
      </main>
    </div>
  );
}

export default App;
