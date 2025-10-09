import { RiCodeAiLine } from "react-icons/ri";

const Loading = () => {
  return (
    <div className="p-10 flex justify-center items-center h-[70vh]">
      <div className="text-center space-y-5">
        <span className="loading loading-bars loading-xl"></span>
        <h2 className="text-5xl flex items-center tracking-[.25em] font-bold text-gray-600">
          L<RiCodeAiLine className="mr-2 text-orange-600 text-5xl" />
          ADING
        </h2>
      </div>
    </div>
  );
};

export default Loading;
