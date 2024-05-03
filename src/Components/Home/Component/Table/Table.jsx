import { useState } from "react";
import React from 'react';
import "./Styles.css"

import HandleTime from "./func";

function TableHome({ children }) {
    return (
        <div className="container w-[1080px] h-[850px] rounded-[47px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] h-full">
            <div className="flex justify-between mx-10 mt-7 mb-5">
                {/* <div className="button-section flex"> */}
                    <div className="w-[116px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px]]">Bác sĩ</div>
                {/* </div> */}
                {/* <div className="right-section gap-[16px] flex items-center content-end">
                    <button className="w-[116px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px] focus:bg-[#E9EFFF] focus:shadow-[0_4px_15px_0px_rgba(216,210,252,0.64)]" >&lt;</button>
                    <button className="w-[116px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px] focus:bg-[#E9EFFF] focus:shadow-[0_4px_15px_0px_rgba(216,210,252,0.64)]" >&gt;</button>
                    <div className="w-[250px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px] focus:bg-[#E9EFFF] focus:shadow-[0_4px_15px_0px_rgba(216,210,252,0.64)]">
                    </div>
                </div> */}
                <HandleTime>
                </HandleTime>
            </div>
            <div className="body">
                <div className="flex px-12 py-2 justify-between">
                    <table className="w-[1000px] h-[761] justify-between">
                        <thead>
                        <tr class="tabletitle">
                            {/* cần code thêm JS để hiển thị tối đa 10 dòng */}
                            <th>STT</th>
                            <th>Mã số</th>
                            <th>Tên</th>
                            <th>Tổng số lịch hẹn</th>
                            <th>Tổng số dịch vụ</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>10 lịch hẹn</td>
                            <td>5 dịch vụ</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>10 lịch hẹn</td>
                            <td>5 dịch vụ</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>10 lịch hẹn</td>
                            <td>5 dịch vụ</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>10 lịch hẹn</td>
                            <td>5 dịch vụ</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>10 lịch hẹn</td>
                            <td>5 dịch vụ</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>10 lịch hẹn</td>
                            <td>5 dịch vụ</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>10 lịch hẹn</td>
                            <td>5 dịch vụ</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>10 lịch hẹn</td>
                            <td>5 dịch vụ</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>10 lịch hẹn</td>
                            <td>5 dịch vụ</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>10 lịch hẹn</td>
                            <td>5 dịch vụ</td>
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