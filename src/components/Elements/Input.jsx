import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const Input = (props) => {
  const { type, placeholder, name } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <input
      type={type}
      className={`text-sm border rounded w-full bg-transparent py-2 px-3  ${
        isDarkMode
          ? "text-slate-200"
          : "focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-700"
      }`}
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};
export default Input;
