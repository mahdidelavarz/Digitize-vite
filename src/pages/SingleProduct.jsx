import * as data from "../data";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { BsCheck, BsFillShareFill, BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSafety, AiFillHeart } from "react-icons/ai";
import { PiBellRinging } from "react-icons/pi";
import { BiMessageDetail, BiStore } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaTruckPlane } from "react-icons/fa6";
import { UseCart, CartActions } from "../context/Cart/CartProvider";
import {
  UseInterests,
  InterestsActions,
} from "../context/interests/InterestsProvider";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SingleProductLoading } from "../components/common/Loading";
import useLoading from "../hooks/useLoading";

const SingleProduct = () => {
  const { id } = useParams();
  const product = data.products
    .filter((p) => parseInt(p.id) === parseInt(id))
    .reduce((key, value) => {
      key[value] = key;
      return value;
    }, {});

  const [selected, setSelected] = useState({ key: "مشکی", val: "bg-black" });
  const { cart } = UseCart();
  const dispatch = CartActions();
  const { interestList } = UseInterests();
  const dispatchInterest = InterestsActions();
  const loading = useLoading();

  const handleSelect = (key, val) => {
    setSelected({ key, val });
  };
  const handleAddToCart = (product) => {
    if (!checkInCart(cart, product)) toast.success(`به سبدخرید اضافه شد`);
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, selectedColor: selected },
    });
  };
  const checkInCart = (cart, product) => {
    return cart.find((item) => item.id === product.id);
  };
  const checkInInterestList = (interestList, product) => {
    return interestList.find((item) => item.id === product.id);
  };
  const handleLike = () => {
    dispatchInterest({ type: "ADD_TO_INTERESTS", payload: { ...product } });
  };
  const handleRemoveLike = (product) => {
    dispatchInterest({ type: "REMOVE_FROM_INTERESTS", payload: product });
    console.log(interestList, product);
  };
  return (
    <Layout>
      {loading ? (
        <section className="col-span-12 h-auto  relative grid grid-cols-12 md:grid-rows-12 bg-white py-2  px-4 rounded-lg items-center z-20 dark:bg-main-gray">
          {/* ----------------------------items image--------------------------- */}
          <div className="h-full col-span-12 md:col-span-7 lg:col-span-4 relative flex items-center flex-col justify-evenly z-30">
            <div className="flex justify-end absolute right-[-15px] top-0 p-4 flex-col ">
              {checkInInterestList(interestList, product) ? (
                <AiFillHeart
                  onClick={() => handleRemoveLike(product)}
                  className="ml-5 text-2xl text-red-600 cursor-pointer transition-all duration-300"
                />
              ) : (
                <AiOutlineHeart
                  onClick={handleLike}
                  className="ml-5 text-2xl text-indigo-900 dark:text-text-gray hover:text-rose-500 cursor-pointer transition-all duration-300"
                />
              )}
              <BsFillShareFill className="ml-5 mt-5 text-2xl text-indigo-900 dark:text-text-gray hover:text-rose-500 cursor-pointer transition-all duration-300" />
              <PiBellRinging className="ml-5 mt-5 text-2xl text-indigo-900 dark:text-text-gray hover:text-rose-500 cursor-pointer transition-all duration-300" />
              <BiMessageDetail className="ml-5 mt-5 text-2xl text-indigo-900 dark:text-text-gray hover:text-rose-500 cursor-pointer transition-all duration-300" />
              <TfiMenuAlt className="ml-5 mt-5 text-2xl text-indigo-900 dark:text-text-gray hover:text-rose-500 cursor-pointer transition-all duration-300" />
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-64 object-cover md:mt-2"
            />
            <div className="lg:flex mt-4 hidden col-span-4 p-4">
              <div className="w-1/3 p-2 border-2 border-slate-400 m-1 rounded-md cursor-pointer object-cover dark:border-gray-500">
                <img
                  className="w-full h-full"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="w-1/3 p-2 border-2 border-slate-400 m-1 rounded-md  cursor-pointer object-cover dark:border-gray-500">
                <img
                  className="w-full h-full"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="w-1/3 p-2 border-2 border-slate-400 m-1 rounded-md  cursor-pointer object-cover dark:border-gray-500">
                <img
                  className="w-full h-full"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>
          </div>
          {/* -----------------------------items details------------------------ */}
          <div className="col-span-12  md:col-span-5 lg:col-span-5  flex flex-col md:h-full md:justify-evenly px-6 ">
            <h1 className=" text-base mt-8 md:text-base text-slate-500 dark:text-text-gray">
              {product.name}
            </h1>
            <h1 className="text-xl mt-2 md:text-base text-slate-500 dark:text-text-gray">
              {product.nameF}
            </h1>
            <div className="mt-6 border-t pt-6 border-border-slate">
              <p className="text-slate-600 dark:text-text-gray">انتخاب رنگ :</p>
              <div className="w-full flex gap-1 mt-4 ">
                {Object.entries(product.colors).map(([key, val]) => {
                  return (
                    <div
                      key={key}
                      onClick={() => handleSelect(key, val)}
                      className={`${
                        selected.key === key
                          ? "ring-2 ring-orange-500  border-2 border-white dark:ring-gray-800"
                          : ""
                      } ${
                        val === "bg-white" &&
                        " ring-black border-2 border-solid border-slate-500 rounded-full"
                      } w-6 h-6 ${val} rounded-full cursor-pointer flex justify-center items-center ml-4`}
                    >
                      <BsCheck
                        className={`${
                          selected.key === key ? "flex" : "hidden"
                        } ${
                          val === "bg-white" ? "text-black " : "text-white"
                        } text-xl`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <!-- !...................................Attributes  (mobile)............................................... --> */}
            <div className="w-full h-auto flex flex-col items-end mt-7 p-2  mb-4 rounded-md lg:hidden   dark:bg-main-gray">
              <span className="mb-3 bold text-base text-slate-900 dark:text-text-gray flex justify-start w-full">
                ویژگی های کالا :
              </span>
              <div className="w-full flex relative  flex-col">
                <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-yellow-300 top-1 right-8 absolute "></div>
                <span className="flex px-2 text-slate-900 dark:text-text-gray mr-10 justify-start">
                  {" "}
                  حافظه داخلی :{" "}
                </span>
                <span className="text-slate-500 p-2 mr-16 flex justify-start">
                  128 گیگابایت
                </span>
                <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-yellow-300 top-[4.3rem] absolute right-8"></div>
                <span className="flex px-2 text-slate-900 dark:text-text-gray mr-10 justify-start">
                  {" "}
                  حافظه رم :{" "}
                </span>
                <span className="text-slate-500 p-2 mr-16 flex justify-start">
                  {" "}
                  12 گیگابایت
                </span>
                <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-yellow-300 top-[8.4rem] absolute right-8"></div>
                <span className="flex px-2 text-slate-900 dark:text-text-gray mr-10 justify-start">
                  {" "}
                  بازه ی اندازه ی صفحه نمایش :{" "}
                </span>
                <span className="text-slate-500 p-2 mr-16 flex justify-start">
                  {" "}
                  .6 اینچ و بزرگتر
                </span>
                <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-yellow-300 top-[12.4rem] absolute right-8"></div>
                <span className="flex px-2 text-slate-900 dark:text-text-gray mr-10 justify-start">
                  {" "}
                  شبکه های ارتباطی :
                </span>
                <ul className="flex justify-evenly">
                  <li className="text-slate-500 p-2 ">
                    <span>2G</span>
                  </li>
                  <li className="text-slate-500 p-2 ">
                    <span>3G</span>
                  </li>
                  <li className="text-slate-500 p-2 ">
                    <span>4G</span>
                  </li>
                  <li className="text-slate-500 p-2 ">
                    <span>5G</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- !...................................Attributes  (Desktop)............................................... --> */}
            <div className="w-60 h-auto bg-white lg:flex flex-col mt-5 overflow-hidden mb-4 rounded-md col-span-2 lg:text-sm hidden items-center dark:bg-main-gray">
              <span className="mb-3 bold text-base text-slate-900 dark:text-text-gray flex justify-start w-full">
                ویژگی های کالا :
              </span>
              <div className="w-full flex relative mr-5 flex-col">
                <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-yellow-300 top-1 absolute mr-2"></div>
                <span className="flex px-2 text-slate-900 dark:text-text-gray mr-5 justify-start">
                  {" "}
                  حافظه داخلی :{" "}
                </span>
                <span className="text-slate-500 p-2 mr-8 flex justify-start">
                  128 گیگابایت
                </span>
                <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-yellow-300 top-[3.7rem] absolute mr-2"></div>
                <span className="flex px-2 text-slate-900 dark:text-text-gray mr-5 justify-start">
                  {" "}
                  حافظه رم :{" "}
                </span>
                <span className="text-slate-500 p-2 mr-8 flex justify-start">
                  {" "}
                  12 گیگابایت
                </span>
                <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-yellow-300 top-[7.2rem] absolute mr-2"></div>
                <span className="flex px-2 text-slate-900 dark:text-text-gray mr-5 justify-start">
                  {" "}
                  بازه ی اندازه ی صفحه نمایش :{" "}
                </span>
                <span className="text-slate-500 p-2 mr-8 flex justify-start">
                  {" "}
                  .6 اینچ و بزرگتر
                </span>
                <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-yellow-300 top-[10.7rem] absolute mr-2"></div>
                <span className="flex px-2 text-slate-900 dark:text-text-gray mr-5 justify-start">
                  {" "}
                  شبکه های ارتباطی :
                </span>
                <ul className="flex justify-evenly">
                  <li className="text-slate-500 p-2 ">
                    <span>2G</span>
                  </li>
                  <li className="text-slate-500 p-2 ">
                    <span>3G</span>
                  </li>
                  <li className="text-slate-500 p-2 ">
                    <span>4G</span>
                  </li>
                  <li className="text-slate-500 p-2 ">
                    <span>5G</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ------------------------------add to cart div--------------------- */}
          <div className="h-full col-span-12 lg:col-span-3 flex flex-col items-center px-6 md:px-6 md:bg-slate-100 py-4 rounded-xl justify-between dark:md:shadow-md dark:md:shadow-gray-900 dark:md:bg-main-gray ">
            <div className="w-full flex relative ">
              <div className="w-6 h-6 bg-slate-300 rounded-full absolute top-0 right-3 dark:bg-gradient-to-tl from-gray-800 opacity-60"></div>
              <AiOutlineSafety className=" z-30 mr-5 text-2xl mt-2 dark:text-yellow-300 " />
              <div className="w-full mt-2 mr-2 flex justify-between">
                <span className="lg:text-sm xl:text-base dark:text-text-gray"> گارانتی:</span>{" "}
                <span className="text-slate-500 dark:text-gray-400 lg:text-sm xl:text-base">
                  {" "}
                  18 ماه زرین خدمت
                </span>
              </div>
            </div>
            <div className="w-full flex relative mt-4">
              <div className="w-6 h-6 bg-slate-300 rounded-full absolute top-0 right-3 z-0 dark:bg-gradient-to-tl from-gray-800 opacity-60"></div>
              <BiStore className="z-30 mr-5 text-2xl mt-2 dark:text-yellow-300" />
              <div className="w-full mt-2 mr-2 flex justify-between">
                <span className=" mr-2 lg:text-sm xl:text-base dark:text-text-gray">
                  {" "}
                  فروشنده :
                </span>{" "}
                <span className="text-slate-500 dark:text-gray-400 lg:text-sm xl:text-base">
                  {" "}
                  دیجی تایز
                </span>
              </div>
            </div>
            <div className="w-full flex relative mt-4">
              <div className="w-6 h-6 bg-slate-300 rounded-full absolute top-0 right-3 z-0 dark:bg-gradient-to-tl from-gray-800 opacity-60"></div>
              <FaTruckPlane className="z-30 mr-5 text-2xl mt-2 dark:text-yellow-300" />
              <div className="w-full mt-2 mr-2 flex justify-between">
                <span className=" mr-2 lg:text-sm xl:text-base dark:text-text-gray">
                  {" "}
                  ارسال توسط :{" "}
                </span>{" "}
                <span className="text-slate-500 lg:text-sm xl:text-base dark:text-gray-400">
                  {" "}
                  انبار تهران
                </span>
              </div>
            </div>
            {/* phone add to cart */}
            <div className="fixed w-full h-[4.3rem] bg-slate-100 bottom-2 rounded-3xl  p-3 z-50 md:hidden dark:bg-gray-800">
              <div className="w-full h-full flex justify-between items-center px-10 rounded-2xl bg-rose-600 dark:bg-gray-700">
                <div
                  onClick={() => handleAddToCart(product)}
                  className="w-16 h-16 bg-blue-950 rounded-full flex justify-center items-center cursor-pointer"
                >
                  {checkInCart(cart, product) ? (
                    <BsFillCartCheckFill className="text-3xl text-slate-50" />
                  ) : (
                    <MdOutlineAddShoppingCart className="text-3xl text-white" />
                  )}
                </div>
                <span className="text-white  w-auto  text-xl lg:text-base xl:text-lg dark:text-yellow-300">
                  {product.price.toLocaleString("fa-IR")} تومان
                </span>
              </div>
            </div>
            {/* desktop add to cart */}
            <div className="w-full md:flex flex-col justify-end items-end mt-6 static  bg-slate-100 z-30 hidden dark:bg-main-gray">
              <span className="text-rose-700  w-auto  text-xl lg:text-base xl:text-lg dark:text-yellow-300">
                {product.price.toLocaleString("fa-IR")} تومان
              </span>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-2  bg-rose-500 rounded-md mt-4  text-white  lg:text-sm text-lg dark:bg-gray-600 dark:border dark:border-slate-300 flex gap-4 px-6 justify-center "
              >
                <CiShoppingCart className="text-2xl" />
                {checkInCart(cart, product)
                  ? "در سبد خرید موجود است"
                  : "افزودن به سبدخرید"}
              </button>
            </div>
          </div>
        </section>
      ) : (
        <SingleProductLoading />
      )}
    </Layout>
  );
};

export default SingleProduct;
