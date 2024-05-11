import { useRef, useState, useEffect } from "react";

function AddInfo({formData,handleChangeValue}) {
    const imgRef = useRef();
    const imgConRef = useRef();

    const handleImg = () => {
        const file = imgConRef.current.files[0]; 
        if (file) {
            const imgUrl = URL.createObjectURL(file);
            imgRef.current.src = imgUrl;
            handleChangeValue("imgURL", imgUrl);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        handleChangeValue(name, value);
    };

    return (
        <div>
            <form className="my-[40px]" id="myForm" encType="multipart/form-data" onSubmit={(event) => {
                event.preventDefault();
                // handleSubmit(formData);
            }}>
                <div className="zero-section flex justify-between items-center px-[60px]">
                        <div>
                            <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Mã số nhân viên
                                <span className="text text-[#F00]"> *</span>
                            </label><br/>
                            <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="Ma_so_nhan_vien" name="Ma_so_nhan_vien" placeholder="BS10001" onChange={handleChange} value={formData.Ma_so_nhan_vien}/><br/>
                        </div>
                        <div>
                            <label htmlFor="text" className="text text-black text-xl font-medium leading-8">CCCD
                                <span className="text text-[#F00]"> *</span>
                            </label><br/>
                            <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="CCCD" name="CCCD" placeholder="012345678910" onChange={handleChange} value={formData.CCCD}/><br/>
                        </div>
                </div>                   
                <div className="first-section mt-[40px] flex justify-between items-center px-[60px]">
                        <div>
                            <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Họ
                                <span className="text text-[#F00]"> *</span>
                            </label><br/>
                            <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="Ho" name="Ho" placeholder="Nguyễn" onChange={handleChange} value={formData.Ho}/><br/>
                        </div>
                        <div>
                            <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Tên
                                <span className="text text-[#F00]"> *</span>
                            </label><br/>
                            <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="Ten" name="Ten" placeholder="Văn A" onChange={handleChange} value={formData.Ten}/><br/>
                        </div>
                </div>                   
                <div className="second-section mt-[40px] flex justify-between items-center px-[60px]">
                    <div>
                        <label htmlFor="dob" className="text text-black text-xl font-medium leading-8">Ngày sinh
                            <span className="dob text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="date" id="Ngay_sinh" name="Ngay_sinh"  onChange={handleChange} value={formData.Ngay_sinh}/><br/>
                    </div>
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Giới tính
                            <span className="text text-[#F00]"> *</span>
                        </label><br/>
                        <select className="w-[450px] rounded-[5px] mt-[4px]" id="Gioi_tinh" name="Gioi_tinh"  onChange={handleChange} value={formData.Gioi_tinh}>
                            <option value="" disabled selected>Chọn giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                </div>                   
                <div className="third-section mt-[40px] flex justify-between items-center px-[60px]">
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Email
                            <span className="text text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="Email" name="Email" placeholder="nguyenvana@gmail.com" onChange={handleChange} value={formData.Email}/><br/>
                    </div>
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Số điện thoại
                            <span className="text text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="SDT" name="SDT" placeholder="0123456789" onChange={handleChange} value={formData.SDT}/><br/>
                    </div>
                </div>      
                <div className="fourth-section mt-[40px] flex justify-between items-center px-[60px]">
                    <div>
                        <label htmlFor="dob" className="text text-black text-xl font-medium leading-8">Ngày ký hợp đồng lao động
                            <span className="dob text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="date" id="Ngay_ky_hop_dong" name="Ngay_ky_hop_dong"  onChange={handleChange} value={formData.Ngay_ky_hop_dong}/><br/>
                    </div>
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Lương
                            <span className="text text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="Luong" name="Luong" placeholder="20000000" onChange={handleChange} value={formData.Luong}/><br/>
                    </div>
                </div>              
                {/* <div className="fifth-section mt-[40px] flex justify-between items-center px-[60px]">
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Email
                            <span className="text text-[#F00]"> *</span>
                        </label><br/>
                        <input className="w-[960px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="nguyenvana@gmail.com" onChange={(e) => handleChangeValue("email", e.target.value)}/><br/>
                    </div>
                </div>                    */}
                <div className="sixth-section mt-[40px] flex justify-between items-center px-[60px] w-full">
                <div>
                    <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Địa chỉ
                        <span className="text text-[#F00]">*</span>
                    </label><br/>
                    <input className="w-[960px] rounded-[5px] mt-[4px]" type="text" id="Dia_chi" name="Dia_chi" placeholder="268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam"
                        onChange={handleChange} value={formData.Dia_chi}/><br/>
                    </div>
                </div>                   
                    
            </form>
        </div>
    )
}

export default AddInfo;