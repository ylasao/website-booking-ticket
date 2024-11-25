"use client";
import React, { useEffect, useState } from "react";
import WrapContainer from "../wrapContainer/wrapContainer";
import Image from "next/image";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import PromotionImage from "./promotionImage";

interface ListImagePromotion {
  id: number;
  url: string;
  content: string;
}
const listImagePromotion: ListImagePromotion[] = [
  {
    id: 1,
    url: "/7CU4CLHQ.jpg",
    content:
      "#title:🌟 Nhập mã MAZDA3 - giảm ngay 10% khi đặt xe#span:Bạn đang tìm một chiếc xe thanh lịch cho những cuộc hẹn quan trọng?#span:📲 Mở Mioto chọn ngay Mazda 3, với vẻ ngoài tinh tế, thiết kế thanh lịch đi kèm khả năng vận hành mạnh mẽ, chiếc sedan này sẽ giúp chuyến đi thêm trọn vẹn, nâng tầm trải nghiệm cho chuyến đi.#span:📲 Mở Mioto chọn ngay Mazda 3, với vẻ ngoài tinh tế, thiết kế thanh lịch đi kèm khả năng vận hành mạnh mẽ, chiếc sedan này sẽ giúp chuyến đi thêm trọn vẹn, nâng tầm trải nghiệm cho chuyến đi."
  },
  {
    id: 2,
    url: "7G5DG8RU.jpg",
    content:
      "#title:🌟 Nhập mã MAZDA3 - giảm ngay 10% khi đặt xe#span:Bạn đang tìm một chiếc xe thanh lịch cho những cuộc hẹn quan trọng?#span:📲 Mở Mioto chọn ngay Mazda 3, với vẻ ngoài tinh tế, thiết kế thanh lịch đi kèm khả năng vận hành mạnh mẽ, chiếc sedan này sẽ giúp chuyến đi thêm trọn vẹn, nâng tầm trải nghiệm cho chuyến đi.#span:📲 Mở Mioto chọn ngay Mazda 3, với vẻ ngoài tinh tế, thiết kế thanh lịch đi kèm khả năng vận hành mạnh mẽ, chiếc sedan này sẽ giúp chuyến đi thêm trọn vẹn, nâng tầm trải nghiệm cho chuyến đi."
  },
  {
    id: 3,
    url: "7XSHFW4M.jpg",
    content:
      "#title:🌟 Nhập mã MAZDA3 - giảm ngay 10% khi đặt xe#span:Bạn đang tìm một chiếc xe thanh lịch cho những cuộc hẹn quan trọng?#span:📲 Mở Mioto chọn ngay Mazda 3, với vẻ ngoài tinh tế, thiết kế thanh lịch đi kèm khả năng vận hành mạnh mẽ, chiếc sedan này sẽ giúp chuyến đi thêm trọn vẹn, nâng tầm trải nghiệm cho chuyến đi.#span:📲 Mở Mioto chọn ngay Mazda 3, với vẻ ngoài tinh tế, thiết kế thanh lịch đi kèm khả năng vận hành mạnh mẽ, chiếc sedan này sẽ giúp chuyến đi thêm trọn vẹn, nâng tầm trải nghiệm cho chuyến đi."
  },
  {
    id: 4,
    url: "IL3U1TNV.jpg",
    content:
      "#title:⚡️ Đừng đợi sát ngày! Đặt sớm, giá ưu đãi ngay!#span:📲 💡 Mẹo nhỏ dành cho bạn!#span:📲 Vào các dịp Tết, các mẫu xe 5* được nhiều khách hàng yêu thích trên Mioto bởi dịch vụ tốt & mức giá hợp lí luôn được đặt chỗ sớm và số lượng không còn nhiều khi thuê cận ngày.#span:👉 Bạn đã có kế hoạch cho những kì nghỉ sắp đến? Nếu có, hãy đặt sớm ngay hôm nay để giữ chỗ chiếc xe bạn yêu thích với mức giá tốt nhất trên Mioto.#span:🎁 Mioto thân gửi tặng bạn mã TET25 - ưu đãi 200k cho tất cả chuyến đi vào dịp Tết Âm lịch từ 25/1/2025 - 2/2/2025 và thanh toán giữ chỗ sớm ngày 30/11/2024.#span:Mioto rất mong được đồng hành cùng bạn. Chúc bạn có những chuyến đi thật vui bên cạnh gia đình & bạn bè trong kì nghỉ sắp đến.#span:Trân trọng"
  },
  {
    id: 5,
    url: "N9QSD599.jpg",
    content:
      "#title:🌟 Nhập mã MAZDA3 - giảm ngay 10% khi đặt xe#span:Bạn đang tìm một chiếc xe thanh lịch cho những cuộc hẹn quan trọng?#span:📲 Mở Mioto chọn ngay Mazda 3, với vẻ ngoài tinh tế, thiết kế thanh lịch đi kèm khả năng vận hành mạnh mẽ, chiếc sedan này sẽ giúp chuyến đi thêm trọn vẹn, nâng tầm trải nghiệm cho chuyến đi.#span:📲 Mở Mioto chọn ngay Mazda 3, với vẻ ngoài tinh tế, thiết kế thanh lịch đi kèm khả năng vận hành mạnh mẽ, chiếc sedan này sẽ giúp chuyến đi thêm trọn vẹn, nâng tầm trải nghiệm cho chuyến đi."
  },
  {
    id: 6,
    url: "NP1Y46DD.jpg",
    content:
      "#title:🌟 Nhập mã MAZDA3 - giảm ngay 10% khi đặt xe#span:Bạn đang tìm một chiếc xe thanh lịch cho những cuộc hẹn quan trọng?#span:📲 Mở Mioto chọn ngay Mazda 3, với vẻ ngoài tinh tế, thiết kế thanh lịch đi kèm khả năng vận hành mạnh mẽ, chiếc sedan này sẽ giúp chuyến đi thêm trọn vẹn, nâng tầm trải nghiệm cho chuyến đi.#span:📲 Mở Mioto chọn ngay Mazda 3, với vẻ ngoài tinh tế, thiết kế thanh lịch đi kèm khả năng vận hành mạnh mẽ, chiếc sedan này sẽ giúp chuyến đi thêm trọn vẹn, nâng tầm trải nghiệm cho chuyến đi."
  }
];

