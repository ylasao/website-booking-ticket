import React from "react";
import WrapContainer from "../wrapContainer/wrapContainer";
import Airport from "../airport/airport";
interface ListImage {
  id: number;
  url: string;
  content: string;
}
const listImage: ListImage[] = [
  {
    id: 1,
    url: "/city/city-6850088_1280.jpg",
    content: "Thành Phố Hồ Chí Minh "
  },
  {
    id: 2,
    url: "/city/ha-giang-7860907_1280.jpg",
    content: "Hà Gaing vẻ đẹp bác ngát"
  },
  {
    id: 3,
    url: "/city/italy-7708552_1280.jpg",
    content: "Đà Lạt sứ sở tình yêu "
  },
  {
    id: 4,
    url: "/city/vietnam-7561525_1280.jpg",
    content: "Hội An tình người mến thương"
  }
];
const Toped = () => {
  return (
    <section className="toped">
      <WrapContainer>
        <div className="p-5">
          <h2 className="text-center my-[32px]  text-[2rem] md:text-[2.25rem] font-bold">
            Địa Điểm Nổi Bật
          </h2>
          <div className="container-image grid grid-cols-2 lg:grid-cols-4 gap-3">
            {listImage.map((item, index) => (
              <div key={item.id} className="img relative group">
                <img
                  src={item.url}
                  alt={item.content}
                  className="rounded-2xl group-hover:lg:rounded-tl-[100px]  group-hover:lg:rounded-tr-2xl  lg:rounded-tr-[100px] group-hover:lg:rounded-br-[100px] group-hover:lg:!rounded-bl-2xl lg:rounded-bl-[100px]  lg:rounded-tl-2xl lg:rounded-br-2xl opacity-90 cursor-pointer hover:opacity-100 duration-300 transition-all ease-in-out"
                />
                <div className="absolute bottom-10 left-5 ">
                  <p className="text-white  lg:font-bold text-[.7rem] sm:text-[1rem] lg:text-[1.3rem]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Airport />
        </div>
      </WrapContainer>
    </section>
  );
};

export default Toped;
