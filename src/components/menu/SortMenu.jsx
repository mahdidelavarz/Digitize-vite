import { HiSortDescending } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { products } from "../../data";
import { Link } from "react-router-dom";

const SortMenu = ({ category }) => {
  const items = products.filter((item) => item.category === category);
  const handleFilter = (value) => {
    if (value === "popular") {
      const filteredItems = items.filter((i) => i.score > 4);
      console.log(filteredItems);
    }
  };
  return (
    <div className="hidden md:flex bg-white dark:bg-slate-700 col-span-9 rounded-md justify-center items-center p-4 h-16">
      <HiSortDescending className="text-xl lg:text-3xl bg-red-500 dark:bg-slate-300 text-slate-50 dark:text-slate-600 p-1 rounded-sm ml-4" />
      <ul className="w-full flex gap-10  ">
        <li
          onClick={() => handleFilter("popular")}
          className="text-slate-400 hover:text-slate-700 dark:text-text-gray dark:hover:text-gray-50 transition-all duration-300 text-bold text-xs lg:text-base cursor-pointer"
        >
          محبوب ترین محصول
        </li>
        <li
          onClick={() => handleFilter("exp")}
          className="text-slate-400 hover:text-slate-700 dark:text-text-gray dark:hover:text-gray-50 transition-all duration-300 text-xs lg:text-base cursor-pointer"
        >
          گران ترین محصول
        </li>
        <li
          onClick={() => handleFilter("cheep")}
          className="text-slate-400 hover:text-slate-700 dark:text-text-gray dark:hover:text-gray-50 transition-all duration-300 text-xs lg:text-base cursor-pointer"
        >
          ارزان ترین محصول
        </li>
        <li
          onClick={() => handleFilter("view")}
          className="text-slate-400 hover:text-slate-700 dark:text-text-gray dark:hover:text-gray-50 transition-all duration-300 text-xs lg:text-base cursor-pointer"
        >
          پربازدید ترین محصول
        </li>
      </ul>
      <Link to="/Aupport">
        <BiSupport className="text-3xl ml-10 text-slate-500" />
      </Link>
    </div>
  );
};
export default SortMenu;
