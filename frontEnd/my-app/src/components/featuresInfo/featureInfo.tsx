import React from "react";
import WrapContainer from "../wrapContainer/wrapContainer";
interface ListInfo {
  id: number;
  url: string;
  content: string;
  stepName: string;
  title: string;
}
const listInformation: ListInfo[] = [
  {
    id: 1,
    url: "/iconInfor/cho_thue_xe_tu_lai_hanoi.735438af.svg",
    title: "Lái xe an toàn cùng Mioto",
    stepName: "Đặt xe trên app/web Mioto",
    content:
      "Chuyến đi trên Mioto được bảo vệ với Gói bảo hiểm thuê xe tự lái từ MIC & VNI.Khách thuê sẽ chỉ bồi thường tối đa 2,000,000VNĐ trong trường hợp có sự cố ngoài ý muốn"
  },

  {
    id: 2,
    url: "/iconInfor/cho_thue_xe_tu_lai_tphcm.1e7cb1c7.svg",
    title: "An tâm đặt xe",
    stepName: "Nhận xe",
    content:
      "Không tính phí huỷ chuyến trong vòng 1h sau khi thanh toán giữ chỗ. Hoàn tiền giữ chỗ và bồi thường 100% nếu chủ xe huỷ chuyến trong vòng 7 ngày trước chuyến đi."
  },
  {
    id: 3,
    url: "/iconInfor/dich_vu_thue_xe_tu_lai_hanoi.f177339e.svg",
    title: "Thủ tục đơn giản",
    stepName: "Bắt đầu hành trình",
    content:
      "Chỉ cần có CCCD gắn chip (Hoặc Passport) & Giấy phép lái xe là bạn đã đủ điều kiện thuê xe trên Mioto."
  },
  {
    id: 4,
    url: "/iconInfor/thue_xe_co_tai_xe.a6f7dc54.svg",
    title: "Thanh toán dễ dàng",
    stepName: "Trả xe & kết thúc",
    content:
      "Đa dạng hình thức thanh toán: ATM, thẻ Visa & Ví điện tử (Momo, VnPay, ZaloPay)."
  },
  {
    id: 5,
    url: "/iconInfor/thue_xe_tu_lai_gia_re_hanoi.4035317e.svg",
    title: "Giao xe tận nơi",
    stepName: "Đặt xe trên app/web Mioto",
    content:
      "Bạn có thể lựa chọn giao xe tận nhà/sân bay... Phí tiết kiệm chỉ từ 15k/km."
  },
  {
    id: 6,
    url: "/iconInfor/thue_xe_tu_lai_gia_re_hcm.ffd1319e.svg",
    title: "Dòng xe đa dạng",
    stepName: "Đặt xe trên app/web Mioto",
    content:
      "Hơn 100 dòng xe cho bạn tuỳ ý lựa chọn: Mini, Sedan, CUV, SUV, MPV, Bán tải."
  }
];
const FeatureInfo = () => {
  return (
    <section className="feature-information py-[40px] lg:py-[80px]">
      <WrapContainer>
        <div className="p-5">
          <div className="">
            <h2 className="text-[2.25rem] font-bold text-center mb-[12px]">
              Ưu Điểm Của 3HD1
            </h2>
            <h5 className="title md:text-[1.25rem] text-center mb-[30px] md:mb-[40px] text-[#333] text-[1rem]font-[400] md:font-[500]">
              Những tính năng giúp bạn dễ dàng hơn khi thuê xe trên 3HD1.
            </h5>
          </div>
          <div className="information-content">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {listInformation.map((item) => (
                <div key={item.id} className="flex flex-col gap-4">
                  <img
                    src={item.url}
                    alt={item.title}
                    width="240px"
                    height="240px"
                    className="mx-auto motion-preset-seesaw motion-duration-700 cursor-pointer"
                  />
                  <div className="">
                    <h5 className="mb-[10px] text-center font-semibold text-[1rem] lg:text-[1.45rem]">{item.title}</h5>
                    <p className="text-center text-[1rem] text-slate-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WrapContainer>
    </section>
  );
};

export default FeatureInfo;
