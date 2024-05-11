import {useState, useEffect} from 'react'
import React from 'react';

import HandleTime from "./func";

function TableHome() {
    const [ works, setWorks ] = useState([]);
    const [ month, setMonth ] = useState(1);

    const fetchData = async () => {
        try {
            console.log(month);
            const result = await fetch(`http://localhost:3000?month=${month}`);
            const jsonData = await result.json();
            setWorks(jsonData);
            // console.log(works);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        console.log(month)
        fetchData();
    }, [month]);

    return (
        <div className="container w-[1080px] h-[835px] rounded-[47px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] h-full">
            <div className="flex justify-between mx-10 mt-7 mb-5">
                <div className="w-[116px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px]]">Bác sĩ</div>
                <HandleTime month={month} setMonth={(mon) => setMonth(mon)} >
                </HandleTime>
            </div>
            <div className="body">
                <div className="flex px-12 py-2 justify-between">
                    <table className="w-[1000px] h-[761] justify-between">
                        <thead>
                        <tr class="tabletitle">
                            <th>STT</th>
                            <th>Mã số</th>
                            <th>Tên</th>
                            <th>Tổng số lịch hẹn</th>
                            <th>Tổng số dịch vụ</th>
                        </tr>
                        {works
                            .map((val, index) => {
                                if(index < 10) return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{val.DoctorID}</td>
                                    <td>{val.LastName} {val.FirstName}</td>
                                    <td>{val.AppointmentCount}</td>
                                    <td>{val.ServiceCount}</td>
                                </tr>
                        )})}    
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableHome;