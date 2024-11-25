"use client";
import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const ForgetPassword = ({
  handleForgetPass,
  handleShowSignUp
}: {
  handleForgetPass: () => void;
  handleShowSignUp: () => void;
}) => {
  const handleRemoveSignIn = () => {
    handleForgetPass();
  };
  const handleIsSignIn = () => {
    handleForgetPass();
    handleShowSignUp();
  };
  return (
    <div className="opacity-95 fixed top-0 left-0 w-full h-full z-[1000]  bg-black/50">
      <div className="w-[95%] mt-3 mx-auto  lg:mt-10 lg:w-[413px] lg:mx-auto  bg-white rounded-xl pt-[16px] px-[24px] pb-[32px] motion-preset-pop motion-duration-700">
        <CiCircleRemove
          onClick={handleRemoveSignIn}
          className="ml-auto font-bold text-[1.25rem] cursor-pointer"
        />
        <div className="header-title">
          <h5 className="text-center font-bold text-[1.2rem]">Quên mật khẩu</h5>
        </div>
        <form action="" className="flex flex-col gap-y-3 mt-3">
          <div className="flex flex-col gap-2">
            <label className="text-slate-500" htmlFor="phoneNumberOrEmail">
              Số điện thoại hoặc email
            </label>
            <input
              type="text"
              className="px-2 text-slate-600 py-[10px] outline-none cursor-pointer border border-slate-300 rounded-xl"
              name="phoneNumberOrEmail"
              id="phoneNumberOrEmail"
            />
          </div>

          <div className="submit-rental mt-3">
            <button
              onClick={handleIsSignIn}
              className="bg-blue-300 w-full hover:bg-blue-500/80 hover:text-white  transition-all text-blue-600 font-bold rounded-xl p-[12px] cursor-pointer"
            >
              Tiếp tục
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
