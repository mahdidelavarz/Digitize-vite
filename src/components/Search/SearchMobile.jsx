import * as data from "../../data";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { GiCrossMark } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
const SearchMobile = () => {
  const input = useRef();
  const [searchWindow, setSearchWindow] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState();
  const [value, setValue] = useState("");
  const handleSearchWindow = (e) => {
    const filteredItems = data.products.filter((item) =>
      item.name.includes(e.target.value)
    );
    setValue(e.target.value);
    setFilteredProducts(filteredItems);
  };
  const handleSearch = () => {
    setSearchWindow(true);
  };
  return (
    <div>
      {searchWindow ? (
        <div>
          <div className="w-[100vw] h-20 bg-slate-300 dark:bg-main-gray absolute top-0 right-0 z-[80] flex justify-center items-center px-8">
            <input
              type="text"
              ref={input}
              onChange={handleSearchWindow}
              className="w-[65vw] pr-12 pl-6 py-2 outline-none rounded-lg bg-slate-100 dark:bg-gray-700 dark:text-text-gray "
            />
            <GiCrossMark
              className="text-3xl mr-6 dark:text-slate-300 cursor-pointer"
              onClick={() => setSearchWindow(false)}
            />
            <BiSearchAlt className="absolute right-12 text-2xl text-slate-400 dark:text-slate-200" />
          </div>
          <div className="w-[100vw] h-screen bg-slate-200 dark:bg-gray-700  absolute top-[5.5rem] right-0 z-[80] fadeShow flex py-6 ">
            {filteredProducts || filteredProducts ? (
              <div className="bg-white dark:bg-main-gray w-full h-full rounded-lg absolute top-0 z-[70] fadeShow p-6 dark:text-text-gray">
                <div>جست و جو برای {value ? value : '...'}</div>
                {value ? (
                  <div className=" w-full h-full overflow-y-scroll flex flex-col gap-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 dark:scrollbar-track-gray-600">
                    {filteredProducts.map((item) => {
                      return (
                        <NavLink to={item.to}>
                          <div className="w-full h-auto border-b border-solid flex justify-between py-4">
                            <div className="w-32 ">
                              <img src={item.image} alt={item.category} />
                            </div>
                            <div className="w-2/3 flex items-center justify-center">
                              <p>{item.name}</p>
                            </div>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                ) : (
                  <div className="w-full h-full flex justify-center items-center">
                    موردی برای نمایش وجود ندارد
                  </div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : (
        <BiSearchAlt
          onClick={handleSearch}
          className="bg-white dark:bg-slate-700 w-9 h-9 lg:h-11 lg:w-11 text-stone-500 dark:text-text-gray rounded-md p-1 cursor-pointer outline-none"
        />
      )}
    </div>
  );
};

export default SearchMobile;
