import {useState, useEffect} from 'react'
import React from 'react';

// import RoomAdd from './RoomAdd/RoomAdd';
// import RoomDetail from './RoomAdd/RoomDetail'

import TableRoom from "./Component/Table/Table";  
import InfoTag from './Component/InfoTag';         
import ListBar from './Component/ListBar/ListBar';


function RoomDisplay() {  

    const [pageNumber, setPageNumber] = useState(0);
    const [addNewRoom, setAddNewRoom] = useState(false);
    const [currentRoom, setCurrentRoom] = useState(null);
    const [currentType, setCurrentType] = useState(null);

    const handlePage = (page) => {
        setPageNumber(page);
    }

    const handleAddNewRoom = () => {
        setAddNewRoom(true); 
    }

    const handleSetCurrentRoom = (num, type) => {
        setCurrentRoom(num);
        setCurrentType(type);
    }

    const [roomData, setRoomData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await fetch("http://localhost:3000/room");
            const jsonData = await result.json();
            setRoomData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    if (addNewRoom == false && currentRoom == null) {
        return (
            <div className="w-full h-full bg-[#EFF7FE] flex items-center flex-col">
                <div className='flex my-[40px] w-[1080px]'>
                        <InfoTag  
                            title="Phòng bệnh"
                            value={roomData.length}
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
                <TableRoom room={roomData} pageNumber={pageNumber} setCurrentRoom={(roomNum, roomType) => handleSetCurrentRoom(roomNum, roomType)} >
                </TableRoom>
                </div>
                <div className='flex items-center w-[1080px] justify-between p-[10px] mt-[24px]'>
                    <div>
                        <p className='text-black text-lg font-medium leading-6'>Tổng số lượng: {roomData.length}</p>
                    </div>
                    <ListBar pageNumber={pageNumber} handlePage={handlePage}/>
                </div>
            </div>
        )
    }
    // else if(addNewRoom) {
    //     return (
    //         <div className='w-full h-full bg-[#EFF7FE] flex items-center flex-col'>
    //             <RoomAdd/>
    //         </div>
    //     )
    // }
    // else if(currentRoom) {
    //     return (
    //         <div className='w-full h-full bg-[#EFF7FE] flex items-center flex-col'>
    //             <RoomDetail chosenNum={currentRoom} chosenType={currentType}> </RoomDetail>
    //         </div>
    //     )
    // }

}

export default RoomDisplay;