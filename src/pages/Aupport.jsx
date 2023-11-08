import { Link } from "react-router-dom";
import FooterMenu from "../components/menu/FooterMenu";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { useRef } from "react";
import { BsThreeDotsVertical, BsFillSendFill } from "react-icons/bs";
import { TfiThemifyFavicon } from "react-icons/tfi";
import { PiChecksThin } from "react-icons/pi";
import { useState } from "react";
// const moment = require("moment-jalaali");
import moment from "moment-jalaali";
const Aupport = () => {
  const now = moment().local("fa").format("HH:mm");
  const [massage, setMassage] = useState("");
  const [allMassages, setAllMassages] = useState([]);
  const input = useRef();
  const handleMassage = (e) => {
    setMassage(e.target.value);
    console.log(massage);
  };
  const handleSendMassage = () => {
    setAllMassages([...allMassages, massage]);
    input.current.value = "";
  };
  return (
    <div className="md:max-w-[60vw] h-[100vh] bg-white m-auto dark:bg-main-gray">
      <div className="w-full h-[90%] p-4">
        <div className="w-full h-16 bg-slate-300 rounded-full flex justify-between items-center px-6 text-slate-700">
          <BsThreeDotsVertical className="text-2xl cursor-pointer" />
          <div className="w-[70%] h-full flex justify-end items-center gap-3">
            <p>پشتیبانی دیجی تایز</p>
            <FaUser className="text-[40px] p-2 bg-slate-50 rounded-full" />
          </div>
          <Link to="/">
            {" "}
            <BiLeftArrowAlt className="text-2xl cursor-pointer" />
          </Link>
        </div>
        <div className="w-full h-[85%] border border-solid mt-2 rounded-2xl border-slate-400 relative ">
          <div className="w-full h-[85%] flex flex-col gap-4 p-5">
            {allMassages.map((massage, index) => {
              console.log(massage);
              return (
                <div id={index} className="w-auto h-auto flex relative">
                  <p className="w-auto bg-red-200 dark:bg-slate-200 pr-4 pl-8 py-1 rounded-t-[20px] rounded-bl-[20px] ">
                    {massage}
                    <div className="flex gap-2">
                      <PiChecksThin className="text-xs" />
                      <span className="text-[10px]">{now}</span>
                    </div>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex w-full h-16 absolute bottom-0 bg-slate-300 rounded-b-2xl justify-between items-center px-3 gap-4">
            <BsFillSendFill
              className="text-xl cursor-pointer"
              onClick={handleSendMassage}
            />
            <input
              onChange={handleMassage}
              type="text"
              ref={input}
              placeholder="پیام شما ..."
              className="bg-slate-300 flex flex-1 py-2 px-4 border border-slate-400 rounded-xl outline-none"
            />
            <TfiThemifyFavicon className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};
export default Aupport;
