import {useState, useEffect} from 'react'
import React from 'react';

import RoomAdd from './RoomAdd/RoomAdd';

import TableHome from "./Component/Table/Table";  
import InfoTag from './Component/InfoTag';         
import ListBar from './Component/ListBar/ListBar';


function RoomDisplay() {  
    const [checkedState, setCheckedState] = useState([]);
    const [listEmployeeStatus, setListEmployeeStatus] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [countChecked, setCountChecked] = useState(0);
    const [addNewRoom, setAddNewRoom] = useState(false);

    const handleAddNewRoom = () => {
        setAddNewRoom(true); 
        console.log("work");
    }

    // useEffect(() => {
    //     fetch("api/patients/list", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setListPatient_Info(data);
    //         setCheckedState(new Array(data.length).fill(false));
    //       })
    //       .catch((error) => console.error('Error fetching patient data:', error));
    //   }, []);

    if (!addNewRoom) {
        return (
            <div className="w-full h-full bg-[#EFF7FE] flex items-center flex-col">
                <div className='flex my-[40px] w-[1080px]'>
                        <InfoTag  
                            title="Phòng bệnh"
                            value="238"
                            source="/images/bed.png"
                        ></InfoTag>
                </div>
                <div className="container w-[1080px] h-[850px] rounded-[47px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] h-full">
                <div className="flex justify-between mx-10 mt-7 mb-5">
                    <div className="w-[250px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px] flex items-center">
                        <button onClick={handleAddNewRoom}>
                            <img src="/images/AddNewEmployee.png" alt="Thêm phòng bệnh" />
                        </button>
                        Phòng bệnh
                    </div>
                    <div className="right-section gap-[16px] flex items-center content-end">    
                        <div className="w-[237px] h-[42px] flex shrink-0 items-center rounded-full bg-[#EFF7FE] px-[20px] py-[12px]">
                            <div className="font-sans text-[12px] font-normal leading-[18px] text-[#000]">Tìm kiếm</div>
                        </div>
                        <img src="/images/Patient_Sorted.png" alt="sorted" />
                        <img src="/images/Patient_filter.png" alt="filter" />
                    </div>
                </div>
                <TableHome>
                </TableHome>
                </div>
                <div className='flex items-center w-[1080px] justify-between p-[10px] mt-[24px]'>
                    <div>
                        <p className='text-black text-lg font-medium leading-6'>Tổng số lượng: 238</p>
                    </div>
                    <ListBar/>
                </div>
            </div>
            
        )
    }
    else {
        return (
            <div className='w-full h-full bg-[#EFF7FE] flex items-center flex-col'>
                <RoomAdd/>
            </div>
        )
    }
    
}

export default RoomDisplay;