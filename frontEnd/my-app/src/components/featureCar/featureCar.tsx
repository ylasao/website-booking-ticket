import React from "react";
import WrapContainer from "../wrapContainer/wrapContainer";
import { CiStar } from "react-icons/ci";
import { SiGoogleanalytics } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
const FeatureCar = () => {
  return (
    <section className="feature_car">
      <WrapContainer>
        <div className="p-5">
          <h2 className="text-center mb-[32px] text-[2rem] md:text-[2.25rem] font-bold">
            Xe Dành Cho Bạn
          </h2>
          <div className="container-car grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/*  */}
            <div className="box flex flex-col  ">
              <Link
                href="/car/3tzuvcW_2ym0eCuolXVKyw"
                className="img relative overflow-hidden rounded-2xl"
              >
                <img
                  src="/car/3tzuvcW_2ym0eCuolXVKyw.jpg"
                  alt="image car"
                  className="rounded-2xl hover:scale-125 cursor-pointer duration-500 transition-all"
                />
                <button className=" absolute right-0 bottom-0 discount bg-orange-400 text-orange-700 px-2 py-1 rounded-2xl font-[300]">
                  Giảm 20%
                </button>
              </Link>
              <div className="description flex gap-2 flex-col">
                <div className="desc_tag my-4 flex gap-x-2 items-center">
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Số sàn
                  </button>
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out  px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Giao xe tận nơi
                  </button>
                </div>
                <div className="desc_name">
                  <p className="font-bold  text-[1.2rem]">
                    MITSUBISHI MIRAGE 2017
                  </p>
                </div>
                <div className="desc_address flex items-center">
                  <div className="location-icon mr-1">
                    <FaLocationDot />
                  </div>
                  <span className="text-[#767676] font-[500] text[.65rem]">
                    Quận 1 . Hồ Chí Minh
                  </span>
                </div>
                <div className="line-page w-full h-1 lg:h-2 bg-slate-300 my-3 rounded-2xl"></div>
                <div className="info-price flex justify-between items-center">
                  <div className="info flex items-center">
                    <div className="wrap-iconStar mr-1">
                      <CiStar className="fill-yellow-500 " />
                    </div>
                    <span className="number-star text-[#767676] font-[500] text[.75rem] mr-1">
                      5.0
                    </span>
                    <div className="wrap-analytics">
                      <SiGoogleanalytics className="text-[#5fcf86] mr-1" />
                    </div>
                    <span className="text-[#767676] font-[500] text[.6rem]">
                      100 + Chuyến
                    </span>
                  </div>
                  <div className="wrap-price flex items-center text-[#767676] font-[500]">
                    <span className="price text-[#767676] font-[500] text[.75rem]">
                      <span className="text-red-600 text[1rem] font-bold">
                        1500k
                      </span>
                    </span>
                    /ngày
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box flex flex-col  ">
              <div className="img relative overflow-hidden rounded-2xl">
                <img
                  src="/car/3tzuvcW_2ym0eCuolXVKyw.jpg"
                  alt="image car"
                  className="rounded-2xl hover:scale-125 cursor-pointer duration-500 transition-all"
                />
                <button className=" absolute right-0 bottom-0 discount bg-orange-400 text-orange-700 px-2 py-1 rounded-2xl font-[300]">
                  Giảm 20%
                </button>
              </div>
              <div className="description flex gap-2 flex-col">
                <div className="desc_tag my-4 flex gap-x-2 items-center">
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Số sàn
                  </button>
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out  px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Giao xe tận nơi
                  </button>
                </div>
                <div className="desc_name">
                  <p className="font-bold  text-[1.2rem]">
                    MITSUBISHI MIRAGE 2017
                  </p>
                </div>
                <div className="desc_address flex items-center">
                  <div className="location-icon mr-1">
                    <FaLocationDot />
                  </div>
                  <span className="text-[#767676] font-[500] text[.65rem]">
                    Quận 1 . Hồ Chí Minh
                  </span>
                </div>
                <div className="line-page w-full h-1 lg:h-2 bg-slate-300 my-3 rounded-2xl"></div>
                <div className="info-price flex justify-between items-center">
                  <div className="info flex items-center">
                    <div className="wrap-iconStar mr-1">
                      <CiStar className="fill-yellow-500 " />
                    </div>
                    <span className="number-star text-[#767676] font-[500] text[.75rem] mr-1">
                      5.0
                    </span>
                    <div className="wrap-analytics">
                      <SiGoogleanalytics className="text-[#5fcf86] mr-1" />
                    </div>
                    <span className="text-[#767676] font-[500] text[.6rem]">
                      100 + Chuyến
                    </span>
                  </div>
                  <div className="wrap-price flex items-center text-[#767676] font-[500]">
                    <span className="price text-[#767676] font-[500] text[.75rem]">
                      <span className="text-red-600 text[1rem] font-bold">
                        1500k
                      </span>
                    </span>
                    /ngày
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box flex flex-col  ">
              <div className="img relative overflow-hidden rounded-2xl">
                <img
                  src="/car/3tzuvcW_2ym0eCuolXVKyw.jpg"
                  alt="image car"
                  className="rounded-2xl hover:scale-125 cursor-pointer duration-500 transition-all"
                />
                <button className=" absolute right-0 bottom-0 discount bg-orange-400 text-orange-700 px-2 py-1 rounded-2xl font-[300]">
                  Giảm 20%
                </button>
              </div>
              <div className="description flex gap-2 flex-col">
                <div className="desc_tag my-4 flex gap-x-2 items-center">
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Số sàn
                  </button>
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out  px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Giao xe tận nơi
                  </button>
                </div>
                <div className="desc_name">
                  <p className="font-bold  text-[1.2rem]">
                    MITSUBISHI MIRAGE 2017
                  </p>
                </div>
                <div className="desc_address flex items-center">
                  <div className="location-icon mr-1">
                    <FaLocationDot />
                  </div>
                  <span className="text-[#767676] font-[500] text[.65rem]">
                    Quận 1 . Hồ Chí Minh
                  </span>
                </div>
                <div className="line-page w-full h-1 lg:h-2 bg-slate-300 my-3 rounded-2xl"></div>
                <div className="info-price flex justify-between items-center">
                  <div className="info flex items-center">
                    <div className="wrap-iconStar mr-1">
                      <CiStar className="fill-yellow-500 " />
                    </div>
                    <span className="number-star text-[#767676] font-[500] text[.75rem] mr-1">
                      5.0
                    </span>
                    <div className="wrap-analytics">
                      <SiGoogleanalytics className="text-[#5fcf86] mr-1" />
                    </div>
                    <span className="text-[#767676] font-[500] text[.6rem]">
                      100 + Chuyến
                    </span>
                  </div>
                  <div className="wrap-price flex items-center text-[#767676] font-[500]">
                    <span className="price text-[#767676] font-[500] text[.75rem]">
                      <span className="text-red-600 text[1rem] font-bold">
                        1500k
                      </span>
                    </span>
                    /ngày
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box flex flex-col  ">
              <div className="img relative overflow-hidden rounded-2xl">
                <img
                  src="/car/3tzuvcW_2ym0eCuolXVKyw.jpg"
                  alt="image car"
                  className="rounded-2xl hover:scale-125 cursor-pointer duration-500 transition-all"
                />
                <button className=" absolute right-0 bottom-0 discount bg-orange-400 text-orange-700 px-2 py-1 rounded-2xl font-[300]">
                  Giảm 20%
                </button>
              </div>
              <div className="description flex gap-2 flex-col">
                <div className="desc_tag my-4 flex gap-x-2 items-center">
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Số sàn
                  </button>
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out  px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Giao xe tận nơi
                  </button>
                </div>
                <div className="desc_name">
                  <p className="font-bold  text-[1.2rem]">
                    MITSUBISHI MIRAGE 2017
                  </p>
                </div>
                <div className="desc_address flex items-center">
                  <div className="location-icon mr-1">
                    <FaLocationDot />
                  </div>
                  <span className="text-[#767676] font-[500] text[.65rem]">
                    Quận 1 . Hồ Chí Minh
                  </span>
                </div>
                <div className="line-page w-full h-1 lg:h-2 bg-slate-300 my-3 rounded-2xl"></div>
                <div className="info-price flex justify-between items-center">
                  <div className="info flex items-center">
                    <div className="wrap-iconStar mr-1">
                      <CiStar className="fill-yellow-500 " />
                    </div>
                    <span className="number-star text-[#767676] font-[500] text[.75rem] mr-1">
                      5.0
                    </span>
                    <div className="wrap-analytics">
                      <SiGoogleanalytics className="text-[#5fcf86] mr-1" />
                    </div>
                    <span className="text-[#767676] font-[500] text[.6rem]">
                      100 + Chuyến
                    </span>
                  </div>
                  <div className="wrap-price flex items-center text-[#767676] font-[500]">
                    <span className="price text-[#767676] font-[500] text[.75rem]">
                      <span className="text-red-600 text[1rem] font-bold">
                        1500k
                      </span>
                    </span>
                    /ngày
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="box flex flex-col  ">
              <div className="img relative overflow-hidden rounded-2xl">
                <img
                  src="/car/3tzuvcW_2ym0eCuolXVKyw.jpg"
                  alt="image car"
                  className="rounded-2xl hover:scale-125 cursor-pointer duration-500 transition-all"
                />
                <button className=" absolute right-0 bottom-0 discount bg-orange-400 text-orange-700 px-2 py-1 rounded-2xl font-[300]">
                  Giảm 20%
                </button>
              </div>
              <div className="description flex gap-2 flex-col">
                <div className="desc_tag my-4 flex gap-x-2 items-center">
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Số sàn
                  </button>
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out  px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Giao xe tận nơi
                  </button>
                </div>
                <div className="desc_name">
                  <p className="font-bold  text-[1.2rem]">
                    MITSUBISHI MIRAGE 2017
                  </p>
                </div>
                <div className="desc_address flex items-center">
                  <div className="location-icon mr-1">
                    <FaLocationDot />
                  </div>
                  <span className="text-[#767676] font-[500] text[.65rem]">
                    Quận 1 . Hồ Chí Minh
                  </span>
                </div>
                <div className="line-page w-full h-1 lg:h-2 bg-slate-300 my-3 rounded-2xl"></div>
                <div className="info-price flex justify-between items-center">
                  <div className="info flex items-center">
                    <div className="wrap-iconStar mr-1">
                      <CiStar className="fill-yellow-500 " />
                    </div>
                    <span className="number-star text-[#767676] font-[500] text[.75rem] mr-1">
                      5.0
                    </span>
                    <div className="wrap-analytics">
                      <SiGoogleanalytics className="text-[#5fcf86] mr-1" />
                    </div>
                    <span className="text-[#767676] font-[500] text[.6rem]">
                      100 + Chuyến
                    </span>
                  </div>
                  <div className="wrap-price flex items-center text-[#767676] font-[500]">
                    <span className="price text-[#767676] font-[500] text[.75rem]">
                      <span className="text-red-600 text[1rem] font-bold">
                        1500k
                      </span>
                    </span>
                    /ngày
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box flex flex-col  ">
              <div className="img relative overflow-hidden rounded-2xl">
                <img
                  src="/car/3tzuvcW_2ym0eCuolXVKyw.jpg"
                  alt="image car"
                  className="rounded-2xl hover:scale-125 cursor-pointer duration-500 transition-all"
                />
                <button className=" absolute right-0 bottom-0 discount bg-orange-400 text-orange-700 px-2 py-1 rounded-2xl font-[300]">
                  Giảm 20%
                </button>
              </div>
              <div className="description flex gap-2 flex-col">
                <div className="desc_tag my-4 flex gap-x-2 items-center">
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Số sàn
                  </button>
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out  px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Giao xe tận nơi
                  </button>
                </div>
                <div className="desc_name">
                  <p className="font-bold  text-[1.2rem]">
                    MITSUBISHI MIRAGE 2017
                  </p>
                </div>
                <div className="desc_address flex items-center">
                  <div className="location-icon mr-1">
                    <FaLocationDot />
                  </div>
                  <span className="text-[#767676] font-[500] text[.65rem]">
                    Quận 1 . Hồ Chí Minh
                  </span>
                </div>
                <div className="line-page w-full h-1 lg:h-2 bg-slate-300 my-3 rounded-2xl"></div>
                <div className="info-price flex justify-between items-center">
                  <div className="info flex items-center">
                    <div className="wrap-iconStar mr-1">
                      <CiStar className="fill-yellow-500 " />
                    </div>
                    <span className="number-star text-[#767676] font-[500] text[.75rem] mr-1">
                      5.0
                    </span>
                    <div className="wrap-analytics">
                      <SiGoogleanalytics className="text-[#5fcf86] mr-1" />
                    </div>
                    <span className="text-[#767676] font-[500] text[.6rem]">
                      100 + Chuyến
                    </span>
                  </div>
                  <div className="wrap-price flex items-center text-[#767676] font-[500]">
                    <span className="price text-[#767676] font-[500] text[.75rem]">
                      <span className="text-red-600 text[1rem] font-bold">
                        1500k
                      </span>
                    </span>
                    /ngày
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box flex flex-col  ">
              <div className="img relative overflow-hidden rounded-2xl">
                <img
                  src="/car/3tzuvcW_2ym0eCuolXVKyw.jpg"
                  alt="image car"
                  className="rounded-2xl hover:scale-125 cursor-pointer duration-500 transition-all"
                />
                <button className=" absolute right-0 bottom-0 discount bg-orange-400 text-orange-700 px-2 py-1 rounded-2xl font-[300]">
                  Giảm 20%
                </button>
              </div>
              <div className="description flex gap-2 flex-col">
                <div className="desc_tag my-4 flex gap-x-2 items-center">
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Số sàn
                  </button>
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out  px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Giao xe tận nơi
                  </button>
                </div>
                <div className="desc_name">
                  <p className="font-bold  text-[1.2rem]">
                    MITSUBISHI MIRAGE 2017
                  </p>
                </div>
                <div className="desc_address flex items-center">
                  <div className="location-icon mr-1">
                    <FaLocationDot />
                  </div>
                  <span className="text-[#767676] font-[500] text[.65rem]">
                    Quận 1 . Hồ Chí Minh
                  </span>
                </div>
                <div className="line-page w-full h-1 lg:h-2 bg-slate-300 my-3 rounded-2xl"></div>
                <div className="info-price flex justify-between items-center">
                  <div className="info flex items-center">
                    <div className="wrap-iconStar mr-1">
                      <CiStar className="fill-yellow-500 " />
                    </div>
                    <span className="number-star text-[#767676] font-[500] text[.75rem] mr-1">
                      5.0
                    </span>
                    <div className="wrap-analytics">
                      <SiGoogleanalytics className="text-[#5fcf86] mr-1" />
                    </div>
                    <span className="text-[#767676] font-[500] text[.6rem]">
                      100 + Chuyến
                    </span>
                  </div>
                  <div className="wrap-price flex items-center text-[#767676] font-[500]">
                    <span className="price text-[#767676] font-[500] text[.75rem]">
                      <span className="text-red-600 text[1rem] font-bold">
                        1500k
                      </span>
                    </span>
                    /ngày
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box flex flex-col  ">
              <div className="img relative overflow-hidden rounded-2xl">
                <img
                  src="/car/3tzuvcW_2ym0eCuolXVKyw.jpg"
                  alt="image car"
                  className="rounded-2xl hover:scale-125 cursor-pointer duration-500 transition-all"
                />
                <button className=" absolute right-0 bottom-0 discount bg-orange-400 text-orange-700 px-2 py-1 rounded-2xl font-[300]">
                  Giảm 20%
                </button>
              </div>
              <div className="description flex gap-2 flex-col">
                <div className="desc_tag my-4 flex gap-x-2 items-center">
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Số sàn
                  </button>
                  <button className="hover:bg-blue-200 transition-all duration-300 ease-in-out  px-2 py-1 rounded-xl font-[300] border border-slate-300 bg-slate-200 text-blue-400">
                    Giao xe tận nơi
                  </button>
                </div>
                <div className="desc_name">
                  <p className="font-bold  text-[1.2rem]">
                    MITSUBISHI MIRAGE 2017
                  </p>
                </div>
                <div className="desc_address flex items-center">
                  <div className="location-icon mr-1">
                    <FaLocationDot />
                  </div>
                  <span className="text-[#767676] font-[500] text[.65rem]">
                    Quận 1 . Hồ Chí Minh
                  </span>
                </div>
                <div className="line-page w-full h-1 lg:h-2 bg-slate-300 my-3 rounded-2xl"></div>
                <div className="info-price flex justify-between items-center">
                  <div className="info flex items-center">
                    <div className="wrap-iconStar mr-1">
                      <CiStar className="fill-yellow-500 " />
                    </div>
                    <span className="number-star text-[#767676] font-[500] text[.75rem] mr-1">
                      5.0
                    </span>
                    <div className="wrap-analytics">
                      <SiGoogleanalytics className="text-[#5fcf86] mr-1" />
                    </div>
                    <span className="text-[#767676] font-[500] text[.6rem]">
                      100 + Chuyến
                    </span>
                  </div>
                  <div className="wrap-price flex items-center text-[#767676] font-[500]">
                    <span className="price text-[#767676] font-[500] text[.75rem]">
                      <span className="text-red-600 text[1rem] font-bold">
                        1500k
                      </span>
                    </span>
                    /ngày
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </WrapContainer>
    </section>
  );
};

export default FeatureCar;
