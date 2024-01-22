import Form from "./Form";
import Maps from "./Maps";

const ContactMe = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl my-5 font-bold text-zinc-600 justify-center mt-10 text-center">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row w-5/6 mx-auto">
        <Maps />
        <Form />
      </div>
    </div>
  );
};

export default ContactMe;
