

function AddSchedule({emp}) {
    const schedulerList =  ["7:00 - 7:20", "7:00 - 7:20", "7:00 - 7:20", "7:00 - 7:20",
                            "7:00 - 7:20", "7:00 - 7:20", "7:00 - 7:20", "7:00 - 7:20",
                            "7:00 - 7:20", "7:00 - 7:20", "7:00 - 7:20", "7:00 - 7:20",
                            "7:00 - 7:20", "7:00 - 7:20", "7:00 - 7:20", "10:40 - 11:00"];
    return (
        <div className="py-[40px] px-[60px] flex justify-between">
            <div className="left-section w-[427px] h-[355px] rounded-[47px] p-[24px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)]">
                    <div className="header">
                        <p className="text-black text-2xl font-semibold leading-9">Tìm lịch trống</p>
                    </div>
                    <div className="body flex flex-col w-full items-center">
                        <form action="">
                            <div className="first-section flex flex-col mt-[12px]">
                                <div className="flex flex-col justify-start ">
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Ngày
                                    </label>
                                    <input className="w-[379px] rounded-[5px] mt-[4px]" type="date" id="text" name="text" placeholder="23/08/2024"/><br/>
                                </div>
                                <div className="flex flex-col justify-start">
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Ca
                                    </label>
                                    <select className="w-[379px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="11:00 AM">
                                        <option value="" disabled>Chọn ca làm việc</option>
                                        <option value="Ca 1">7:00 - 11:00</option>
                                        <option value="Ca 2">13:00 - 17:00</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="right-section flex justify-end mt-[24px]">
                        <button className="w-[120px] h-[52px] flex items-center justify-center gap-[10px] rounded-[20px] border-[2px] border-solid bg-[#032B91]">
                            <h5 className="text-2xl font-semibold leading-9 text-[#F9FBFF]">Tìm</h5>
                        </button>
                    </div>
                </div>
            <div/>
            <div className="right-section flex items-center">
                <div className="flex flex-wrap w-[483px] h-[216px] items-center gap-[14px]">
                    {schedulerList.map(value => (
                        <div className="w-[110px] h-[36px] rounded-[10px] border-solid border-[2px] border-[#032B91] flex justify-center items-center">
                            <p className="text-[#032B91] text-[0.9rem] font-semibold leading-[18px]">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default AddSchedule;
    