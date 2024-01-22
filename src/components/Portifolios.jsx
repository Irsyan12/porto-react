import portofolios from "../assets/portofolios";
import CardPortofolio from "./Fragments/CardPortofolio";

const Portofolio = () => {
  return (
    <div className="mt-5 w-full" id="certification">
      <h1 className="text-2xl my-5 font-bold text-zinc-600 justify-center mt-10 text-center">
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
