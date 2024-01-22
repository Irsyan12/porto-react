const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-700"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};
export default Input;
