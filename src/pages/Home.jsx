
import Navigation from "../components/Navigation";
import React from 'react';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import FooterMenu from '../components/menu/FooterMenu';
import HeaderSlide from '../components/swiper-slides/HeaderSlide';
import DiscountSlide from '../components/swiper-slides/DiscountSlide';
import useLoading from "../hooks/useLoading";
import { HomeSkeleton } from "../components/common/Loading";


const Home = () => {
  const loading = useLoading();
  return (
    <>
      <div>
        <Navigation />
        {loading ?
          <div className=" h-auto md:p-4 md:rounded-md mt-4 md:mt-0">
            <HeaderSlide />
            <div className="w-full h-auto mt-16 grid grid-cols-12 gap-y-10 gap-x-6 pr-3">
              <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
                <NavLink to={"/phone"} className='flex flex-col items-center'>
                  <div className="w-36 h-36 relative bg-slate-50  ring-2 ring-slate-600 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 dark:shadow-slate-300 dark:shadow-lg dark:bg-gray-600 dark:ring-slate-300">
                    <div className='w-20 h-20 absolute rounded-full -top-3 -right-3 bg-white ring-2 ring-slate-500 dark:bg-gray-600 dark:ring-slate-300'>
                      <img src="./iphone.png" alt="phone" />
                    </div>
                    <img src="./iphone2.png" alt="phone" className='object-cover' />
                  </div>
                  <span className="text-xs md:text-sm mt-3 dark:text-slate-200">گوشی موبایل</span>
                </NavLink>
              </div>
              <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
                <NavLink to={"/laptop"} className='flex flex-col items-center'>
                  <div className="w-36 h-36 relative  bg-slate-50  ring-2 ring-slate-600 dark:ring-slate-300 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 dark:shadow-slate-300 dark:shadow-lg dark:bg-gray-600 ">
                    <div className='w-20 h-20 absolute rounded-full -top-3 -right-3 bg-white ring-2 ring-slate-500 dark:bg-gray-600 dark:ring-slate-300'>
                      <img src="./laptop.png" alt="phone" />
                    </div>
                    <img className='object-cover' src="./laptop2.png" alt="laptop" />
                  </div>
                  <span className="text-xs md:text-sm mt-3 dark:text-slate-200">لپ تاپ</span>
                </NavLink>
              </div>
              <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
                <NavLink to={"/watch"} className='flex flex-col items-center'>
                  <div className="w-36 h-36 relative  bg-slate-50  ring-2 ring-slate-600 dark:ring-slate-300 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 dark:shadow-slate-300 dark:shadow-lg dark:bg-gray-600 ">
                    <div className='w-20 h-20 absolute rounded-full -top-3 -right-3 bg-white ring-2 ring-slate-500 dark:bg-gray-600 dark:ring-slate-300'>
                      <img src="./applewatch.png" alt="" />
                    </div>
                    <img className=' object-cover' src="./applewatch2.png" alt="watch" />
                  </div>
                  <span className="text-xs md:text-sm mt-3 dark:text-slate-200">ساعت هوشمند</span>
                </NavLink>
              </div>
              <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
                <div className="w-36 h-36  bg-slate-50 relative  ring-2 ring-slate-600 dark:ring-slate-300 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 dark:shadow-slate-300 dark:shadow-lg dark:bg-gray-600 ">
                  <div className='w-20 h-20 absolute rounded-full -top-3 -right-3 bg-white ring-2 ring-slate-500 dark:bg-gray-600 dark:ring-slate-300'>
                    <img src="./headphone2-removebg-preview.png" className="rounded-full" alt="" />
                  </div>
                  <img className='object-contain w-40 h-40' src="./public/OIP-removebg-preview.png" alt="phone" />
                </div>
                <span className="text-xs md:text-sm mt-3 dark:text-slate-200">هدفون و هندزفری</span>
              </div>
            </div>
            <div className="col-span-12 h-auto bg-red-500 mt-10 p-x-2 py-6 grid grid-cols-12 dark:bg-gray-700 rounded-lg">
              <div className="col-span-12 h-72 bg-white transition-all duration-1000 ">
                <DiscountSlide />
              </div>
            </div>
          </div>
          :
          <HomeSkeleton />
        }
        <Footer />
        <FooterMenu />
      </div>
    </>
  );
}
export default Home;