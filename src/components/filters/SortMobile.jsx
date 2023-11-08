import { HiOutlineFilter } from "react-icons/hi";
import { PiListMagnifyingGlassLight } from "react-icons/pi";
import { GiCrossMark } from "react-icons/gi";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import FilterOptions from "./FilterOptions";
const SortMobile = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openFilterMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:hidden col-span-12">
      <div className="col-span-12 h-16 flex justify-evenly items-center md:hidden px-4">
        <div className="bg-white  flex justify-center items-center p-2 w-1/2 rounded-md ml-5 cursor-pointer dark:bg-gray-700">
          <PiListMagnifyingGlassLight className="text-red-700 ml-2 dark:text-yellow-100 text-xl" />
          <span className="text-stone-600 text-xs dark:text-text-gray">محبوب ترین محصول</span>
        </div>
        <div
          onClick={openFilterMenu}
          className="bg-white flex justify-center items-center p-2 w-1/2 rounded-md  cursor-pointer dark:bg-gray-700"
        >
          <HiOutlineFilter className="text-red-700 ml-2 text-xl dark:text-yellow-100" />
          <span className="text-stone-600 text-xs dark:text-text-gray">فیلتر </span>
        </div>
      </div>
      <Menu
        right
        isOpen={isOpen}
        className="w-[70vw] bg-slate-200 dark:bg-main-gray fixed top-0 right-0"
      >
        <div className={`h-full bg-slate-200 dark:bg-main-gray`}>
          {/* ---------------------- header of the menu ------------------------------- */}
          <div className="w-full h-20 bg-gradient-to-r from-slate-500 flex items-center justify-end ">
            <GiCrossMark
              onClick={() => setIsOpen(!isOpen)}
              className=" text-[35px] text-white ml-6 cursor-pointer hover:text-red-300 transition-all duration-700"
            />
          </div>
          <div>
            {/* -------------------- items of the menu --------------------------------- */}
            <ul className="w-full  flex flex-col  px-4 ">
              <FilterOptions
                category={category}
                classes={
                  "flex mt-2 overflow-scroll scrollbar-hide flex-col gap-8"
                }
              />
            </ul>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default SortMobile;
