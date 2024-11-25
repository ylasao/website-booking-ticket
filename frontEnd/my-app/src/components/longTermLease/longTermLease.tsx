import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
const LongTermLease = () => {
  return (
    <>
      <div className="form-search mt-4 lg:flex justify-between">
        <div className="search_form-item mb-2">
          <div className="title flex items-center text-[#767676]">
            <CiLocationOn className="w-[20px] h-[20px] mr-2 md:w-[23px] md:h-[23px] " />
            <p className="text-[14px] sm:text-[1.2rem]">Địa điểm</p>
          </div>
          <div className="mt-3 choose w-[calc(100%-32px)] ml-[32px]">
            <div className="flex justify-between items-center lg:gap-10">
              <Link
                className="text-[.9rem] sm:text-[23px] font-semibold text-slate-800"
                href=""
              >
                TP. Hồ Chí Minh
              </Link>
              <MdKeyboardArrowDown className="text-blue-600 w-[22px] hidden sm:block  font-semibold  cursor-pointer h-[22px] lg:h-[2.5rem] lg:w-[2.5rem]" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="search sm:w-[200px]  lg:float-end mt-4 md:mt-6 text-center p-4 rounded-lg bg-blue-600 active:motion-preset-confetti motion-duration-1000">
            <Link href="" className="text-white font-semibold">
              Tìm xe
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongTermLease;
