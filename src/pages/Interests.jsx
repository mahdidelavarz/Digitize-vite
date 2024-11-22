import * as data from "../data";
import { NavLink } from "react-router-dom";
import Layout from "../Layout/Layout";
import {
  UseInterests,
  InterestsActions,
} from "../context/interests/InterestsProvider";
import { UseCart, CartActions } from "../context/Cart/CartProvider";
import { useState } from "react";
import { AiOutlineSafety, AiOutlineRight } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaClipboardCheck } from "react-icons/fa";
import { PiArticleNyTimes } from "react-icons/pi";
import { BsCheck } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLoading from "../hooks/useLoading";
import { InterestSkeleton } from "../components/common/Loading";

const Interests = () => {
  const { interestList } = UseInterests();
  const dispatch = InterestsActions();
  const dispatchCart = CartActions();
  const [selected, setSelected] = useState({ key: "مشکی", val: "bg-black" });
  const [state, setState] = useState(...interestList);
  const loading = useLoading();
  const { cart } = UseCart();
  const handleState = (id, key, val) => {
    const product = data.products
      .filter((p) => parseInt(p.id) === parseInt(id))
      .reduce((key, value) => {
        key[value] = key;
        return value;
      }, {});
    setState(product);
    setSelected({ key, val });
  };
  const handleDelete = (item) => {
    dispatch({ type: "REMOVE_FROM_INTERESTS", payload: item });
    console.log(item);
  };
  const handleAdd = (item) => {
    if (!checkInCart(cart, item)) {
      toast.success(`به سبدخرید اضافه شد`);
    }
    dispatchCart({
      type: "ADD_TO_CART",
      payload: { ...item, selectedColor: selected },
    });
    console.log(item);
  };
  const checkInCart = (cart, product) => {
    return cart.find((item) => item.id === product.id);
  };
  return (
    <Layout>
      <div className=" hidden md:flex col-span-3 row-span-2 bg-white dark:bg-gray-800 rounded-l-xl max-h-[85vh] mt-2 overflow-scroll p-5 scrollbar-hide flex-col gap-8 "></div>
      <div className="col-span-12 md:col-span-9 grid grid-cols-12 mt-2 ">
        {/* phone size */}
        <div className="flex col-span-12 justify-between md:hidden px-6 mb-2 dark:bg-main-gray">
          <NavLink to={"../"}>
            <AiOutlineRight className="text-3xl p-1 bg-white rounded-lg text-slate-600 cursor-pointer dark:bg-main-gray dark:text-text-gray" />
          </NavLink>
          <span className="text-text-gray">علاقمندی های شما</span>
          <BiDotsVerticalRounded className="text-3xl p-1 bg-white rounded-lg text-slate-600 cursor-pointer dark:bg-main-gray dark:text-text-gray" />
        </div>
        {/* desktop size */}
        <div className="col-span-12 hidden md:flex justify-between text-slate-700 pr-8 pl-28  bg-white py-4 rounded-lg mb-4 dark:text-text-gray dark:bg-gray-700">
          <span>علاقمندی های شما</span>
          <NavLink to={"../"}>
            <div className="flex items-center cursor-pointer">
              <IoExitOutline className="text-2xl ml-2 text-red-600 dark:text-text-gray" />
              <span>بازگشت به خانه</span>
            </div>
          </NavLink>
        </div>

        {interestList.length ? (
          interestList.map((item) => {
            return (
              <>
                {loading ? (
                  <div
                    className="col-span-12  grid grid-cols-12 border-b-2 border-solid rounded-lg relative md:gap-y-2 dark:bg-main-gray dark:border-slate-600"
                    key={item.id}
                  >
                    {/* -------------img--------------------------- */}
                    <div className=" col-span-12 md:col-span-4 p-2 bg-white flex items-center rounded-tr-lg rounded-br-lg justify-center dark:bg-main-gray">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-44 object-cover"
                      />
                    </div>
                    {/* -------descriptions----------------------- */}
                    <div className="col-span-12 md:col-span-8 px-6 bg-white py-6 dark:bg-main-gray">
                      <h2 className="text-sm lg:text-base w-4/6 dark:text-text-gray">
                        {item.name} {item.nameF}
                      </h2>
                      <div>
                        <div className="mt-3 text-xs text-slate-500  flex items-center dark:text-text-gray">
                          <AiOutlineSafety className="text-xl ml-2" />
                          <span>{item.garanti}</span>
                        </div>
                        <div className="mt-3 text-xs  text-slate-500 flex items-center dark:text-text-gray">
                          <FaClipboardCheck className="text-xl ml-2 text-cyan-600 dark:text-yellow-300" />
                          <span>{item.existed}</span>
                        </div>
                        <div className="mt-3 text-xs text-slate-500  flex items-center relative dark:text-text-gray">
                          <div className="w-[2px] h-7 bg-cyan-600 absolute top-3 right-[7px] dark:bg-yellow-300"></div>
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-1 ml-5 dark:bg-yellow-300"></div>
                          <img
                            src={item.logo}
                            className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 object-cover ml-2 "
                            alt="phone"
                          />
                          <span>ارسال توسط دیجی تایز</span>
                        </div>
                        <div className="mt-3 text-xs text-slate-500  flex items-center dark:text-text-gray">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-1 ml-5 dark:bg-yellow-300"></div>
                          <PiArticleNyTimes className="text-xl ml-2 text-blue-700 dark:text-blue-300" />
                          <span>ارسال فوری(تهران)</span>
                        </div>
                      </div>
                      <div className="w-full flex gap-1 mt-8 ">
                        {Object.entries(state.colors).map(([key, val]) => {
                          return (
                            <div
                              key={key}
                              onClick={() => handleState(item.id, key, val)}
                              className={`${
                                selected.key === key
                                  ? "ring-2 ring-orange-500  border-2 border-white dark:ring-gray-800"
                                  : ""
                              } ${
                                val === "bg-white" &&
                                " ring-black border-2 border-solid border-slate-500 rounded-full"
                              } w-5 h-5 md:w-6 md:h-6 ${val} rounded-full cursor-pointer flex justify-center items-center ml-4`}
                            >
                              <BsCheck
                                className={`${
                                  selected.key === key ? "flex" : "hidden"
                                } ${
                                  val === "bg-white"
                                    ? "text-black "
                                    : "text-white"
                                } text-xl`}
                              />
                            </div>
                          );
                        })}
                        <div className="w-[40%] text-cyan-700 flex justify-end text-base lg:text-lg dark:text-yellow-300">
                          {item.price.toLocaleString("fa-IR")} تومان
                        </div>
                      </div>
                      <div className="flex mt-4 gap-4 text-xs md:text-sm lg:text-base">
                        <div
                          onClick={() => handleDelete(item)}
                          className="flex px-4 py-2 items-center cursor-pointer gap-2 shadow-lg border text-slate-400 rounded-lg"
                        >
                          <MdOutlineDeleteSweep className="text-lg" />
                          <button>حذف</button>
                        </div>
                        <div
                          onClick={() => handleAdd(item)}
                          className="flex w-60 justify-center px-4 py-2 items-center cursor-pointer gap-2 shadow-lg border border-red-400 text-red-400 rounded-lg dark:text-yellow-200 dark:border-yellow-200"
                        >
                          <CiShoppingCart className="text-xl" />
                          <button>
                            {checkInCart(cart, item)
                              ? "در سبد موجود است"
                              : "افزودن به سبدخرید"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <InterestSkeleton />
                )}
              </>
            );
          })
        ) : (
          <div className="col-span-12 h-auto dark:bg-gray-700">
            <img
              src="./empty.png"
              alt="empty"
              className="w-full h-auto  object-scale-down mt-4 "
            ></img>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Interests;
