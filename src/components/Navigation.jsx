import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import { PiSignInBold } from "react-icons/pi";
import BurgerMenu from "./menu/BurgerMenu";
import { UseCart } from "../context/Cart/CartProvider";
import NavBar from "./menu/NavBar";
import Search from "./Search/Search";
import ThemeButton from "./theme/Theme";
import SearchMobile from "./Search/SearchMobile";
const Navigation = () => {
  const { cart } = UseCart();
  return (
    <div className="w-full h-20 md:h-36 border-b-2 flex flex-col justify-end">
      <div>
        <header className="flex  w-full h-auto fixed top-0 z-50 bg-slate-200 dark:bg-main-gray">
          {/* --------------------- Navigation in Mobile size -------------------------------------------*/}
          <nav className="w-full h-[5.5rem] md:hidden p-4 border-b border-solid border-slate-300 dark:border-border-slate shadow-sm dark:shadow-shadow-slate">
            <div className="w-full h-16 flex justify-between items-center">
              <div className="flex ">
                <RxHamburgerMenu className="bg-white dark:bg-slate-700 w-9 h-9 lg:h-11 lg:w-11 text-stone-500 dark:text-text-gray rounded-md p-1 cursor-pointer outline-none" />
                <div className="flex justify-center cursor-pointer bg-white dark:bg-slate-700 items-center px-3 py-1 shadow-md rounded-md text-stone-500 mr-3">
                  <NavLink
                    to={"/login"}
                    className="flex items-center gap-2 dark:text-text-gray"
                  >
                    ورود
                    <PiSignInBold className="text-xl ml-1 text-red-700 dark:text-slate-300" />
                  </NavLink>
                </div>
              </div>
              <div className="flex items-center justify-center px-2">
                <span className="text-3xl text-red-500 dark:text-yellow-400">
                  دیجی
                </span>
                <span className="text-slate-700 dark:text-text-gray text-xl">
                  تایز
                </span>
              </div>
              <div className="flex ">
                <div className="w-auto h-auto relative">
                  <NavLink to={"/cart"}>
                    <HiShoppingCart className="text-3xl text-red-600 dark:text-yellow-400 mt-1 ml-4 cursor-pointer" />
                    <span className="w-4 h-4 bg-red-600 dark:bg-yellow-400 text-white dark:text-black flex justify-center items-center rounded-full absolute bottom-5 left-8 text-[11px] ring-1 ring-white dark:ring-slate-800">
                      {cart.length}
                    </span>
                  </NavLink>
                </div>
                <SearchMobile />
              </div>
            </div>
            <BurgerMenu />
          </nav>
          {/* ----------------------- Navigation in size of bigger than 720 -------------------------------*/}
          <nav className="hidden w-full md:flex h-20 justify-between items-center border-b border-solid bg-white dark:bg-main-gray">
            <div className="flex">
              <div className="flex items-center justify-center px-2 mr-4 lg:mr-12 xl:mr-12">
                <span className="text-2xl lg:text-3xl text-red-500 dark:text-yellow-400">
                  دیجی
                </span>
                <span className="text-slate-700 text-lg lg:text-xl dark:text-text-gray">
                  تایز
                </span>
              </div>
              {/*-------------------- Search box -----------------------------*/}
              <Search />
            </div>
            {/* ------------------- Nav items ----------------------------- */}
            <ThemeButton />
            <div className="w-60 flex justify-between px-12">
              <div className="w-auto h-auto relative">
                <NavLink to={"/cart"}>
                  <HiShoppingCart
                    className="text-3xl text-red-600 mt-1 ml-4 cursor-pointer dark:text-yellow-400"
                    name="cart"
                  />
                  <span
                    className="w-4 h-4 bg-red-600 text-white flex justify-center items-center rounded-full absolute bottom-5 left-8 text-[11px] ring-1 ring-white cursor-pointer dark:bg-yellow-400 dark:ring-black dark:text-black"
                    name="cart"
                  >
                    {cart.length}
                  </span>
                </NavLink>
              </div>
              <div className="flex cursor-pointer bg-white  shadow-md rounded-md text-stone-500 mr-2 dark:bg-slate-700 dark:text-text-gray">
                <NavLink
                  to={"/login"}
                  className="flex items-center px-3 py-1 gap-2"
                >
                  ورود
                  <PiSignInBold className="text-xl text-red-700 dark:text-text-gray" />
                </NavLink>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className="fixed top-20 w-full z-40 shadow-md">
        <NavBar />
      </div>
    </div>
  );
};

export default Navigation;
