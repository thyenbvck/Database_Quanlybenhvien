function Popup({handleClose, progress}) {
    return (
        <div>
            <div className="h-fit w-[769px] rounded-[32px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] p-[24px] flex flex-col">
                        <div className="header flex justify-between w-full">
                            <div className="content">
                                <p className="text-black text-2xl font-semibold leading-9">Tiến trình {progress.Ma_lan_su_dung_dich_vu}</p>
                            </div>
                            <button onClick={handleClose} className="w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[10px] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] hover:bg-transparent hover:border-[3px] hover:border-[#032B91] hover:border-solid">
                                <img src="/images/xbutton.png"/>
                            </button>                    
                        </div>
                        <div className="input">
                            <div className="first-section flex justify-between items-center mt-[24px]">
                                <div>
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Loại dịch vụ
                                        <span className="text text-[#F00]"> *</span>
                                    </label><br/>
                                    <input className="w-[340px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Lưu trú" value = {progress.Loai_dich_vu || ""} disabled/><br/>
                                </div>
                                <div>
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Bác sĩ
                                        <span className="text text-[#F00]"> *</span>
                                    </label><br/>
                                    <input className="w-[340px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Nguyễn Văn A" value = {progress.Bac_si || ""} disabled/><br/>
                                </div>
                            </div>            
                            <div className="second-section flex justify-between items-center mt-[24px]">
                                <div>
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Ngày thực hiện
                                        <span className="text text-[#F00]"> *</span>
                                    </label><br/>
                                    <input className="w-[340px] rounded-[5px] mt-[4px]" type="date" id="text" name="text" placeholder="23/08/2024" value = {progress.Ngay_thuc_hien || ""} disabled/><br/>
                                </div>
                                <div>
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Giờ
                                        <span className="text text-[#F00]"> *</span>
                                    </label><br/>
                                    <input className="w-[340px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="7:00" value = {progress.Gio || ""} disabled/><br/>
                                </div>
                            </div>            
                            <div className="third-section flex justify-between items-center mt-[24px]">
                                <div>
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Ngày bắt đầu
                                    </label><br/>
                                    <input className="w-[340px] rounded-[5px] mt-[4px]" type="date" id="text" name="text" placeholder="23/08/2024" value = {progress.Ngay_bat_dau || ""} disabled/><br/>
                                </div>
                                <div>
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Ngày kết húc
                                    </label><br/>
                                    <input className="w-[340px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="23/08/2024" value = {progress.Ngay_ket_thuc} disabled/><br/>
                                </div>
                            </div>            
                            <div className="fourth-section flex justify-between items-center mt-[24px]">
                                <div>
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Số phòng
                                    </label><br/>
                                    <input className="w-[340px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="238" value = {progress.So_phong || ""} disabled/><br/>
                                </div>
                                <div>
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Loại phòng
                                    </label><br/>
                                    <input className="w-[340px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="2" value = {progress.Loai_phong || ""} disabled/><br/>
                                </div>
                            </div>            
                        </div>
                        <div className="fourth-section flex justify-end items-center mt-[24px]">
                            <button className="w-[60px] h-[52px] flex items-center justify-center mr-[18px]" onClick={handleClose}>
                                <h5 className="text-2xl font-semibold leading-9 text-[#032B91]">Hủy</h5>
                            </button>  
                            <button className="w-[120px] h-[52px] flex items-center justify-center rounded-[20px] border-[2px] border-solid bg-[#032B91]" onClick={handleClose}>
                                <h5 className="text-2xl font-semibold leading-9 text-[#F9FBFF]">Lưu</h5>
                            </button>  
                        </div>
                </div>
        </div>
    )
}

export default Popup;