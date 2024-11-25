import React from "react";
import WrapContainer from "@/components/wrapContainer/wrapContainer";
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { SiGoogleanalytics } from "react-icons/si";
import { CiWarning } from "react-icons/ci";
import { BiSolidDiscount } from "react-icons/bi";
import { MdNavigateNext } from "react-icons/md";
import { TbEaseInOutControlPoints } from "react-icons/tb";
import { IoBatteryCharging } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { MdOutlineGpsFixed } from "react-icons/md";
import { GiTransparentSlime } from "react-icons/gi";
import { MdOutlineToll } from "react-icons/md";
import { IoIosBluetooth } from "react-icons/io";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsUsbPlug } from "react-icons/bs";
import { MdOutlineScreenRotation } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
const Page = () => {
  return (
    <section className="">
      <WrapContainer>
        <div className="cover-car p-5">
          <div className="cover-imageContainer md:flex gap-4">
            <div className="image-main">
              <img
                src="/imageMain.jpg"
                alt=""
                className="rounded-2xl object-cover opacity-90 hover:opacity-100 duration-300 transition-all cursor-pointer"
              />
            </div>
            <div className="sub-image hidden md:flex flex-col gap-2">
              <div className="item-image">
                <img
                  src="/sub2.jpg"
                  alt=""
                  className="rounded-2xl lg:h-[225px] md:h-[140px] opacity-90 hover:opacity-100 duration-300 transition-all cursor-pointer lg:w-[370px] object-cover w-[350px]"
                />
              </div>
              <div className="item-image">
                <img
                  src="/sub2.jpg"
                  alt=""
                  className="rounded-2xl lg:h-[225px] md:h-[140px] opacity-90 hover:opacity-100 duration-300 transition-all cursor-pointer lg:w-[370px] object-cover w-[350px]"
                />
              </div>
              <div className="item-image">
                <img
                  src="/sub3.jpg"
                  alt=""
                  className="rounded-2xl lg:h-[225px] md:h-[140px] opacity-90 hover:opacity-100 duration-300 transition-all cursor-pointer lg:w-[370px] object-cover w-[350px]"
                />
              </div>
            </div>
            {/* <div className='see-more_image'></div> */}
          </div>
          <div className="name-car mt-4">
            <div className=" flex flex-col justify-between md:flex-row gap-4">
              <div className="info_left md:w-[75%]">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[1.2rem] lg:text-[2rem] font-bold">
                      TOYOTA INNOVA 2016
                    </h2>
                    <div className="share-save flex items-center gap-3">
                      <MdOutlineShare className="text-[1.4rem] cursor-pointer lg:text-[2rem] font-[500] text-blue-600" />
                      <FaRegHeart className="text-[1.4rem] cursor-pointer lg:text-[2rem] text-blue-600" />
                    </div>
                  </div>
                  <div className="info flex items-center gap-2 mt-3">
                    <div className="wrap-iconStar mr-1">
                      <CiStar className="fill-yellow-500 " />
                    </div>
                    <span className="number-star text-[#767676] font-[500] text[.75rem] mr-1">
                      5.0
                    </span>
                    <div className="wrap-analytics">
                      <SiGoogleanalytics className="text-[#5fcf86] mr-1" />
                    </div>
                    <span className="text-[#767676] font-[500] text-[13px] lg:text-[1rem]">
                      100 + Chuyến
                    </span>
                    <span className="text-[#767676] font-[500] text-[13px] lg:text-[1rem]">
                      Quận 4, TP. Hồ Chí Minh
                    </span>
                  </div>
                </div>
              </div>
              <div className="info_right md:w-[25%]">
                <div className="flex items-baseline gap-2">
                  <div>
                    <img src="/insurance-polish.f54e308a.svg" alt="" />
                  </div>
                  <div>
                    <h5 className="text-[#007aff] text-[1.25rem]">
                      Bảo hiểm thuê xe
                    </h5>
                    <span className="text-[.8rem] text-slate-500">
                      Chuyến đi có mua bảo hiểm. Khách thuê bồi thường tối đa
                      2.000.000 VNĐ trong trường hợp có sự cố ngoài ý muốn.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex gap-4">
            <div className="carDetail  mt-8 order-1 lg:order-2 lg:w-[25%]">
              <div className="price flex flex-col gap-2">
                <div className="price-discount flex gap-2 items-center mb-2">
                  <del className="original text-[#c6c6c6]">689K</del>
                  <div className="discount">
                    <span className="px-2 py-1 bg-orange-600 text-black font-semibold rounded-xl">
                      20%
                    </span>
                  </div>
                </div>
                <h4 className="flex items-baseline gap-2">
                  <span className="font-bold text-[2rem]">600</span>
                  <span className="text-slate-500 text-[1.25rem]"> /ngày</span>
                </h4>
              </div>
              <div className="time-form-date border mt-6 border-orange-500 px-2 items-center flex justify-between rounded-2xl">
                <div className="form-item w-[45%]">
                  <label className="rentalStartDate mb-2 text-slate-500 text-[1rem] cursor-pointer">
                    Nhận xe
                  </label>
                  <div className="wrap-date-time flex  justify-between">
                    <div className="wrap-date">
                      <span className="font-semibold text-[0.88rem]">
                        10/11/2024
                      </span>
                    </div>
                    <div className="wrap-time">
                      <span className="font-semibold text-[0.88rem]">
                        21:00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="line h-[60px] w-[1px] bg-orange-400"></div>
                <div className="form-item w-[45%]">
                  <label className="rentalStartDate mb-2 text-slate-500 text-[1rem] cursor-pointer">
                    Trả xe
                  </label>
                  <div className="wrap-date-time flex items-center  justify-between">
                    <div className="wrap-date">
                      <span className="font-semibold text-[0.88rem]">
                        10/11/2024
                      </span>
                    </div>
                    <div className="wrap-time">
                      <span className="font-semibold text-[0.88rem]">
                        21:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <CiWarning className="text-[1.5rem] text-red-500" />
                <span className="text-[.8rem] text-red-500">
                  Xe bận trong khoảng thời gian trên. Vui lòng đặt xe khác hoặc
                  thay đổi lịch trình thích hợp.
                </span>
              </div>
              <div className="p-3 dropdown-form gap-[15px] mt-7 border-[0.5px] border-slate-300 rounded-2xl">
                <label className="text-[#333] font-[500] text-[0.87rem]">
                  Địa điểm giao xe
                </label>
                <div className="wrap-from">
                  <span className="address font-[600] text-[1rem]">
                    Quận 4, TP. Hồ Chí Minh
                  </span>
                </div>
                <p className="note text-[.88rem] text-[#333]">
                  Rất tiếc, chủ xe không hỗ trợ giao xe tận nơi
                </p>
              </div>
              <div className="p-3 dropdown-form gap-[20px] mt-7 border-[0.3px] border-slate-300 rounded-2xl">
                <p className=" font-[500] text-[0.87rem] flex items-center justify-between">
                  <span className="text-[#5a5959]">Đơn giá thuê</span>
                  <span className="text-[#333] font-semibold">
                    688 800đ/ ngày
                  </span>
                </p>
                <p className=" font-[500] text-[0.87rem] flex items-center justify-between">
                  <span className="text-[#5a5959]">Bảo hiểm thuê xe</span>
                  <span className="text-[#333] font-semibold">
                    688 800đ/ ngày
                  </span>
                </p>
                <p className=" font-[500] text-[0.87rem] flex items-center justify-between">
                  <span className="text-[#5a5959]">Tổng cộng</span>
                  <span className="text-[#333] font-semibold">
                    750 601đ x 1 ngày
                  </span>
                </p>
              </div>
              {/* sale */}
              <div className="p-3 dropdown-form gap-[20px] mt-7 border-[0.3px] border-slate-300 rounded-2xl">
                <div className="font-[500] text-[0.87rem] flex items-center justify-between">
                  <div className="text-[#5a5959] flex flex-col items-end gap-1">
                    <div className="flex gap-1 items-center cursor-pointer">
                      <BiSolidDiscount className="text-green-500" />
                      <span>Chương trình giảm giá</span>
                    </div>
                    <span className="pl-2 text-[12px]">
                      Giảm 120K trên đơn giá
                    </span>
                  </div>
                  <span className="text-[#333] font-semibold">
                    120 000 <sub>vnd</sub>
                  </span>
                </div>
                <div className="font-[500] mt-3 text-[0.87rem] flex items-center justify-between">
                  <div className="text-[#5a5959] flex flex-col items-end gap-1">
                    <div className="flex gap-1 items-center cursor-pointer">
                      <BiSolidDiscount className="text-green-500" />
                      <span>Code giảm giá</span>
                    </div>
                  </div>
                  <span className="text-[#333] font-semibold">
                    <MdNavigateNext className="text-[1.4rem] cursor-pointer" />
                  </span>
                </div>
              </div>
              {/* total price  */}
              <div className="total-price items-center mt-4 flex justify-between">
                <p className="text-[1rem] font-bold">Thành tiền</p>
                <p className="cost">
                  <span className="text-[1rem] font-bold">
                    600 230 <sub>vnd</sub>
                  </span>
                </p>
              </div>
              <div className="submit-rental mt-3">
                <button className="bg-slate-300/80 w-full hover:bg-blue-500/80 hover:text-white duration-300 transition-all text-slate-400 font-bold rounded-xl p-[12px] cursor-pointer">
                  Chọn thuê
                </button>
              </div>
            </div>
            <div className="order-2 lg:order-1 lg:w-[75%]">
              <div className="content-detail mt-10">
                <div className="inforDetail">
                  <h6 className="font-semibold text-[1.25rem]">Đặc điểm</h6>
                  <div className="flex justify-between  mt-4">
                    <div className="flex flex-col gap-3">
                      <TbEaseInOutControlPoints className="text-[2rem] text-blue-500" />
                      <span className=" text-[0.7rem] text-[#767676] transition">
                        Chuyển động
                      </span>
                      <p className="font-semibold">Số sàn</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <MdAirlineSeatReclineNormal className="text-[2rem] text-blue-500" />
                      <span className=" text-[0.7rem] text-[#767676] number-of-seats">
                        Số ghế
                      </span>
                      <p className="font-semibold">5 chỗ</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <BsFillFuelPumpFill className="text-[2rem] text-blue-500" />
                      <span className=" text-[0.7rem] text-[#767676] fuel">
                        Nhiên liệu
                      </span>
                      <p className="font-semibold">Xăng</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <IoBatteryCharging className="text-[2rem] text-blue-500" />
                      <span className=" text-[0.7rem] text-[#767676] consumption">
                        Tiêu hao
                      </span>
                      <p className="font-semibold">1h/100km</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="description mt-10">
                <h6 className="font-semibold text-[1.25rem]">Mô tả</h6>
                <p className="py-3 text-[1rem] text-[#767676]">
                  TOYOTA INNOVA E 2016
                </p>
              </div>
              {/*  */}
              <div className="description mt-10">
                <h6 className="font-semibold text-[1.25rem]">
                  Các tiện nghi khác
                </h6>
                <ul className="py-3 text-[0.9rem] flex flex-wrap lg:flex-row flex-col gap-4 text-[#767676]">
                  <li className="flex items-center gap-2">
                    {" "}
                    <FaMapMarkedAlt className="text-[1.12rem]"/>
                    <span className="text-[1.25rem]">Bản đồ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <FaCamera className="text-[1.12rem]"/>
                    <span className="text-[1.25rem]">Camera lùi</span>{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdOutlineGpsFixed className="text-[1.12rem]"/>
                    <span className="text-[1.25rem]">Định vị GPS</span>{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <GiTransparentSlime className="text-[1.12rem]"/>
                    <span className="text-[1.25rem] spare-tire">Lốp dự phòng</span>{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdOutlineToll className="text-[1.12rem]"/>
                    <span className="text-[1.25rem] electronic_toll_collection">ETC</span>{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <IoIosBluetooth className="text-[1.12rem]"/>
                    <span className="text-[1.25rem]">Bluetooth</span>{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <IoSpeedometerOutline className="text-[1.12rem]"/>
                    <span className="text-[1.25rem]">Cảnh báo tốc độ</span>{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <BsUsbPlug className="text-[1.12rem]"/>
                    <span className="text-[1.25rem]">Khe cắm USB</span>{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdOutlineScreenRotation className="text-[1.12rem]"/>
                    <span className="text-[1.25rem]">Màn hình DVD</span>{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <AiOutlineSafety className="text-[1.12rem]"/>
                    <span className="text-[1.25rem]">Túi khí an toàn</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </WrapContainer>
    </section>
  );
};

export default Page;
