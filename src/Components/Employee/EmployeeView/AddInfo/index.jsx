import { useRef, useState, useEffect } from "react";

function AddInfo({handleChangeValue, emp}) {
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

    console.log("EMPLOYEE", emp["0"])
    console.log(typeof(emp))
    emp = emp["0"]


    return (
        <div>
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
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="date" id="dob" name="dob" value = {(emp.Ngay_sinh)} disabled/><br/>
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
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="date" id="dob" name="dob" value = {(emp.Ngay_ky_hop_dong)} disabled/><br/>
                    </div>
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Lương
                            <span className="text text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="20000000" value = {emp.Luong || "Khong co"} onClick={() => alert("no")}/><br/>
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

// function setDateFormat(date) {
//     const newDate = new Date(date);
//     return newDate.toLocaleDateString('en-US');
// }

export default AddInfo;