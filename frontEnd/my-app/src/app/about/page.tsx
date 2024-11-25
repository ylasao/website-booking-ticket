import React from "react";
import WrapContainer from "@/components/wrapContainer/wrapContainer";
const Page = () => {
  return (
    <section>
      <WrapContainer>
        <div className="mt-10 p-5">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <h1 className="md:text-[2.25rem] text-center font-bold lg:text-[3.5rem] lg:w-[60%] motion-preset-slide-left motion-duration-1000 motion-delay-[400ms]">
              <span className="bg-blue-400 py-1 px-3 rounded-xl text-white !text-[2.5rem] lg:w-[40%]">
                3H1D
              </span>{" "}
              Cùng bạn đến mọi hành trình
            </h1>
            <div className="flex flex-col  gap-3">
              <p className="text-[1rem] text-slate-500 motion-preset-slide-right motion-duration-1000 motion-delay-[500ms]">
                Mỗi chuyến đi là một hành trình khám phá cuộc sống và thế giới
                xung quanh, là cơ hội học hỏi và chinh phục những điều mới lạ
                của mỗi cá nhân để trở nên tốt hơn. Do đó, chất lượng trải
                nghiệm của khách hàng là ưu tiên hàng đầu và là nguồn cảm hứng
                của đội ngũ 3H1D.
              </p>
              <p className="text-[1rem] text-slate-500 motion-preset-slide-right motion-duration-1000 motion-delay-[600ms]">
                3H1D là nền tảng chia sẻ ô tô, sứ mệnh của chúng tôi không chỉ
                dừng lại ở việc kết nối chủ xe và khách hàng một cách Nhanh
                chóng - An toàn - Tiện lợi, mà còn hướng đến việc truyền cảm
                hứng KHÁM PHÁ những điều mới lạ đến cộng đồng qua những chuyến
                đi trên nền tảng của chúng tôi.
              </p>
            </div>
          </div>
          <div className="containerImg mt-10 motion-preset-slide-left motion-duration-1000 motion-delay-[800ms]">
            <div className="">
              <img
                src="/bg_bottom.ecb6fcdb.png"
                alt=""
                className="rounded-[20px] h-[300px] lg:h-auto object-cover bg-center bg-cover"
              />
            </div>
          </div>
        </div>
      </WrapContainer>
    </section>
  );
};

export default Page;
