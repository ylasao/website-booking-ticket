"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Label } from "@radix-ui/react-label";
import { CiWarning } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { FcOvertime } from "react-icons/fc";
import TimeCarRental from "../timeCarRental/timeCarRental";
const ChauFFueRedVehicle = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [showTimeRental, setShowTimeRental] = useState<boolean>(false);
  const handleShowTime = () => {
    setShowTimeRental(!showTimeRental);
  };
  const handleHiddenTime = () => {
    setShowTimeRental(!showTimeRental);
  };

  //
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
      ) : (
        ""
      )}
      <div className="form-router mt-4">
        <h6 className="mt-[8px] font-bold pl-5 text-[1.25rem]">Lộ trình</h6>
        <RadioGroup
          defaultValue="comfortable"
          className="flex items-center  px-[20px] py-[12px] gap-[40px]"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="city" />
            <Label
              className="text-[.76rem] sm:text-[.9rem] md:text-[1rem] font-semibold"
              htmlFor="city"
            >
              Nội thành
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="province" />
            <Label
              className="text-[.76rem] sm:text-[.9rem] md:text-[1rem] font-semibold"
              htmlFor="province"
            >
              Lộ tỉnh
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="province_oneWay" />
            <Label
              className="text-[.76rem] sm:text-[.9rem] md:text-[1rem] font-semibold"
              htmlFor="province_oneWay"
            >
              Lộ tỉnh (1 chiều)
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="note text-[.875rem] md:text-[1.2rem] items-center text-[#767676] mb-[4px] ml-[20px] flex gap-3">
        Di chuyển nội thành hoặc lân cận, lộ trình tự do.
        <CiWarning className="text-yellow-600 text-[1.2rem]" />
      </div>
      <div className="search-form mt-4">
        <div className="flex items-center mb-[4px] ml-[20px] cursor-pointer ">
          <CiLocationOn className="w-[20px] h-[20px] mr-3" />
          <p className="md:text-[1.3rem] text-[#767676]">Tôi muốn đón tại...</p>
          <MdKeyboardArrowDown className="w-[20px] h-[20px] lg:w-[2.5rem] lg:h-[2.5rem] text-blue-600 cursor-pointer  ml-auto" />
        </div>
      </div>
      <h6 className="mt-[8px] font-bold pl-5 text-[1.25rem]">Thời gian</h6>
      <div className="search-form mt-4">
        <div className="flex items-center mb-[4px] ml-[20px] cursor-pointer ">
          <FcOvertime className="w-[20px] h-[20px] mr-3" />
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
          <MdKeyboardArrowDown className="w-[20px] h-[20px] lg:w-[2.5rem] lg:h-[2.5rem] text-blue-600 cursor-pointer  ml-auto" />
        </div>
      </div>
      <div className="submit">
        <div className="search sm:w-[200px]  lg:float-end mt-4 md:mt-6 text-center p-4 rounded-lg bg-blue-600 active:motion-preset-confetti motion-duration-1000">
          <Link href="" className="text-white font-semibold">
            Tìm xe
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChauFFueRedVehicle;
