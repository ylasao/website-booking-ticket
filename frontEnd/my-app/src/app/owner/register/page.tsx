"use client";
import React, { useState } from "react";
import Register from "@/components/register/register";
const Page = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const handleRegister = () => {
    setIsRegister(!isRegister)
  };
  const handleHiddenRegister = () => {
    setIsRegister(!isRegister)
  }
  return (
    <>
      {isRegister ?( <Register handleHiddenRegister={handleHiddenRegister}/>) : null}

      <div className="relative">
        <img
          className="object-cover w-full h-[400px] lg:h-auto bg-center bg-cover  "
          src="/bg_bottom.ecb6fcdb.png"
          alt=""
        />
        <div className="absolute lg:right-40 m-2 lg:bottom-40 right-0 bottom-0  flex flex-col gap-3">
          <h1 className="text-[1.25rem] md:text-[2rem] lg:text-[2.35rem] text-white font-bold  motion-preset-slide-right motion-duration-1000 motion-delay-[400ms]">
            Trở thành đối tác chủ xe
          </h1>
          <h5 className="text-[0.9rem] md:text-[1rem] text-white font-semibold  motion-preset-slide-right motion-duration-1000 motion-delay-[600ms]">
            Cho thuê xe trên Mioto để gia tăng thu nhập hàng tháng và gặp gỡ
            nhiều bạn bè mới!
          </h5>
          <button
            className="px-[16px] mt-4 py-[12px] rounded-xl text-white bg-blue-500  motion-preset-slide-right motion-duration-1000 motion-delay-[800ms]"
            onClick={handleRegister}
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
