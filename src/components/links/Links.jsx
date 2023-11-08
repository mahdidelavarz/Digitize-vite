import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineDeviceMobile } from "react-icons/hi";
import { ImHeadphones } from "react-icons/im";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
import { BsHeartHalf } from "react-icons/bs";
const Links = ({ iconStyle, backStyle, width }) => {
  const routes = [
    { title: "خانه", path: "/", icon: <HiOutlineHome className={iconStyle} /> },
    {
      title: "تلفن همراه",
      path: "/phone",
      icon: <HiOutlineDeviceMobile className={iconStyle} />,
    },
    {
      title: "لپ تاپ",
      path: "/laptop",
      icon: <MdOutlineLaptopMac className={iconStyle} />,
    },
    {
      title: "ساعت هوشمند",
      path: "/watch",
      icon: <IoWatchOutline className={iconStyle} />,
    },
    {
      title: "هدفون و هندزفری",
      path: "/airPods",
      icon: <ImHeadphones className={iconStyle} />,
    },
    {
      title: "علاقمندی",
      path: "/interests",
      icon: <BsHeartHalf className={iconStyle} />,
    },
  ];
  return (
    <>
      {routes.map((item) => {
        return (
          <li
            className={`${width} h-12  text-lg text-slate-600 dark:text-text-gray lg:px-4 cursor-pointer flex items-center hover:bg-gradient-to-l from-slate-200 dark:hover:bg-gradient-to-l dark:from-gray-700 rounded-md transition-all duration-300`}
            key={item.title}
          >
            <div className="w-10 h-5  relative">
              <div
                className={`w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 ${backStyle} absolute top-[-4px] right-[-5px] lg:top-[-5px] lg:right-[-10px] rounded-full`}
              ></div>
              {item.icon}
            </div>
            <NavLink
              to={item.path}
              className="w-full flex text-base md:text-sm lg:text-base"
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default Links;
