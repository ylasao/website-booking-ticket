"use client";

import { useState, useEffect } from "react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FcOvertime } from "react-icons/fc";
import TimeCarRental from "../timeCarRental/timeCarRental";

const SelfDrivingCar = () => {
  const [showTimeRental, setShowTimeRental] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const handleShowTime = () => {
    setShowTimeRental(!showTimeRental);
  };

  const handleHiddenTime = () => {
    setShowTimeRental(!showTimeRental);
  };

  const loadData = () => {
    const saveData = localStorage.getItem("renTalData");
    if (saveData) {
      const parsedData = JSON.parse(saveData);
      setStartDate(parsedData.startDate || "");
      setEndDate(parsedData.endDate || "");
      setStartTime(parsedData.startTime || "");
      setEndTime(parsedData.endTime || "");
    }
  };

  useEffect(() => {
    // Initial load of data from localStorage
    loadData();

    // Define the event handler for localStorage changes
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "renTalData") {
        loadData();
      }
    };

    // Add the event listener
    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      {showTimeRental ? (
        <TimeCarRental handleHiddenTime={handleHiddenTime} />
      ) : null}
      <div className="form-search lg:flex justify-between">
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
        <div className="search_form-item mb-2">
          <div className="title flex items-center text-[#767676]">
            <FcOvertime className="w-[20px] h-[20px] mr-2 md:w-[23px] md:h-[23px]" />
            <p className="text-[14px] sm:text-[1.2rem]">Thời gian thuê</p>
          </div>
          <div className="mt-3 choose w-[calc(100%-32px)] ml-[32px]">
            <div className="flex justify-between items-center lg:gap-10 ">
              <Link
                className="text-[.9rem] gap-2 sm:text-[23px] font-semibold text-slate-800 flex items-center"
                href=""
                onClick={handleShowTime}
              >
                <span className="time-pick_up">
                  ⌚{startTime} 📅{startDate}
                </span>
                -
                <span className="time-return">
                  ⏰{endTime} - 🚗{endDate}
                </span>
              </Link>
              <MdKeyboardArrowDown className="text-blue-600 w-[22px] hidden sm:block font-semibold cursor-pointer h-[22px] lg:h-[2.5rem] lg:w-[2.5rem]" />
            </div>
          </div>
        </div>
        <div className="search sm:w-[200px] lg:float-end mt-4 md:mt-6 text-center p-4 rounded-lg bg-blue-600">
          <Link href="" className="text-white font-semibold">
            Tìm xe
          </Link>
        </div>
      </div>
    </>
  );
};

export default SelfDrivingCar;
