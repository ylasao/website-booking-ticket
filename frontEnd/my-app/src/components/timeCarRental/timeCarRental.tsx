"use client";
import React, { HTMLInputAutoCompleteAttribute, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "../ui/label";
import { startOfDay } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Drawer, DrawerTrigger, DrawerContent } from "../ui/drawer";
import { Button } from "@/components/ui/button";
const TimeCarRental = ({
  handleHiddenTime
}: {
  handleHiddenTime: () => void;
}) => {
  const handleIsShow = () => {
    handleHiddenTime();
  };
  interface RentalPeriod {
    startDate: Date;
    endDate: Date;
  }
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({
    startDate: new Date(),
    endDate: new Date()
  });
  //
  interface RenTalTime {
    startTime: string;
    endTime: string;
  }
  const [renRalTime, setRentalTime] = useState<RenTalTime>({
    startTime: "",
    endTime: ""
  });
  const handleStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRentalTime((prev) => ({ ...prev, startTime: e.target.value }));
  };
  const handleEndTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRentalTime((prev) => ({ ...prev, endTime: e.target.value }));
  };
  //
  const [days, setDays] = useState<number>(0);
  const handleChangeStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = new Date(e.target.value);
    setRentalPeriod((prev) => ({ ...prev, startDate: newStartDate }));
    calculateDays(newStartDate, rentalPeriod.endDate);
  };
  const handleChangeEndTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = new Date(e.target.value);
    setRentalPeriod((prev) => ({ ...prev, endDate: newEndDate }));
    calculateDays(rentalPeriod.startDate, newEndDate);
  };
  const calculateDays = (startDate: Date, endDate: Date) => {
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    setDays(differenceInDays);
  };
  const handleSubmit = () => {
    if (days <= 0) {
      return toast("PLease choose date valid");
    } else if (renRalTime.startTime === "") {
      return toast("Please choose time start");
    } else if (renRalTime.endTime === "") {
      return toast("Please choose time end");
    }
    const rentalData = {
      startDate: rentalPeriod.startDate.toLocaleDateString("vi-VN"),
      startTime: renRalTime.startTime,
      endDate: rentalPeriod.endDate.toLocaleDateString("vi-VN"),
      endTime: renRalTime.endTime
    };
    localStorage.setItem("renTalData", JSON.stringify(rentalData));

    handleHiddenTime();
  };

  console.log(`days ${days}`);
  return (
    <>
      <div
        className="fixed w-[100%] motion-preset-bounce motion-duration-700 motion-delay-300 top-0 left-0  h-[100vh]  z-[10000] bg-cover bg-center"
        style={{
          backgroundImage: `url("/image_sky.png")`
        }}
      >
        <div className="relative m-2 p-[16px]  with-full  lg:w-[50%] lg:mt-[50px] lg:ml-auto lg:mr-[100px]  rounded-2xl overflow-y-auto max-h-[90vh]">
          <div className="header lg:my-[100px] relative">
            <h6 className="text-center font-bold text-[1.3rem] lg:text-[1.8rem]">
              Thời gian
            </h6>
            <div className="btn-remove absolute top-2 cursor-pointer right-2">
              <FiDelete
                className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] text-blue-600"
                onClick={handleIsShow}
              />
            </div>
          </div>
          <div className=" lg:grid  grid-cols-2 gap-3">
            <div className="flex flex-col mt-4">
              <div className="flex flex-col gap-2">
                <label className="text-slate-500 text-[1rem]">
                  Thời gian nhận xe
                </label>
                <input
                  type="date"
                  value={rentalPeriod.startDate.toISOString().slice(0, 10)}
                  onChange={handleChangeStartTime}
                  className="border  m-2 rounded-lg bg-transparent border-slate-300 p-[12px] font-semibold text-[1.2rem] focus:outline-none cursor-pointer text-black"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="startTime"
                  className="text-slate-500 text-[1rem]"
                >
                  Giờ nhận xe
                </label>
                <input
                  type="time"
                  onChange={handleStartTime}
                  value={renRalTime.startTime}
                  id="startTime"
                  className="border  m-2 rounded-lg bg-transparent border-slate-300 p-[12px] font-semibold text-[1.2rem] focus:outline-none cursor-pointer text-black"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4 ">
              <div className="flex flex-col gap-2">
                <label className="text-slate-500 text-[1rem]">
                  Thời trả nhận xe
                </label>
                <input
                  type="date"
                  value={rentalPeriod.endDate.toISOString().slice(0, 10)}
                  onChange={handleChangeEndTime}
                  className="border  m-2 rounded-lg bg-transparent border-slate-300 p-[12px] font-semibold text-[1.2rem] focus:outline-none cursor-pointer text-black"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="endTime" className="text-slate-500 text-[1rem]">
                  Giờ trả xe
                </label>
                <input
                  type="time"
                  onChange={handleEndTime}
                  value={renRalTime.endTime}
                  id="endTime"
                  className="border  m-2 rounded-lg bg-transparent border-slate-300 p-[12px] font-semibold text-[1.2rem] focus:outline-none cursor-pointer text-black"
                />
              </div>
            </div>
            <div className="flex mx-2  justify-between my-8 items-center border rounded-lg p-3">
              <p className="text-slate-500 text-[1rem]">Số ngày thuê:</p>
              <p className=" text-[1rem] font-semibold text-red-500 ">
                {days} Ngày
              </p>
            </div>
            <div className="flex mx-2  justify-between my-8 items-center border rounded-lg p-3">
              <p className="text-slate-500 text-[1rem]">Thời gian thuê:</p>
              <p className=" text-[1rem] font-semibold text-red-500">
                {rentalPeriod.startDate?.toLocaleDateString()} {"-"}{" "}
                {rentalPeriod.endDate?.toLocaleDateString()}
              </p>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-[12px] w-full lg:w-[48%] mt-3  mx-2 active:motion-preset-fade rounded-xl  bottom-1 left-0 py-[14px]"
          >
            Tiếp tục
          </button>
          <ToastContainer />
          {/* <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Button</Button>
        </DrawerTrigger>
        <DrawerContent>
          <p>Total ngày thuê {days}</p>
          <p>Time nhận xe {renRalTime.startTime}</p>
          <p>Time return xe {renRalTime.endTime}</p>
        </DrawerContent>
      </Drawer> */}
        </div>
      </div>
    </>
  );
};

export default TimeCarRental;
