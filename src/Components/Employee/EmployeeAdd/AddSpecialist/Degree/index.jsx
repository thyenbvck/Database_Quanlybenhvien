import "./style.css"


function Degree( {handleRemove}) {
    return (
        <div className="flex justify-between items-center mb-[20px]">
            <input className="w-[902px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Bằng cấp / Chứng chỉ"/><br/>
            <button className="delete-button mt-[4px] w-[48px] h-[42px] flex justify-center items-center border-[1px] rounded-[5px] border-solid border-[#6E7F94] bg-[#eff7fe] text-[#6E7F94] font-medium leading-6 hover:bg-[#BEE1F9] hover:text-black hover:border-black" onClick={handleRemove}>
                <div className="px-[2px]">
                    <img src="/images/trashbin.png" className="trashbin opacity-50" />
                </div>
            </button>
        </div>
    )
}

export default Degree;
