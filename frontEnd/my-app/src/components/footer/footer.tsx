import React from "react";
import WrapContainer from "../wrapContainer/wrapContainer";
const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="bg-blue-600 h-[2px] w-full"></div>
      <WrapContainer>
        <div className="p-5 lg:flex justify-between gap-3">
          <div className="">
            <h5 className="text-[1rem] font-semibold mb-[32px]">Chính Sách</h5>
            <ul className="block">
              <li className="text-slate-500 text-[0.9rem] my-2">
                Chính sách và quy định
              </li>
              <li className="text-slate-500 text-[0.9rem] my-2">
                Quy chế hoạt động
              </li>
              <li className="text-slate-500 text-[0.9rem] my-2">
                Bảo mật thông tin
              </li>
              <li className="text-slate-500 text-[0.9rem] my-2">
                Giải quyết tranh chấp
              </li>
            </ul>
          </div>
          <div className="lg:flex mt-10 gap-3 lg:mt-0">
            <h5 className="text-[1rem] font-semibold mb-[32px]">
              Phương thức thanh toán
            </h5>
            <div className="">
              <ul className=" flex gap-4 items-center">
                <li>
                  <img
                    className="lg:w-[100px] w-[50px] h-[50px] lg:h-[100px] border border-blue-400  rounded-2xl"
                    src="/alepay.bb769e5d.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="lg:w-[100px] w-[50px] h-[50px] lg:h-[100px]  border border-red-400 rounded-2xl"
                    src="/vtmoney.d7ef81b9.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="lg:w-[100px] w-[50px] h-[50px] lg:h-[100px]"
                    src="/vnpay.780689d6.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="lg:w-[100px] w-[50px] h-[50px] lg:h-[100px]"
                    src="/download.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="lg:w-[100px] w-[50px] h-[50px] lg:h-[100px]"
                    src="/download (2).png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="lg:w-[100px] w-[50px] h-[50px] lg:h-[100px]"
                    src="/download (1).png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </WrapContainer>
    </footer>
  );
};

export default Footer;
