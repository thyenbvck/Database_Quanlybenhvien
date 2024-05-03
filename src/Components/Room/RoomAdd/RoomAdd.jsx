import { useState, useRef } from "react";
import HuyButton from "../../Button/Huy_Button";
import LuuButton from "../../Button/Luu_Button";

import AddNewRoom from "./AddNewRoom";


function RoomAdd() {
    const [content, setContent] = useState('roominfo');

    const infoButtonRef = useRef(null);

    const handleClick = (id) => {
        setContent(id);
        console.log(id);
    }

    return (
        <div className="w-full bg-[#EFF7FE] flex items-center flex-col">
            <div className="top-section mt-[8px] w-[1080px] px-[36px] py-[20px] flex items-center justify-between">
                <div className="content flex items-center">
                    <p className="text-[#032B91] text-[32px] font-bold leading-[48px]">Phòng bệnh mới</p>
                </div>
                <a href="/room">
                <button className="w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[10px] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] hover:bg-transparent hover:border-[3px] hover:border-[#032B91] hover:border-solid">
                    <img src="/images/xbutton.png" alt="Close"/>
                </button></a>
            </div>
            <div className="table-container w-[1080px] h-fit rounded-[47px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)]">
                <div className="w-[1080px] h-[76px] bg-[#CDDBFE] rounded-t-[47px] flex justify-between px-[36px] items-center">
                    <button className="w-[200px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px] focus:bg-[#032B91] focus:text-[#F9FBFF] focus:text-2xl focus:font-semibold" id="info" onClick={() => handleClick("roominfo")} ref={infoButtonRef} autoFocus>Thông tin</button>
                </div>
                <div className="content">
                    {content === 'roominfo' && <AddNewRoom />}
                </div>
           </div>
           <div className="footer-section w-[1080px] mt-[20px] pr-[36px] flex justify-end">
                <div className="pr-[18px]">
                    <HuyButton/>
                </div>
                <div>
                    <LuuButton/>
                </div>
           </div>
        </div>
    )
}

export default RoomAdd;