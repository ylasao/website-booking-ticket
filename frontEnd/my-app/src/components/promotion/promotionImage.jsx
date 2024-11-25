import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import DOMPurify from "dompurify";
const PromotionImage = ({ handleIsShow, content, imageUrl }) => {
  const handleHidden = () => {
    handleIsShow();
  };

  const parentContent = (content) => {
    const lines = content.split("#");
    const result = [];
    lines.forEach((line) => {
      if (line.includes("title:")) {
        const [key, value] = line.split(":");
        if (key && value) {
          result.push({ key: "title", value: value.trim() });
        }
      } else if (line.includes("span:")) {
        const [key, value] = line.split(":");
        if (key && value) {
          result.push({ key: "span", value: value.trim() });
        }
      } else if (line.trim()) {
        result.push({ key: "span", value: line.trim() }); // Default to span for any other content
      }
    });
    return result;
  }; 
  const renderHTML = (parsedData) => {
    return parsedData.map((item, index) => {
      if (item.key === "title") {
        return (
          <div key={index}>
            <div className="header">
              <h1 className="text-[1rem] text-[#141414] font-bold mb-[.5rem] text-center">
                {item.value}
              </h1>
            </div>
            <div className="line w-[100px] h-[2px] bg-blue-500 rounded-2xl mx-auto my-3"></div>
          </div>
        );
      } else if (item.key === "span") {
        return (
          <p key={index} className="text-[1rem] mb-[0.5rem] lg:mx-[100px]">
            {item.value}
          </p>
        );
      }
      return null; // If key doesn't match, return null (nothing rendered)
    });
  };

  const parentedContent = parentContent(content);
  const htmlContent = renderHTML(parentedContent);
  // Inside your component
  const sanitizedContent = DOMPurify.sanitize(htmlContent);
  return (
    <div className="fixed top-0 left-0 z-[100000] w-[100vw] h-[100vh]  bg-black/50">
      <div className="w-full p-[32px] lg:w-[50%] lg:mx-auto lg:mt-10  motion-preset-expand motion-duration-700 rounded-2xl bg-white shadow-xl">
        <CiCircleRemove
          onClick={handleHidden}
          className="text-blue-600 text-[2rem] ml-auto font-bold cursor-pointer"
        />
        <div className="content-img">
          <img
            src={imageUrl}
            alt="image"
            className="rounded-2xl lg:w-[600px] mx-auto object-cover"
          />
        </div>
        <div className="content-body p-[30px]">
          {renderHTML(parentedContent)}
        </div>
      </div>
    </div>
  );
};

export default PromotionImage;

{
  /* <div className="header">
            <h1 className="text-[1rem] text-[#141414] font-bold mb-[.5rem] text-center">
              🎊 Đặt xe sớm ngay hôm nay để nhận ưu đãi 140k!
            </h1>
          </div>
          <div className="line w-[100px] h-[2px] bg-blue-500 rounded-2xl mx-auto my-3"></div> */
}
{
  /* <p className="text-[1rem] mb-[0.5rem] ">
            🌲 Noel & Tết Dương lịch sắp đến gần, bạn đã có dự định gì cho bản
            thân và gia đình để tận hưởng dịp nghỉ Lễ?
          </p>
          <p className="text-[1rem] mb-[0.5rem] ">
            🚗 Dù Lễ này về quê hay du lịch cùng gia đình, hãy để Mioto đồng
            hành cùng bạn trên mọi cung đường, tận hưởng trọn vẹn mùa Lễ ấm áp
            bên những người thân yêu.
          </p>
          <p className="text-[1rem] mb-[0.5rem] ">
            📲 Đặt xe sớm ngay hôm nay để giữ chỗ chiếc xe ưng ý cho mùa Lễ cận
            kề!
          </p>
          <p className="text-[1rem] mb-[0.5rem] ">
            💥 Mioto thân gửi tặng bạn ưu đãi - giảm 140k cho tất cả chuyến đi
            khi đặt sớm vào dịp Lễ Giáng sinh & Tết Dương lịch.
          </p>
          <p className="text-[1rem] mb-[0.5rem] ">
            ● Nhập mã NOEL - cho chuyến đi dịp Lễ Giáng sinh ,
            <strong>24/12 - 25/12/2024</strong>, thanh toán giữ chỗ sớm ngày{" "}
            <strong>21/12/2024.</strong>
          </p> */
}
