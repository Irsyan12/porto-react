import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-4 w-5/6 mx-auto">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
      ></Input>
    </div>
  );
};

export default InputForm;
