import { useState } from "react";

function HandleTime() {
    const date = new Date();
    const [ month, setMonth ] = useState(4);
    const [ year, setYear ] = useState(2024);

    const increaseY = () => {
        setYear(year + 1);
    }

    const decreaseY = () => {
        setYear(year - 1);
    }

    const decreaseM = () => {
        if(month === 1) {
            setMonth(12);
            decreaseY();
        } else {
            setMonth(month - 1);
        }
    }
    
    const increaseM = () => {
        if(month === 12) {
            setMonth(1);
            increaseY();
        } else {
            setMonth(month + 1);
        }
    }

    const today = () => {
        setMonth(date.getMonth() + 1);
        setYear(date.getYear() + 1900);
    }
    
    return (
        <div className="right-section gap-[16px] flex items-center content-end">
            <button className="w-[10px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px]" onClick={decreaseM}>&lt;</button>
            <button className="w-[10px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px]" onClick={increaseM}>&gt;</button>
            <div className="w-[225px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px] focus:bg-[#E9EFFF] focus:shadow-[0_4px_15px_0px_rgba(216,210,252,0.64)]">
                Tháng {month},{year}
            </div>
            
            <button className="w-[145px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px] focus:bg-[#E9EFFF] focus:shadow-[0_4px_15px_0px_rgba(216,210,252,0.64)]" onClick={today}>Hôm nay</button>
        </div>
    )

}

export default HandleTime;