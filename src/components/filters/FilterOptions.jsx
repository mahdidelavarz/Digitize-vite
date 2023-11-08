import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { filters } from "../../data";
import { BsCaretDownFill } from "react-icons/bs";

const FilterOptions = ({ category, classes }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const serializeFormQuery = () => {
    const allParams = {};
    for (const entry of searchParams.entries()) {
      const [key, value] = entry;
      allParams[key] = value;
    }
    return allParams;
  };
  const checkBoxHandler = (e, optionKey) => {
    const allParams = serializeFormQuery();
    if (e.target.checked) {
      setSearchParams({ ...allParams, [optionKey]: true });
    } else {
      const newParams = { ...allParams };
      delete newParams[optionKey];
      setSearchParams(newParams);
    }
  };
  const generateFiltersState = () => {
    const currentFilters = {};
    filters.phone.forEach((p) => {
      currentFilters[p.key] = false;
    });
    return currentFilters;
  };

  const [showFilters, setShowFilters] = useState(generateFiltersState);

  const toggleShowFilterOptionHandler = (key) => {
    setShowFilters({ ...showFilters, [key]: !showFilters[key] });
  };
  return (
    <div className={classes}>
      <span className="mt-8 text-lg text-rose-700 dark:text-yellow-400">فیلتر</span>
      {filters[category].map((option) => {
        return (
          <div
            key={option.key}
            className="flex w-full flex-col px-4 py-2 text-base cursor-pointer"
          >
            <span
              className="flex items-center justify-between lg:cursor-pointer fadeShow text-slate-700 dark:text-text-gray"
              onClick={() => toggleShowFilterOptionHandler(option.key)}
            >
              <div className="relative flex items-center">
                <span className="text-rose-600 text-lg ml-2 dark:text-yellow-400">
                  {option.icon}
                </span>
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-l from-slate-400 dark:from-yellow-400 rounded-full opacity-50"></div>
              </div>

              <p
                className={`flex w-full items-center justify-between lg:cursor-pointer fadeShow ${
                  showFilters[option.key]
                    ? "text-rose-700 dark:text-yellow-400"
                    : "text-slate-700 dark:text-text-gray"
                }`}
              >
                {option.title}
                <BsCaretDownFill
                  className={`${
                    showFilters[option.key] ? "rotate-180 text-rose-600 dark:text-yellow-400" : ""
                  } text-slate-400 transition-all duration-300`}
                />
              </p>
            </span>
            <span
              className={`flex flex-col items-center justify-start gap-1 ${
                showFilters[option.key]
                  ? "pt-4 opacity-100"
                  : "h-0 scale-0 opacity-0"
              }`}
            >
              {option.options.map((item) => {
                const checked = Object.keys(serializeFormQuery()).find(
                  (o) => o === item.key
                );
                return (
                  <label
                    className="flex w-full items-center justify-start gap-2 text-slate-600 dark:text-text-gray "
                    key={item.title}
                  >
                    <input
                      className="flex h-3 w-3 items-center justify-center rounded-2xl p-1 "
                      type="checkbox"
                      checked={checked ? true : false}
                      onChange={(e) => checkBoxHandler(e, item.key)}
                    />
                    {item.title}
                  </label>
                );
              })}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;
