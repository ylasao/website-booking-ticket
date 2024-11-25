"use client";
import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Register = ({
  handleHiddenRegister
}: {
  handleHiddenRegister: () => void;
}) => {
  const handleRemoveSignIn = () => {
    handleHiddenRegister();
  };
  return (
    <div className="opacity-95 fixed top-0 left-0 w-full h-full z-[1000] bg-black/50">
      <div className="w-[95%] mt-3 mx-auto  lg:mt-10 lg:w-[555px] lg:mx-auto  bg-white rounded-xl pt-[16px] px-[24px] pb-[32px] motion-preset-pop motion-duration-700">
        <CiCircleRemove
          onClick={handleRemoveSignIn}
          className="ml-auto font-bold text-[1.25rem] cursor-pointer"
        />
        <div className="header-title flex flex-col gap-3">
          <h5 className="text-center text-blue-500  font-bold text-[1.2rem]">
            Đăng ký xe cho thuê
          </h5>
          <span className="text-[0.8rem] text-slate-400 text-center">
            Bạn vui lòng điền đầy đủ thông tin, MIOTO sẽ liên hệ vói bạn trong
            vòng một ngày làm việc.
          </span>
        </div>
        <form action="" className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-2">
            <label
              className="text-[#767676] font-semibold "
              htmlFor="phoneNumber"
            >
              Khu vực cho thuê
            </label>
            <input
              type="text"
              className="px-2 text-slate-600 py-[10px] outline-none cursor-pointer border border-slate-300 rounded-xl"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Chọn khu vực"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <label className="text-[#767676] font-semibold" htmlFor="name">
                Tên chủ xe*
              </label>
              <select
                className="px-2 text-slate-600 py-[10px] outline-none cursor-pointer border border-slate-300 rounded-xl"
                name="name"
                id="name"
              >
                <option className=" text-slate-600" value="default">
                  Tên xe của bạn
                </option>
                <option className=" text-slate-600" value="HCM">
                  Hồ Chí Minh
                </option>
                <option className=" text-slate-600" value="HaNoi">
                  Hà Nội
                </option>
                <option className=" text-slate-600" value="Danang">
                  Đà nẵng
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#767676] font-semibold" htmlFor="name">
                Số di động*
              </label>
              <input
                type="text"
                className="px-2 text-slate-600 py-[10px] outline-none cursor-pointer border border-slate-300 rounded-xl"
                name="name"
                id="name"
                placeholder="Số của bạn"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#767676] font-semibold" htmlFor="password">
              Xe cho thuê
            </label>
            <input
              type="text"
              className="px-2 text-slate-600 py-[10px] outline-none cursor-pointer border border-slate-300 rounded-xl"
              name="password"
              id="password"
              placeholder="Loại xe của bạn"
            />
          </div>
          <div className="submit-rental mt-3">
            <button className="bg-blue-300 w-full hover:bg-blue-500/80 hover:text-white  transition-all text-blue-600 font-bold rounded-xl p-[12px] cursor-pointer">
              Gửi đến chúng tôi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
