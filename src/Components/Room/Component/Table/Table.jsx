import { useState } from "react";
import React from 'react';
import "./Styles.css"

function TableRoom({ room, pageNumber, setCurrentRoom }) {

    const handleViewRoom = (So_phong, Loai_phong) => {
        setCurrentRoom(So_phong, Loai_phong);
    }

    return (
        <div className="body">
            <div className="flex px-12 py-2 justify-between">
                <table className="w-[1000px] justify-between">
                    <thead>
                    <tr className="bg-[#CDDBFE]">
                        <th>STT</th>
                        <th>Số phòng</th>
                        <th>Loại phòng</th>
                        <th>SL hiện tại</th>
                        <th>Chi tiết</th>
                    </tr>
                    {room
                        .slice(pageNumber * 15, (pageNumber + 1) * 15)
                        .map((val, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{val.So_phong}</td>
                                <td>{val.Loai_phong}</td>
                                <td>{val.So_luong_benh_nhan_hien_tai}</td>
                                <td className="text-blue-500 underline">
                                    <a href="#">
                                    <button onClick = {() => handleViewRoom(val.So_phong, val.Loai_phong)}>Chi tiết</button>
                                    </a>
                                </td>
                            </tr>
                    ))}
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default TableRoom;