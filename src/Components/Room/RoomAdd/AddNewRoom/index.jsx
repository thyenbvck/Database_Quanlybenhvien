import { useState } from "react";
import "./style.css"
import PatientInfo from "../AddPatient";

function AddNewRoom() {
    const arrRoomType = ['2 người', '4 người', '6 người'];

    const [patientNum, setpatientNum] = useState(0);

    const handleRemove = () => {
        setpatientNum(patientNum - 1);
    }

    const handleAdd = () => {
        setpatientNum(patientNum + 1);
        console.log(patientNum);
    }

    return (
        <div>
            <form className="my-[40px]" id="myForm" action="#" method="post" enctype="multipart/form-data">
                <div className="first-section mt-[40px] flex justify-between items-center px-[60px]">
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Số phòng 
                            <span className="text text-[#F00]">*</span>
                        </label><br/>
                        <input className="w-[450px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="#238"/><br/>
                    </div>
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Loại phòng 
                            <span className="text text-[#F00]">*</span>
                        </label><br/>
                        <select className="w-[450px] rounded-[5px] mt-[4px]" id="genders" name="genders">
                            {arrRoomType.map(value => 
                                <option>{value}</option>
                            )}
                        </select>
                    </div>
                </div>                   
                <div className="fourth-section mt-[40px] flex flex-col justify-between px-[60px]">
                    <div>
                        <label htmlFor="text" className="text text-black text-xl font-medium leading-8">Bệnh nhân 
                            <span className="text text-[#F00]">*</span>
                        </label><br/>
                        <div className="flex justify-between items-center mb-[20px]">
                            <div>
                                <input className="w-[280px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Mã số dịch vụ lưu trú"/><br/>
                            </div>
                            <div>
                                <input className="w-[280px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Mã bệnh nhân"/><br/>
                            </div>
                            <div>
                                <input className="w-[280px] rounded-[5px] mt-[4px]" type="text" id="text" name="text" placeholder="Họ và Tên"/><br/>
                            </div>
                            <button className="delete-button mt-[4px] w-[48px] h-[42px] flex justify-center items-center border-[1px] rounded-[5px] border-solid border-[#6E7F94] bg-[#eff7fe] text-[#6E7F94] font-medium leading-6 hover:bg-[#BEE1F9] hover:text-black hover:border-black" onClick={handleRemove}>
                                <div className="px-[2px]">
                                    <img src="/images/trashbin.png" className="trashbin opacity-50" />
                                </div>
                            </button>
                        </div>
                        {Array.from({ length: patientNum }, (_, index) => (
                                <PatientInfo key={index} handleRemove={handleRemove} />
                        ))}
                    </div>
                    
                    <div>
                        <button className="Add-button w-[96px] h-[48px] flex justify-center items-center border-[1px] rounded-[5px] border-solid border-[#6E7F94] bg-[#eff7fe] text-[#6E7F94] font-medium leading-6 hover:bg-[#BEE1F9] hover:text-black hover:border-black" 
                            onClick={(e) => {
                                e.preventDefault(); 
                                handleAdd(); 
                            }}>
                            <div className="px-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle className="cir stroke-[#6E7F94]" cx="12" cy="12" r="9.5"/>
                                <mask id="path-2-inside-1_2480_371" fill="white">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 6C10.2239 6 10 6.22386 10 6.5V10H6.5C6.22386 10 6 10.2239 6 10.5V13.5C6 13.7761 6.22386 14 6.5 14H10V17.5C10 17.7761 10.2239 18 10.5 18H13.5C13.7761 18 14 17.7761 14 17.5V14H17.5C17.7761 14 18 13.7761 18 13.5V10.5C18 10.2239 17.7761 10 17.5 10H14V6.5C14 6.22386 13.7761 6 13.5 6H10.5Z"/>
                                </mask>
                                <path className="plus fill-[#6E7F94]" d="M10 10V11H11V10H10ZM10 14H11V13H10V14ZM14 14V13H13V14H14ZM14 10H13V11H14V10ZM11 6.5C11 6.77614 10.7761 7 10.5 7V5C9.67157 5 9 5.67157 9 6.5H11ZM11 10V6.5H9V10H11ZM6.5 11H10V9H6.5V11ZM7 10.5C7 10.7761 6.77614 11 6.5 11V9C5.67157 9 5 9.67157 5 10.5H7ZM7 13.5V10.5H5V13.5H7ZM6.5 13C6.77614 13 7 13.2239 7 13.5H5C5 14.3284 5.67157 15 6.5 15V13ZM10 13H6.5V15H10V13ZM11 17.5V14H9V17.5H11ZM10.5 17C10.7761 17 11 17.2239 11 17.5H9C9 18.3284 9.67157 19 10.5 19V17ZM13.5 17H10.5V19H13.5V17ZM13 17.5C13 17.2239 13.2239 17 13.5 17V19C14.3284 19 15 18.3284 15 17.5H13ZM13 14V17.5H15V14H13ZM17.5 13H14V15H17.5V13ZM17 13.5C17 13.2239 17.2239 13 17.5 13V15C18.3284 15 19 14.3284 19 13.5H17ZM17 10.5V13.5H19V10.5H17ZM17.5 11C17.2239 11 17 10.7761 17 10.5H19C19 9.67157 18.3284 9 17.5 9V11ZM14 11H17.5V9H14V11ZM13 6.5V10H15V6.5H13ZM13.5 7C13.2239 7 13 6.77614 13 6.5H15C15 5.67157 14.3284 5 13.5 5V7ZM10.5 7H13.5V5H10.5V7Z" mask="url(#path-2-inside-1_2480_371)"/>
                                </svg>
                            </div>
                            Thêm
                        </button><br />
                        <div className="text text-black text-xl font-medium leading-8">
                            Tổng số lượng bệnh nhân: {patientNum}
                        </div>
                    </div>
                </div>                     
            </form>
        </div>
    )
}

export default AddNewRoom;