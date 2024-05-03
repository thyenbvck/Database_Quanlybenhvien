import { useState } from "react";
import React from 'react';
import "./Styles.css"

function TableHome(props, { children }) {

    return (
            <div className="body">
                <div className="flex px-12 py-2 justify-between">
                    <table className="w-[1000px] justify-between">
                        <thead>
                        <tr className="bg-[#CDDBFE]">
                            {/* cần code thêm JS để hiển thị tối đa 10 dòng */}
                            <th>STT</th>
                            <th>Số phòng</th>
                            <th>Loại phòng</th>
                            <th>SL hiện tại</th>
                            <th>Chi tiết</th>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>#238</td>
                            <td>2 người</td>
                            <td>1 bệnh nhân</td>
                            <td className="text-blue-500 underline">
                                <a href="#">Chi tiết</a>
                            </td>
                        </tr>
                        
                        </thead>
                    </table>
                </div>
                {children}
            </div>
    )
}

export default TableHome;