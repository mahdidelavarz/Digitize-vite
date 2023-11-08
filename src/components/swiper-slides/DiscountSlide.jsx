import * as data from '../../data';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
const DiscountSlide = () => {
    const filteredProducts = data.products.filter((product) => product.discount);
    return (
        <Swiper
            breakpoints={{
                0: {
                    slidesPerView: 2,
                },
                470: {
                    slidesPerView: 2,
                },
                620: {
                    slidesPerView: 2.5,
                },
                760: {
                    slidesPerView: 3.4,
                },
                1024: {
                    slidesPerView: 5,
                },
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            freeMode={true}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper h-full dark:bg-gray-700"
        >
            <SwiperSlide>
                <div className="col-span-3 md:col-span-2 h-full bg-red-500 flex flex-col justify-center items-center dark:bg-gray-700">
                    <img className="w-32 h-24" src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" alt="svg" />
                    <img className="w-36" src="https://www.digikala.com/statics/img/png/specialCarousel/box.webp" alt="box" />
                </div>
            </SwiperSlide>
            {filteredProducts.map((product) => {
                return <SwiperSlide key={product.id} className='w-full h-full border border-solid border-red-500 dark:border-slate-400 cursor-pointer hover:shadow-xl hover:shadow-red-500 dark:hover:shadow-slate-200 hover:transition-all hover:duration-300 dark:rounded-lg' >
                    <NavLink to={product.to}>
                        <div className="flex justify-between items-center flex-col h-full py-2 pb-6 px-4 text-sm md:text-base dark:bg-gray-700">
                            <img className="w-36 h-36 bg-white object-cover dark:bg-gray-700 " src={product.image} alt={product.name} />
                            <span className='text-[10px] md:text-xs  text-slate-600 dark:text-text-gray'>{product.name}</span>
                            <div className='flex justify-between w-full mt-4'>
                                <span className='w-9 h-5 flex justify-center items-center text-xs md:text-sm text-white bg-rose-500 rounded-full'>{product.discount}</span>
                                <span className='block text-slate-600 dark:text-yellow-300 text-xs md:text-base mt-1'>{product.price.toLocaleString('fa-IR')} تومان </span>
                            </div>
                            <span className='w-full flex justify-end text-slate-400 line-through mt-4 text-xs'>{product.offPrice.toLocaleString('fa-IR')}</span>
                        </div>
                    </NavLink>
                </SwiperSlide>
            })}
        </Swiper>
    );
}

export default DiscountSlide;