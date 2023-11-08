import createEmptyArray from "../../Utils/CreateEmptyArray";

export const HomeSkeleton = () => {
  return (
    <div className="w-full h-auto bg-white col-span-12 md:col-span-9 md:p-4 animate-pulse fadeShow dark:bg-main-gray">
      <div className="w-full h-20 bg-slate-300 rounded-lg hidden md:flex dark:bg-gray-700"></div>
      <div className="w-full h-60 bg-slate-300 rounded-lg md:mt-8 dark:bg-gray-700"></div>
      <div className="w-full h-96 md:h-72 bg-white grid grid-cols-12 justify-evenly  mt-5 md:mt-0 dark:bg-main-gray">
        {createEmptyArray(4).map((i) => {
          return (
            <div className="col-span-6 md:col-span-3 flex justify-center items-center">
              <div className="w-36 h-36 rounded-full bg-slate-300 relative dark:bg-gray-700 dark:ring dark:ring-white">
                <div className="w-20 h-20 absolute -top-3 -right-3 bg-slate-300 ring ring-white rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full h-60 bg-slate-300 rounded-lg mt-8 dark:bg-gray-700"></div>
    </div>
  );
};

export const ProductSkeleton = () => {
  return (
    <div className="h-[26rem] pb-4 bg-slate-200 rounded-xl mt-4 shadow-lg flex flex-col p-3 gap-4 animate-pulse fadeShow dark:bg-main-gray dark:shadow-md dark:shadow-gray-900">
      <div className="w-full h-44 bg-slate-300 dark:bg-gray-700 rounded-lg"></div>
      <div className="w-1/2 py-3 bg-slate-300 dark:bg-gray-700 rounded-lg"></div>
      <div className="w-full h-20 bg-slate-300 dark:bg-gray-700 rounded-lg"></div>
      <div className="w-full flex justify-between">
        <div className="w-32 py-2 bg-slate-300 dark:bg-gray-700 rounded-lg"></div>
        <div className="w-10 py-2 bg-slate-300 dark:bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  );
};

export const InterestSkeleton = () => {
  return (
    <div className="col-span-12 gap-4 h-[auto] bg-slate-100 p-5 grid grid-cols-12  relative md:gap-y-2  animate-pulse fadeShow dark:bg-gray-700">
      <div className="col-span-12 h-44 md:h-auto md:col-span-4 p-2 bg-slate-300 dark:bg-gray-600 flex items-center rounded-tr-lg rounded-br-lg justify-center rounded-md "></div>
      <div className="col-span-12 md:col-span-8 px-6 py-6 rounded-md flex flex-col md:pl-32 gap-4">
        <div className="w-full h-10 bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
        <div className="w-40 h-6 bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
        <div className="w-48 h-6 bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
        <div className="w-56 h-6 bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
        <div className="w-52 flex justify-between">
          {createEmptyArray(4).map((i) => (
            <div className="w-8 h-8 bg-slate-300 dark:bg-gray-600 rounded-full mt-2"></div>
          ))}
        </div>
        <div className="w-full h-10 flex justify-between items-center">
          <div className="md:w-36 w-20 h-10 bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
          <div className="md:w-72 w-60 h-10 bg-slate-300 rounded-lg dark:bg-gray-600 "></div>
        </div>
      </div>
    </div>
  );
};

export const CartLoading = () => {
  return (
    <div className="col-span-12 gap-4  p-5 grid grid-cols-12  relative md:gap-y-2 bg-slate-50 animate-pulse fadeShow dark:bg-main-gray">
      <div className="col-span-4 h-32 md:h-52 p-2 bg-slate-300 flex items-center rounded-tr-lg rounded-br-lg justify-center rounded-md dark:bg-gray-700"></div>
      <div className="col-span-8 px-6 bg-slate-200 py-6 rounded-md flex flex-col md:pl-10 md:gap-4 dark:bg-gray-800 dark:shadow-lg">
        <div className="w-full h-5 bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
        <div className="w-1/2 h-5 bg-slate-300 dark:bg-gray-600 rounded-lg mt-1"></div>
        <div className="md:w-40 w-32 h-6 rounded-lg mt-4 flex justify-between">
          <div className="w-5 h-5 rounded-full bg-slate-300 dark:bg-gray-500"></div>
          <div className="w-24 h-full bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
        </div>

        <div className="md:w-40 w-40 h-6 rounded-lg mt-2 flex justify-between">
          <div className="w-5 h-5 rounded-sm bg-slate-300 dark:bg-gray-500"></div>
          <div className="w-32 h-full bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
        </div>
        <div className="w-40  h-6 rounded-lg mt-2 flex justify-between mr-6">
          <div className="w-5 h-5 rounded-sm bg-slate-300 dark:bg-gray-500"></div>
          <div className="w-32 h-full bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
        </div>
        <div className="md:w-40 w-32 h-6 rounded-lg mt-2 flex justify-between mr-6">
          <div className="w-5 h-5 rounded-sm bg-slate-300 dark:bg-gray-500"></div>
          <div className="w-24 h-full bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
        </div>
        <div className="w-20 h-10  absolute -bottom-10 right-10 rounded-lg border border-slate-300 dark:border-gray-500 md:hidden"></div>
        <div className="w-40 h-10 rounded-lg absolute -bottom-10 left-8  bg-slate-300 dark:bg-gray-600 md:hidden"></div>
      </div>
      <div className="col-span-4 h-10 md:flex justify-between items-center gap-4 hidden">
        <div className="w-36 h-10 bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
        <div className="w-72 h-10 bg-slate-300 dark:bg-gray-600 rounded-lg"></div>
      </div>
    </div>
  );
};

export const SingleProductLoading = () => {
  return (
    <div className="col-span-12  h-auto md:h-[80vh]  relative grid grid-cols-12 md:grid-rows-12 bg-slate-100 dark:bg-main-gray md:py-2 md:px-6 rounded-lg items-center z-20 fadeShow">
      <div className="h-full col-span-12 md:col-span-7 lg:col-span-4 relative flex items-center flex-col justify-evenly z-30 ">
        <div className="flex justify-end absolute right-5 top-4 p-4 flex-col bg-slate-300 dark:bg-gray-700 h-48 rounded-lg"></div>
        <div className="w-60 h-72 bg-slate-300 dark:bg-gray-700 absolute top-4 right-20 rounded-lg"></div>
        <div className="lg:flex mt-72 gap-4 mr-24 hidden">
          <div className="w-24 h-28 bg-slate-300 dark:bg-gray-700 ring ring-slate-300 dark:ring-gray-600 dark:border-main-gray border-4 border-slate-100 rounded-lg"></div>
          <div className="w-24 h-28 bg-slate-300 dark:bg-gray-700 ring ring-slate-300 dark:ring-gray-600 dark:border-main-gray border-4 border-slate-100  rounded-lg"></div>
          <div className="w-24 h-28 bg-slate-300 dark:bg-gray-700 ring ring-slate-300 dark:ring-gray-600 dark:border-main-gray border-4 border-slate-100  rounded-lg"></div>
        </div>
      </div>
      <div className="col-span-12 h-auto   md:col-span-5 flex flex-col md:h-full md:justify-evenly md:mr-20 p-6 mt-80 md:mt-0 -z-20">
        <div className="w-full h-16 bg-slate-300 dark:bg-gray-700 rounded-lg"></div>
        <div className="w-full h-16 flex gap-4 items-end">
          {createEmptyArray(4).map((i) => (
            <div
              className="w-6 h-6 rounded-full bg-slate-300 dark:bg-gray-700"
              key={i.index}
            ></div>
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-6 md:mt-0">
          {createEmptyArray(9).map((i) => (
            <div
              className="w-36 h-6 bg-slate-300 rounded-lg dark:bg-gray-700"
              key={i.index}
            ></div>
          ))}
        </div>
      </div>
      <div className="h-full col-span-12 lg:col-span-3 flex flex-col items-center md:px-6 py-9 rounded-xl justify-between gap-2">
        {createEmptyArray(4).map((i) => (
          <div
            className="w-full h-10 rounded-lg bg-slate-300 dark:bg-gray-700"
            key={i.index}
          ></div>
        ))}
      </div>
    </div>
  );
};
