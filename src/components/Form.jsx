import InputForm from "./Elements/InputForm";

const Form = () => {
  return (
    <div id="contactme" className="md:w-5/6">
      <form className="flex flex-col items-center md:items-stretch px-3 py-5 rounded-lg mx-auto w-5/6 border shadow-sm shadow-zinc-200 mb-20 lg: lg:p-5">
        <InputForm label="Name" name="name" type="text" placeholder="" />
        <InputForm label="Email" name="email" type="email" placeholder="" />
        <InputForm label="Subject" name="subject" type="text" placeholder="" />
        <div className="mb-6 mx-auto w-5/6 ">
          <label
            htmlFor="message"
            className="block text-slate-900 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="text-sm resize-none border rounded w-full py-2 px-3 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-700"
          ></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end md:self-start mt-4 md:mt-0">
          Send
        </button>
      </form>
    </div>
  );
};
export default Form;
