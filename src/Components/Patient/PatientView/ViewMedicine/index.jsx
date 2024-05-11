import { useState, useRef, useEffect } from "react";


function ViewMedicine({ medicineData }) {

    return (
        <div>
            {/* <div className="flex justify-between mx-10 mt-7 mb-5">
                <div className="button-section flex">
                    <div className="w-[250px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px] flex items-center">Thuốc</div>
                </div>
                <div className="right-section gap-[16px] flex items-center content-end">
                    <div className="w-[237px] h-[42px] flex shrink-0 items-center rounded-full bg-[#EFF7FE] px-[20px] py-[12px]">
                        <div className="font-sans text-[12px] font-normal leading-[18px] text-[#000]">Tìm kiếm</div>
                    </div>
                    <img src="/images/Patient_Sorted.png" alt="sorted" />
                    <img src="/images/Patient_filter.png" alt="filter" />
                </div>
            </div>
            <div className="body">
                <div className="flex px-12 py-2 justify-between">
                    <table className="w-[1000px] justify-between">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã tiến trình</th>
                            <th>mã đơn thuốc</th>
                            <th>Ngày kê đơn</th>
                            <th>Tổng tiền thuốc</th>
                            <th>Chi tiết(DO NOT CLICK)</th>
                        </tr>
                        {medicineData
                            .map((val, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{val.Ma_thuoc}</td>
                                    <td>{val.Ten}</td>
                                    <td>{val.Gia_ban}</td>
                                    <td className="text-blue-500 underline">
                                        <a href="#">Chi tiết</a>
                                    </td>
                                </tr>
                        ))}
                        </thead>
                    </table>
                </div>
            </div> */}
        </div>
    )
}

export default ViewMedicine;