import { AiTwotoneHome } from "react-icons/ai";
import { BsFillHeartFill, BsFillPersonFill } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { UseInterests } from "../../context/interests/InterestsProvider";
const FooterMenu = () => {
  const { interestList } = UseInterests();
  const [active, setActive] = useState(0);
  return (
    <div className="w-full h-[4.5rem] fixed bottom-2 px-5 py-3 md:hidden z-10">
      <div className="w-full h-full rounded-3xl bg-slate-700 flex justify-between items-center px-2">
        <div className="w-32 h-full  flex justify-center items-center gap-8">
          <div className="relative">
            <NavLink to={"/interests"}>
              <button
                onClick={() => setActive(2)}
                className="flex gap-2 items-center cursor-pointer"
              >
                <BsFillHeartFill className="text-2xl text-white" />
              </button>
              {interestList.length > 0 && (
                <div className="w-4 h-4 rounded-full absolute -top-1 -right-2 bg-red-500 flex justify-center items-center text-[10px] text-white ">
                  {interestList.length}
                </div>
              )}
            </NavLink>
          </div>
          <div>
            <NavLink to={"/Aupport"}>
              <button
                onClick={() => setActive(2)}
                className="flex gap-2 items-center cursor-pointer"
              >
                <BiSolidMessageSquareDetail className="text-2xl text-white" />
              </button>
            </NavLink>
          </div>
        </div>
        <div className="w-16 h-16 rounded-full bg-blue-950 flex justify-center items-center">
          <div>
            <NavLink to={"/"}>
              <button
                onClick={() => setActive(1)}
                className="flex  items-center cursor-pointer"
              >
                <AiTwotoneHome className="text-3xl text-white" />
              </button>
            </NavLink>
          </div>
        </div>
        <div className="w-32 h-full flex justify-center items-center gap-9">
          <div>
            <button
              onClick={() => setActive(3)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <HiViewGrid className="text-2xl text-white" />
            </button>
          </div>
          <div>
            <button
              onClick={() => setActive(4)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <BsFillPersonFill className="text-2xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