const Promotion = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [content, setContent] = useState<string | undefined>("");
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [isPaused , setIsPaused] = useState(false)
 

  const totalItems = listImagePromotion.length;
  const itemsPerView = 3; // Adjust for different screen sizes
  const maxIndex = totalItems - itemsPerView;

  // handle next
  const handleNext = () => {
    setCurrentIndex((prev) => prev === maxIndex ? 0 :  prev + 1 );
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>  prev === maxIndex ? 0 : prev - 1 );
  }; 
 
  const handleShowDetail = (id: number) => {
    console.log(id);
    const getImage = listImagePromotion.find((item) => item.id === id);
    setContent(getImage.content);
    setImageUrl(getImage.url);
    setIsShow(!isShow);
  };
  const handleIsShow = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    if(!isPaused) {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => prev === maxIndex ? 0 : prev + 1)
        }, 3000)
        return () => clearInterval(timer)
    }
  }, [isPaused, currentIndex, maxIndex])

  return (
    <>
      {isShow ? (
        <PromotionImage
          handleIsShow={handleIsShow}
          content={content}
          imageUrl={imageUrl}
        />
      ) : null}
      <section className="promotion -mt-[100px]   p-5">
        <WrapContainer>
          <div className="py-[32px] md:py-[45px] lg:py-[60px]">
            <div className="title-container">
              <h2 className="text-center mb-[12px] md:text-[2.5rem] font-bold text-[2rem]">
                Chương Trình Khuyến Mãi
              </h2>
              <h5 className="md:text-[1.25rem] text-[#333] font-[400] text-center sm:font-[400] text-[1rem] mb-[32px] md:font-[500]  md:w-full lg:mb-[40px]">
                Nhận nhiều ưu đãi hấp dẫn từ Mioto
              </h5>
            </div>
            <div className="main-container " onMouseEnter={() => setIsPaused(true)} onMouseLeave={()=> setIsPaused(false)}>
              <div className="relative slider-image   overflow-hidden">
                <div className="flex   gap-2 transition-transform duration-500 ease-in-out" style={{transform : `translateX(-${currentIndex * (100 / itemsPerView) }% )`}}>
                  {listImagePromotion.map((item) => (
                    <div
                      className="cursor-pointer w-[calc(100%/2)] lg:w-[calc(100%/3)] flex-shrink-0"
                      key={item.id}
                      style={translate}
                    >
                      <img
                        onClick={() => handleShowDetail(item.id)}
                        src={item.url}
                        alt={item.content}
                        className="rounded-2xl w-full"
                      />
                    </div>
                  ))}
                </div>
                <div className="w-[50px] h-[50px]   absolute top-[50%] left-[0] cursor-pointer -translate-x-[50%] -translate-y-[50%] bg-blue-500   flex justify-center items-center rounded-full">
                  <GrPrevious
                    className="md:text-[1.3rem] text-[1.2rem]  text-white "
                    onClick={handlePrevious}
                  />
                </div>
                {/*  */}
                <div className="w-[50px] h-[50px]  absolute top-[50%] -right-12 cursor-pointer -translate-x-[50%] -translate-y-[50%] bg-blue-500  flex justify-center items-center rounded-full">
                  <GrNext
                    className="md:text-[1.3rem] text-[1.2rem] text-white"
                    onClick={handleNext}
                  />
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </WrapContainer>
      </section>
    </>
  );
};

const translate = {
  transform: "translate3d(0px , 0px , 0px)"
};

export default Promotion;
