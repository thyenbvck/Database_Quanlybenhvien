import { useRef, useState, useEffect } from "react";

function AddInfo({handleChangeValue, emp}) {
    const [updateSalary, setUpdateSalary] = useState(false);
    // const [infoData, setInfoData] = useState(
    //     {
    //         imgURL: null,
    //         lastName: null,
    //         firstName: null,
    //         dob: null,
    //         gender: null,
    //         ssn: null,
    //         phone: null,
    //         address: null,
    //         email: null,
    //         med: null,
    //     }
    // );

    emp = emp["0"];

    const handleClose = () => {
        setUpdateSalary(false);
    }

    if (!emp){
        return (
            <div>
                <h3>... Loading</h3>
            </div>
        )
    }
    else {
    return (
        <div>
            { updateSalary && 
                <div>
                    <div className="fixed z-[1] left-[35%] top-[28%]">
                    <div className="h-fit w-[769px] rounded-[32px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] p-[24px] flex flex-col">
                        <div className="header flex justify-between w-full">
                            <div className="content">
                                <p className="text-black text-2xl font-semibold leading-9">Cập nhật lương</p>
                            </div>
                            <button onClick={handleClose} className="w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[10px] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] hover:bg-transparent hover:border-[3px] hover:border-[#032B91] hover:border-solid">
                                <img src="/images/xbutton.png"/>
                            </button>                    
                        </div>
                        <div className="input">
                            <div className="first-section flex justify-between items-center mt-[24px]">
                                <div>
                                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Mức tăng
                                        <span className="text text-[#F00]"> *</span>
                                    </label><br/>
                                    <input className="w-[721px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="10"/><br/>
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
                </div>
            }
            <form className="my-[40px]" id="myForm" encType="multipart/form-data">
                <div className="first-section flex justify-between items-center px-[60px]">
                        <div>
                            <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Mã số nhân viên
                                <span className="text text-[#F00]"> *</span>
                            </label><br/>
                            <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Nguyễn" value = {emp.Ma_so_nhan_vien || ""} disabled/><br/>
                        </div>
                        <div>
                            <label htmlFor="text" className="text text-black text-xl font-medium leading-8">CCCD
                                <span className="text text-[#F00]"> *</span>
                            </label><br/>
                            <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Văn A" value = {emp.CCCD} disabled/><br/>
                        </div>
                </div>                   
                <div className="first-section mt-[40px] flex justify-between items-center px-[60px]">
                        <div>
                            <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Họ
                                <span className="text text-[#F00]"> *</span>
                            </label><br/>
                            <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Nguyễn" value = {emp.Ho} disabled/><br/>
                        </div>
                        <div>
                            <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Tên
                                <span className="text text-[#F00]"> *</span>
                            </label><br/>
                            <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Văn A" value = {emp.Ten} disabled/><br/>
                        </div>
                </div>                   
                <div className="second-section mt-[40px] flex justify-between items-center px-[60px]">
                    <div>
                        <label htmlFor="dob" className="text text-black text-xl font-medium leading-8">Ngày sinh
                            <span className="dob text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="dob" name="dob" value = {setDateFormat(emp.Ngay_sinh)} disabled/><br/>
                    </div>
                    <div>
                            <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Giới tính
                                <span className="text text-[#F00]"> *</span>
                            </label><br/>
                            <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Nguyễn" value = {emp.Gioi_tinh} disabled/><br/>
                        </div>
                </div>                   
                <div className="third-section mt-[40px] flex justify-between items-center px-[60px]">
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Email
                            <span className="text text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="0123456789" value = {emp.Email} disabled/><br/>
                    </div>
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Số điện thoại
                            <span className="text text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="0123456789" value = {emp.SDT} disabled/><br/>
                    </div>
                </div>      
                <div className="fourth-section mt-[40px] flex justify-between items-center px-[60px]">
                    <div>
                        <label htmlFor="dob" className="text text-black text-xl font-medium leading-8">Ngày ký hợp đồng lao động
                            <span className="dob text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="dob" name="dob" value = {setDateFormat(emp.Ngay_ky_hop_dong)} disabled/><br/>
                    </div>
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Lương
                            <span className="text text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="20000000" value = {emp.Luong || "Khong co"} onClick={() => setUpdateSalary(true)}/><br/>
                    </div>
                </div>                                 
                <div className="sixth-section mt-[40px] flex justify-between items-center px-[60px] w-full">
                <div>
                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Địa chỉ
                        <span className="text text-[#F00]">*</span>
                    </label><br/>
                    <input className="w-[960px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" value = {emp.Dia_chi} placeholder="268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam" disabled /><br/>
                    </div>
                </div>                   
                    
            </form>
        </div>
        )
    }      
}
function setDateFormat(date) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US');
}

export default AddInfo;