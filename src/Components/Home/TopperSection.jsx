import {
  MdArrowDropDown,
  MdArrowRight,
  MdErrorOutline,
  MdOutlineVerified,
} from "react-icons/md";

const TopperSection = () => {
  return (
    <div className="my-10 px-6">
      <h1 className="text-3xl md:text-5xl text-[#2C384A]">
        Best Website builders in the US
      </h1>
      <div className="border-y py-3 my-4 flex justify-between text-[#4B5665] border-gray-400">
        <div className="flex md:gap-6">
          <div className="flex items-center gap-2">
            <MdOutlineVerified className="text-[#4B5665]"></MdOutlineVerified>{" "}
            <h3 className="text-sm md:text-base">Last Update - February 22, 2020</h3>
          </div>
          <div className="flex items-center gap-2">
            <MdErrorOutline></MdErrorOutline> <h3>Advertising Disclosure</h3>
          </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <h1>Top Relevant</h1>
          <MdArrowDropDown className="md:text-3xl text-gray-500"></MdArrowDropDown>
        </div>
      </div>
      <div className="text-sm md:flex gap-4 my-4 md:justify-between px-2 md:px-5">
        <button className="bg-white rounded-xl px-4 py-3">Tools</button>
        <button className="bg-white rounded-xl px-4 py-3">AWS Builder</button>
        <button className="bg-white rounded-xl px-4 py-3">Star Build</button>
        <button className="bg-white rounded-xl px-4 py-3">Build Supplies</button>
        <button className="bg-white rounded-xl px-4 py-3">Tooling</button>
        <button className="bg-white rounded-xl px-4 py-3">BlueHosting</button>
      </div>
      <div className="md:flex md:gap-4">
        <div className="flex gap-3">
        <h3>Hosting 1</h3>
       <MdArrowRight className="text-2xl text-gray-500"></MdArrowRight>
        </div>
        <div className="flex gap-3">
        <h3>Hosting 2</h3>
       <MdArrowRight className="text-2xl text-gray-500"></MdArrowRight>
        </div>
        <div className="flex gap-3">
        <h3>Hosting 3</h3>
       <MdArrowRight className="text-2xl text-gray-500"></MdArrowRight>
        </div>
        <div className="flex gap-3">
        <h3>Hosting 4</h3>
       <MdArrowRight className="text-2xl text-gray-500"></MdArrowRight>
        </div>
        <div className="flex gap-3">
        <h3>Hosting 4</h3>
        </div>
       
      </div>
    </div>
  );
};

export default TopperSection;
