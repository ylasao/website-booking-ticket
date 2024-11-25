import React from "react";
import WrapContainer from "@/components/wrapContainer/wrapContainer";
import { FaCarOn } from "react-icons/fa6";

import { FaCrown } from "react-icons/fa";
const Page = () => {
  return (
    <section className="profile">
      <WrapContainer>
        <div className="account p-5">
          <div className="title">
            <h5 className="font-semibold text-[1.4rem] lg:text-[2.5rem] text-center text-black/90">
              Thông tin tài khoản
            </h5>
          </div>
          <div className="content mt-10 flex flex-col lg:flex-row justify-between items-center">
            <div className="avatar-box flex flex-col justify-center gap-2">
              <div className="img  overflow-hidden">
                <img
                  src="/bg-landingpage-1.34e13e49.png"
                  className="rounded-full cursor-pointer m-auto w-[100px] h-[100px] object-cover motion-preset-slide-right motion-duration-1000 motion-delay-[400ms]"
                  alt=""
                />
              </div>
              <div className="name text-center">
                <p className="text-[1.25rem] font-semibold text-black/60 motion-preset-slide-right motion-duration-1000 motion-delay-[500ms]">
                  Nguyen Van Thanh
                </p>
              </div>
              <div className="join text-center">
                <span className="text-[0.9rem] text-slate-400 motion-preset-slide-right motion-duration-1000 motion-delay-[600ms]">
                  Tham gia từ năm 2022
                </span>
              </div>
              <div className="story flex items-center justify-center gap-2 motion-preset-slide-right motion-duration-1000 motion-delay-[700ms]">
                <FaCarOn className="text-blue-500" />
                <span className="text-[1.25rem]">10 Chuyến</span>
              </div>
            </div>
            <div className="info mt-10">
              <div className="owner flex items-center justify-between">
                <div className="flex flex-col text-center gap-2motion-preset-slide-right motion-duration-1000  motion-delay-[800ms] lg:motion-delay-[400ms] ">
                  <p className="text-[0.9rem] ">Tỉ lệ phản hồi</p>
                  <span className="font-semibold">100%</span>
                </div>
                <div className="flex flex-col text-center gap-2motion-preset-slide-right motion-duration-1000  motion-delay-[900ms] lg:motion-delay-[500ms]">
                  <p className="text-[0.9rem]">Thời gian phản hồi</p>
                  <span className="font-semibold">20 phút</span>
                </div>
                <div className="flex flex-col text-center gap-2motion-preset-slide-right motion-duration-1000  motion-delay-[1000ms] lg:motion-delay-[600ms]">
                  <p className="text-[0.9rem]">Tỉ lệ đồng ý</p>
                  <span className="font-semibold">87%</span>
                </div>
              </div>
              <div className="note flex gap-2 items-center mt-5motion-preset-slide-right motion-duration-1000  motion-delay-[1100ms] lg:motion-delay-[700ms]">
                <FaCrown className="text-yellow-500 text-[1.45rem]" />
                <span className="text-[0.8rem] text-slate-400">
                  Chủ xe 5* có thời gian phản hồi nhanh chóng, tỉ lệ đồng ý cao,
                  mức giá cạnh tranh & dịch vụ nhận được nhiều đánh giá tốt từ
                  khách hàng.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:motion-delay-[800ms] motion-delay-[1100ms] listCar mt-10 motion-preset-slide-right motion-duration-700">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="">
                <h5 className="text-[1.32rem] font-bold lg:text-[2.25rem]">
                  Danh sách xe
                </h5>
              </div>
              <div className="flex items-center lg:ml-10  justify-around mt-4 lg:gap-5">
                <div className="tag-item p-[12px] font-semibold border-b-[2px]  cursor-pointer hover:border-b-blue-500 duration-300 transition-all border-b-blue-300 ">
                  Có tài Xế
                </div>
                <div className="tag-item p-[12px] font-semibold border-b-[2px]  cursor-pointer hover:border-b-blue-500 duration-300 transition-all border-b-blue-300 ">
                  Tự lái
                </div>
              </div>
            </div>
            <div className="content">
              <div className="flex text-center flex-col gap-2">
                <img
                  src="/empty-mycar.e023e681.svg"
                  width="200"
                  className="mx-auto"
                />
                <span>Không có sản phẩm nào.</span>
              </div>
            </div>
          </div>
        </div>
      </WrapContainer>
    </section>
  );
};

export default Page;
