import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const Label = (props) => {
  const { htmlFor, children } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-bold mb-2 ${
        isDarkMode ? "text-slate-200" : "text-slate-900"
      }`}
    >
      {children}
    </label>
  );
};

export default Label;
