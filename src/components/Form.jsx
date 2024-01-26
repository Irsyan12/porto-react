import InputForm from "./Elements/InputForm";

const Form = () => {
  return (
    <div  className="w-full md:w-5/6 lg:w-4/6 mx-auto">
      <form className="flex flex-col items-center md:items-stretch px-4 py-6 md:py-8 rounded-lg mx-auto border shadow-sm shadow-zinc-200 mb-8 lg:w-full lg:p-8">
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
            rows="7"
            className="text-sm resize-none border rounded w-full py-2 px-3 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-700"
          ></textarea>
        </div>
        <button className="rounded-2xl self-end inline-flex items-center justify-center px-8 py-3 m-2 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-20 group-hover:h-20 opacity-5"></span>
          <span className="relative">Send</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
