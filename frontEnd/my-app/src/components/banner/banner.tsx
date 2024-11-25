"use client";
import React from "react";
import Image from "next/image";
import { IoLogoModelS } from "react-icons/io";
import { MdCarRental } from "react-icons/md";
import WrapContainer from "../wrapContainer/wrapContainer";
import { FaTruck } from "react-icons/fa";
import { useState } from "react";
import SelfDrivingCar from "../selfDrivingCar/selfDrivingCar";
import ChauFFueRedVehicle from "../chauffuered_vehicle/chauffuered_vehicle";
import LongTermLease from "../longTermLease/longTermLease";
import TimeCarRental from "../timeCarRental/timeCarRental";
import clsx from "clsx";
interface MenuItem {
  id: Number;
  icon: React.ElementType;
  name: String;
  content: String | JSX.Element;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    icon: IoLogoModelS,
    name: "Xe tự lái",
    content: <SelfDrivingCar />
  },
  {
    id: 2,
    icon: FaTruck,
    name: "Xe có tài xế",
    content: <ChauFFueRedVehicle />
  },
  {
    id: 3,
    icon: MdCarRental,
    name: "Thuê xe dài hạn",
    content: <LongTermLease />
  }
];

const Banner = () => {
  const [isActive, setIsActive] = useState<Number>(1); 
  const handleItemClick = (id: Number) => {
    setIsActive(id);
  };
  return (
    <section className="banner"> 
      <WrapContainer>
        <div className="p-5">
          <div
            className="w-full lg:h-[600px] h-[450px] bg-cover bg-center rounded-[50px] py-[45px] flex flex-col gap-6"
            style={{ backgroundImage: `url("/bg-landingpage-1.34e13e49.png")` }}
          >
            <h1 className="md:text-[2.5rem] lg:text-[3.5rem] text-[2rem]  text-white max-w-[600px] relative text-center mx-auto">
              Cùng Bạn Đến Mọi Hành Trình
            </h1>
            <div className="line-bg mx-auto h-[1px] bg-white w-[140px] md:w-[280px]"></div>
            <h6 className="text-center mx-[24px] mb-[100px] text-[16px] text-white md:text-[1.3rem]">
              Trải nghiệm sự khác biệt từ hơn{" "}
              <strong className="text-yellow-600">10.000</strong> xe gia đình
              đời mới khắp Việt Nam
            </h6>
          </div>
          <div className="search-option relative bottom-[115px] z-3">
            <div className="option flex justify-center text-center">
              {menuItems.map((item, index) => (
                <div
                  onClick={() => handleItemClick(item.id)}
                  key={index}
                  className={clsx(
                    `option-item  md:flex text-center transition-all duration-300 ease-in-out items-center cursor-pointer gap-3 p-[16px]  bg-white  ${
                      index === 0
                        ? "rounded-tl-2xl"
                        : index === 2
                        ? "rounded-tr-2xl"
                        : "rounded-none"
                    } ${isActive === item.id ? "!bg-blue-600 " : ""}`
                  )}
                >
                  {item.icon && (
                    <item.icon
                      className={clsx(
                        `text-[#686767] m-auto text-[1.1rem  ${
                          isActive === item.id ? "!text-white" : ""
                        }`
                      )}
                    />
                  )}
                  <p
                    className={clsx(
                      `text-[14px] md:text-[1rem] text-[#686767] font-bold ${
                        isActive === item.id ? "!text-white" : ""
                      }`
                    )}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="search relative flex flex-col mx-[8px] p-4 bg-white rounded-lg ">
              {/*  */}
              {menuItems.find((item) => item.id === isActive)?.content}
              {/*  */}
              {/*  */}
            </div>
          </div>
        </div>
      </WrapContainer>
    </section>
  );
};

export default Banner;
