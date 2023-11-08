import { UseCart, CartActions } from "../context/Cart/CartProvider";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineRight, AiOutlineSafety, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaClipboardCheck, FaRegTrashAlt } from "react-icons/fa";
import { PiArticleNyTimes } from "react-icons/pi";
import Navigation from "../components/Navigation";
import useLoading from "../hooks/useLoading";
import { CartLoading } from "../components/common/Loading";


const Cart = () => {
  const { cart, total } = UseCart();
  const dispatch = CartActions();
  const loading = useLoading();

  const handleInc = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item })
  }
  const handleDec = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item })
  }
  return (
    <div>
      <Navigation />
      <main className="col-span-12 md:col-span-9 flex flex-col md:p-2 min-h-[88vh] ">
        {/* ---------------------------phone size------------------------ */}
        <div className="flex justify-between md:hidden px-6 mb-2 mt-6 border-t border-solid dark:border-none">
          <NavLink to={'../'}>
            <AiOutlineRight className="text-3xl p-1 bg-white rounded-lg text-slate-600 cursor-pointer dark:bg-gray-700 dark:text-text-gray" />
          </NavLink>
          <span className="dark:text-text-gray">سبد خرید شما</span>
          <BiDotsVerticalRounded className="text-3xl p-1 bg-white rounded-lg text-slate-600 cursor-pointer dark:text-text-gray dark:bg-gray-700 " />
        </div>
        {/* -----------------------------desktop size--------------------- */}
        <div className="w-full hidden md:flex justify-between text-slate-700 pr-8 pl-28 mt-2 bg-white py-4 rounded-lg dark:text-text-gray dark:bg-gray-700">
          <span>سبد خرید شما</span>
          <NavLink to={'../'}>
            <div className="flex items-center cursor-pointer">
              <IoExitOutline className="text-2xl ml-2 text-red-600 dark:text-text-gray " />
              <span>بازگشت به خانه</span>
            </div>
          </NavLink>
        </div>
        <div className="w-full h-auto flex gap-2">
          {/* ---------------------------------items -------------------------- */}
          <div className={`w-full h-auto lg:max-h-[78vh] mt-2 bg-white p-1 rounded-lg grid grid-cols-12 lg:w-2/3 lg:overflow-scroll mb-40 lg:mb-0 scrollbar-hide ${!cart.length && 'lg:w-full mb-0'} dark:bg-main-gray`} >
            {cart.length ? cart.map((item) => {
              // -------------------single item--------------------------------------
              return (
                <>
                  {loading ? <div className="col-span-12 grid grid-cols-12 gap-1 py-4 border-b-2 border-solid " key={item.id}>
                    {/* -------------img--------------------------- */}
                    <div className="col-span-4 p-2 bg-white dark:bg-main-gray">
                      <img src={item.image} alt={item.name} />
                    </div>
                    {/* -------descriptions----------------------- */}
                    <div className="col-span-8 p-2 bg-white pt-6 dark:text-gray-200 dark:bg-main-gray">
                      <h2 className="text-sm lg:text-base ">{item.name} {item.nameF}</h2>
                      <div>
                        <div className="flex items-center gap-2 mt-6 text-sm text-slate-500 dark:text-text-gray">
                          <div className={`w-5 h-5 ${item.selectedColor.val} rounded-full dark:border`}></div>
                          <span className="dark:text-text-gray ">{item.selectedColor.key}</span>
                        </div>
                        <div className="mt-3 text-xs text-slate-500  flex items-center dark:text-text-gray">
                          <AiOutlineSafety className="text-xl ml-2" />
                          <span>{item.garanti}</span>
                        </div>
                        <div className="mt-3 text-xs  text-slate-500 flex items-center dark:text-text-gray">
                          <FaClipboardCheck className="text-xl ml-2 text-cyan-600 dark:text-yellow-300" />
                          <span>{item.existed}</span>
                        </div>
                        <div className="mt-3 text-xs text-slate-500  flex items-center relative dark:text-text-gray">
                          <div className="w-[2px] h-7 bg-cyan-600 dark:bg-yellow-300 absolute top-3 right-[7px]"></div>
                          <div className="w-2 h-2 bg-cyan-600 dark:bg-yellow-300 rounded-full mr-1 ml-5"></div>
                          <img src={item.logo} className='w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 object-cover ml-2 ' alt="phone" />
                          <span>ارسال توسط دیجی تایز</span>
                        </div>
                        <div className="mt-3 text-xs text-slate-500  flex items-center dark:text-text-gray">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-1 ml-5 dark:bg-yellow-300"></div>
                          <PiArticleNyTimes className="text-xl ml-2 text-blue-700 dark:text-yellow-200" />
                          <span>ارسال فوری(تهران)</span>
                        </div>

                      </div>
                    </div>

                    {/*------------- total and price------------------ */}
                    <div className="col-span-12 p-2 bg-white flex items-center mr-8 dark:bg-main-gray">
                      <div className="w-24 flex justify-between items-center p-2 border-2 border-solid border-slate-300 rounded-lg text-orange-500 dark:text-text-gray ">
                        <button onClick={() => handleInc(item)}><AiOutlinePlus /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleDec(item)} >{item.quantity > 1 ? <AiOutlineMinus /> : <FaRegTrashAlt className="text-red-500 dark:text-red-300" />}</button>
                      </div>
                      <div className="mr-6 text-slate-500 dark:text-yellow-300 text-xl">{(item.price * item.quantity).toLocaleString('fa-IR')} تومان</div>
                    </div>
                  </div> : <CartLoading />}
                </>
              )
            }) : <div className="col-span-12 h-auto"><img src="https://my.uupload.ir/dl/0j5DVzyj" alt="product" className="w-full h-[75vh] object-scale-down"></img></div>}
          </div>

          <div className={`fixed lg:static bottom-0  lg:flex h-auto lg:h-96 w-full lg:w-1/3 bg-white dark:bg-gray-700 mt-8 border-2 border-solid rounded-lg flex-col justify-between dark:border-slate-600 p-4 ${!cart.length && 'hidden'}`} >
            <p className="dark:text-text-gray">جمع قیمت سفارش ها :</p>
            <div className="w-full p-4">
              {loading ? <span className="text-2xl text-rose-500 dark:text-slate-200">{total.toLocaleString('fa-IR')} تومان</span> : <div className="w-60 h-10 bg-slate-300 rounded-lg animate-pulse"></div>}
            </div>
            <button className="w-full py-3 bg-rose-500 rounded-lg text-white dark:bg-yellow-600 dark:border dark:border-slate-400">ثبت سفارش</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;