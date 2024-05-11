import { useState } from "react";
import React from 'react';
import "./patient.css"

function TablePatient({ patient, pageNumber, setCurrentRoom, setID }) {

    const handleViewRoom = (So_phong, Loai_phong) => {
        setCurrentRoom(So_phong, Loai_phong);
    }

    return (
        <div className="body">
            <div className="flex px-12 py-2 justify-between">
                <table className="w-[1000px] justify-between">
                    <thead>
                    <tr className="bg-[#CDDBFE]">
                        <th style={{ width: '20px', textAlign: 'center'}}>STT</th>  
                        <th>ID</th>
                        <th>Họ tên</th>
                        <th>SĐT</th>
                        <th>Ngày hẹn</th>
                        <th>Giờ hẹn</th>
                        <th>Chi tiết</th>
                    </tr>
                    {/* {patient
                        .slice(pageNumber * 15, (pageNumber + 1) * 15)
                        .map((val, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{val.ID}</td>
                                <td>{val.Ho_ten}</td>
                                <td>{val.SDT}</td>
                                <td>{val.Ngay_hen}</td>
                                <td>{val.Gio_hen}</td>
                                <td className="text-blue-500 underline">
                                    <a href="#">
                                    <button>Chi tiết</button>
                                    </a>
                                </td>
                            </tr>
                    ))} */}
                    {patient
                        .slice(pageNumber * 15, (pageNumber + 1) * 15)
                        .map((val, index) => {  
                            let date = new Date(val.Ngay_hen);
                            let formattedDate = date.toLocaleDateString('vi-VN');
                            let formattedTime = date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{val.ID}</td>
                                    <td>{val.Ho_ten.replace(/\n/g, ' ')}</td>
                                    <td>{val.SĐT}</td>
                                    <td>{formattedDate}</td>
                                    <td>{formattedTime}</td>
                                    <td className="text-blue-500 underline">
                                        <a href="#">
                                            <button onClick={() => setID(val.ID)}>Chi tiết</button>
                                        </a>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default TablePatient;