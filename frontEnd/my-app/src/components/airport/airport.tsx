"use client";
import React, { useState } from "react";
import WrapContainer from "../wrapContainer/wrapContainer";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineLocalAirport } from "react-icons/md";
interface ListAirPort {
  id: number;
  url: string;
  numberCar: number;
  name: string;
}
const listImageAirPort: ListAirPort[] = [
  {
    id: 1,
    url: "/address/NGXIIKNY.jpg",
    name: "Sân bay Nội Bài",
    numberCar: 200
  },
  {
    id: 2,
    url: "/address/IJKX9Q3Q.jpg",
    name: "Sân bay Tân sân Nhất",
    numberCar: 145
  },
  {
    id: 3,
    url: "/address/I2C3CQ64.jpg",
    name: "Sân bay Tân sân Nhất",
    numberCar: 345
  },
  {
    id: 4,
    url: "/address/IH8BGVXP.jpg",
    name: "Sân bay Tân sân Nhất",
    numberCar: 234
  },
  {
    id: 5,
    url: "/address/IH8BGVXP.jpg",
    name: "Sân bay Tân sân Nhất",
    numberCar: 234
  }
];
const Airport = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const justLookImg = 4;
  const totalImg = listImageAirPort.length;
  const maxIndex = totalImg - justLookImg;
  return (
    <div className="airport pt-20">
      <div className="p-5">
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="text-[2.25rem] font-bold text-center mb-10 lg:text-start motion-preset-flomoji-🚀 ">
              Giao xe tại sân bay
            </h2>
            {/* <MdOutlineLocalAirport className="text-blue-600 text-[3rem] rotate-[72deg] cursor-pointer motion-preset-oscillate hidden lg:block" /> */}
            {/* <div className="wrap-icon hidden lg:flex items-center mt-10 ">
              <GrFormPrevious className="text-[2rem] cursor-pointer mr-10" />
              <MdNavigateNext className="text-[2rem] cursor-pointer" />
            </div> */}
          </div>
          <div className="items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 mt-[20px] md:mt-0 lg:grid-cols-5 gap-6 transition-transform duration-500 ease-in-out ">
              {listImageAirPort.map((item) => (
                <div key={item.id} className="box ">
                  <div className="img">
                    <img
                      src={item.url}
                      alt={item.name}
                      className="rounded-full w-[100px] h-[100px] mx-auto cursor-pointer hover:scale-110 duration-300 transition-all"
                    />
                  </div>
                  <div className="name mt-4">
                    <h6 className="text-center text-[0.8rem] lg:text-[1rem]  font-[400] lg:font-[600]">
                      {item.name}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airport;
