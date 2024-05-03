import { useState } from "react";
import React from 'react';
import "./Styles.css"

var month = 4;
var year = 2024;

function TableHome({ children }) {
    return (
        <div className="container w-[1080px] h-[850px] rounded-[47px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] h-full">
            <div className="flex justify-between mx-10 mt-7 mb-5">
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
            {/* <div className="flex justify-center mt-0">
                <hr className="w-[1000px] border-2 border-solid border-[#A6BFFD]"/>
            </div> */}
            <div className="body">
                <div className="flex px-12 py-2 justify-between">
                    <table className="w-[1000px] justify-between">
                        <thead>
                        <tr>
                            {/* cần code thêm JS để hiển thị tối đa 10 dòng */}
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Giá bán</th>
                            <th>HDSD</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#000001</td>
                            <td>Panadol</td>
                            <td>2000</td>
                            <td className="text-blue-500 underline">
                                <a href="#">Chi tiết</a>
                            </td>
                        </tr>
                        </thead>
                    </table>
                </div>
                {children}
            </div>
        </div>
    )
}

export default TableHome;