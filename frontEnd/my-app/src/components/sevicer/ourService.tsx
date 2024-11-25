import React from "react";
import WrapContainer from "../wrapContainer/wrapContainer";
import Link from "next/link";
interface Person {
  name: string;
  avatar: string;
  listCar: string[];
}
interface ListService {
  id: number;
  url: string;
  people: Person;
}
const listService: ListService[] = [
  {
    id: 1,
    url: "/car/imag2.jpg",
    people: {
      name: "Hung Dua Ca",
      avatar: "/bg-landingpage-1.34e13e49.png",
      listCar: [
        "/car/3tzuvcW_2ym0eCuolXVKyw.jpg",
        "/car/4kSdNYzhTUKi9SrLdE2D8A.jpg",
        "/car/Fxwms05qka_qLIX3VAq0ow.jpg"
      ]
    }
  },
  {
    id: 2,
    url: "/car/imag4.jpg",
    people: {
      name: "Nguyen Thi Le Ha",
      avatar: "/bg-landingpage-1.34e13e49.png",
      listCar: [
        "/car/3tzuvcW_2ym0eCuolXVKyw.jpg",
        "/car/4kSdNYzhTUKi9SrLdE2D8A.jpg",
        "/car/Fxwms05qka_qLIX3VAq0ow.jpg"
      ]
    }
  },
  {
    id: 3,
    url: "/car/image1.jpg",
    people: {
      name: "Nguyen Van Thanh",
      avatar: "/bg-landingpage-1.34e13e49.png",
      listCar: [
        "/car/3tzuvcW_2ym0eCuolXVKyw.jpg",
        "/car/4kSdNYzhTUKi9SrLdE2D8A.jpg",
        "/car/Fxwms05qka_qLIX3VAq0ow.jpg"
      ]
    }
  }
];
const OurService = () => {
  return (
    <section className="service-our">
      <WrapContainer>
        <div className="p-5">
          <h2 className="lg:text-[2.25rem] lg:mb-[64px] mb-[32px] text-[2rem] text-center font-bold">
            Dịch Vụ Của Chúng tôi
          </h2>
          <div className="grid lg:grid-cols-3 gap-3">
            {listService.map((item) => (
              <div
                key={item.id}
                className="w-full object-cover h-[600px] bg-center bg-cover relative rounded-2xl opacity-90 hover:opacity-100 duration-300 transition-all cursor-pointer"
                style={{
                  backgroundImage: `url(${item.url})`
                }}
              >
                <div className="my-4 absolute bottom-0 left-0 p-3">
                  <div className="person relative flex items-center  group/avatar">
                    <div
                      className="avatar w-[40px] h-[40px] rounded-full  bg-cover bg-center object-cover  cursor-pointer  "
                      style={{ backgroundImage: `url(${item.people.avatar})` }}
                    ></div>
                    <div className="name-people ml-3">
                      <p className="cursor-pointer hover:underline duration-300 transition-all text-white font-bold text-[0.9rem] md:text-[1rem]">
                        {item.people.name}
                      </p>
                    </div>
                    <div className="showInfoDetail  group-hover/avatar:block group-hover/avatar:-top-[80px] hidden motion-preset-bounce motion-duration-700 absolute bg-white rounded-2xl p-2 left-0 -top-[140px] w-[300px]  ">
                      <div className="flex gap-2 items-center mb-2">
                        <div
                          className="avatar w-[40px] h-[40px] rounded-full  bg-cover bg-center object-cover  cursor-pointer"
                          style={{
                            backgroundImage: `url(${item.people.avatar})`
                          }}
                        ></div>
                        <Link
                          href={`/profile/${item.people.name}`}
                          className=" cursor-pointer hover:underline duration-300 transition-all text-black font-bold text-[0.9rem] md:text-[1rem]"
                        >
                          {item.people.name}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.people.listCar.map((item, index) => (
                          <Link
                            href=""
                            className="rounded-xl overflow-hidden"
                            key={index}
                          >
                            <img
                              src={item}
                              alt={item}
                              width="200px"
                              height="200px"
                              className="rounded-xl cursor-pointer hover:scale-110 duration-300 transition-all object-cover"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapContainer>
    </section>
  );
};

export default OurService;
