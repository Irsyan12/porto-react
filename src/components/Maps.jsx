import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { DarkMode } from "../context/DarkMode";
import { useContext } from "react";

const Maps = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className="px-4 py-6 rounded-lg mx-auto w-full md:w-5/12 lg:w-4/12 border shadow-sm shadow-zinc-200 mb-8 lg:p-8">
      <ul className="flex flex-col space-y-4">
        <li className="flex flex-row">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className="mr-2 bg-sky-200 text-sky-600 hover:bg-sky-400 hover:text-white transition duration-300 px-3 py-3 border rounded-full"
          />
          <div className="flex flex-col">
            <h6 className="text-lg font-semibold">Email</h6>
            <p className="text-sm">irsyanramadhan72@gmail.com</p>
          </div>
        </li>
        <li className="flex flex-row">
          <FontAwesomeIcon
            icon={faMap}
            size="lg"
            className="mr-2 bg-sky-200 text-sky-600 hover:bg-sky-400 hover:text-white transition duration-300 px-3 py-3 border rounded-full"
          />
          <div className="flex flex-col">
            <h6 className="text-lg font-semibold">Location</h6>
            <p className="text-sm">
              Jl. Tandi, Ateuk Munjeng Kec. Baiturrahman, Kota Banda Aceh, Aceh
              23116
            </p>
          </div>
        </li>
        <li>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1985.5885199788738!2d95.31919843425443!3d5.540745183275563!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzInMjYuNSJOIDk1wrAxOScxMS43IkU!5e0!3m2!1sid!2sid!4v1705724037828!5m2!1sid!2sid"
            height="350"
            className="border-0 w-full rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </li>
      </ul>
    </div>
  );
};

export default Maps;
