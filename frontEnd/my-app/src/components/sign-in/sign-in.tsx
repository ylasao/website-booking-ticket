"use client";
import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SignIn = ({ handleSignIn }: { handleSignIn: () => void }) => {
  const handleRemoveSignIn = () => {
    handleSignIn();
  };
  return (
    <div className="opacity-95 fixed top-0 left-0 w-full h-full z-[1000]  bg-black/50">
      <div className="w-[95%] mt-3 mx-auto  lg:mt-10 lg:w-[513px] lg:mx-auto  bg-white rounded-xl pt-[16px] px-[24px] pb-[32px] motion-preset-pop motion-duration-700">
        <CiCircleRemove
          onClick={handleRemoveSignIn}
          className="ml-auto font-bold text-[1.25rem] cursor-pointer"
        />
        <div className="header-title">
          <h5 className="text-center font-bold text-[1.2rem]">Đăng ký</h5>
        </div>
        <form action="" className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-2">
            <label className="text-[#767676] font-semibold" htmlFor="phoneNumber">
              Số điện thoại
            </label>
            <input
              type="text"
              className="px-2 text-slate-600 py-[10px] outline-none cursor-pointer border border-slate-300 rounded-xl"
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#767676] font-semibold" htmlFor="name">
              Tên hiển thị
            </label>
            <input
              type="text"
              className="px-2 text-slate-600 py-[10px] outline-none cursor-pointer border border-slate-300 rounded-xl"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#767676] font-semibold" htmlFor="password">
              Mật khẩu
            </label>
            <input
              type="text"
              className="px-2 text-[#767676] font-semibold py-[10px] outline-none cursor-pointer border border-slate-300 rounded-xl"
              name="password"
              id="password"
            />
          </div>
          <div className="submit-rental mt-3">
            <button className="bg-blue-300 w-full hover:bg-blue-500/80 hover:text-white  transition-all text-blue-600 font-bold rounded-xl p-[12px] cursor-pointer">
              Đăng ký
            </button>
          </div>
          <div className="flex items-center mt-4 gap-3">
            <button className="border-slate-300 flex items-center w-full border justify-evenly  hover:border-blue-500/90 duration-300 transition-all text-black opacity-95  hover:opacity-100 font-bold rounded-xl p-[12px] cursor-pointer">
              <FaFacebookF className="text-blue-500" />
              <span>Facebook</span>
            </button>
            <button className="border-slate-300 border w-full flex items-center justify-evenly  hover:border-blue-500/90 duration-300 transition-all text-black opacity-95  hover:opacity-100 font-bold rounded-xl p-[12px] cursor-pointer">
              <FcGoogle />
              <span>Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
