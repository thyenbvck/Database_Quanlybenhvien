import './style.css';

function ListBar({ inForm }) {
    return (
        <div className="flex w-[220px] justify-between">
            <div className="w-[32px] h-[32px] flex justify-center items-center">
                <img src="/images/LeftArrow.png" alt="LeftArrow" />
            </div>
            <div className="flex justify-between w-full px-[10px]">
                {Array.from({ length: 4 }, (_, index) => (
                    <button key={index} className={` ${inForm ? "bg-[#EFF7FE]" : "bg-[#FFF]"} focus:bg-[#032B91] rounded-[7px] w-[32px] h-[32px] flex justify-center items-center`}>
                        <p className="text-[#032B91]  text-sm font-medium leading-6">{index + 1}</p>
                    </button>
                ))}
            </div>
            <div className="w-[32px] h-[32px] flex justify-center items-center">
                <img src="/images/RightArrow.png" alt="RightArrow" />
            </div>
        </div>
    )
}

export default ListBar;
