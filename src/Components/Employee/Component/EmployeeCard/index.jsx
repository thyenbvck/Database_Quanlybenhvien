import { useState } from 'react';
import React from 'react';

function EmployeeCard({status, onCheckboxChange, EmployeeInfo}) {
    const handleCheckbox = (event) => onCheckboxChange(event.target.checked);
    
    return (
        <div className='w-[316px] h-[220px] rounded-[30px] shadow-[0_4px_15px_0px_rgba(216,210,252,0.64)]'>
            <div className='image-section relative'>
                <div className='w-full absolute flex justify-between flex-1 px-4 items-center '>
                    <div>
                        <input type='checkbox'/>
                    </div>
                    <div className='border-[3px] border-[#FFD602] rounded-[20px] w-[83px] h-[39px] flex justify-center items-center mt-3'>
                        <p className='text-[#FFD602] text-xs not-italic font-bold leading-[18px]'>Khám bệnh</p>
                    </div>

                </div>
                <img className='' src="/images/DoctorImage.png" alt="EmployeeImage" />
            </div>
            <div className='content-section flex flex-col py-2.5 justify-between'>
                <div className='row-container flex justify-between px-9'>
                    <p className='text-black text-sm not-italic font-medium leading-6'>Bác sĩ</p>
                    <p className='text-black text-xs not-italic font-normal leading-[18px]'>Khoa Thần kinh</p>
                </div>
                <div className='row-container flex justify-between px-9'>
                    <p className='text-black text-sm not-italic font-medium leading-6'>Nguyễn Văn A</p>
                    <p className='text-[#0544E4] text-xs not-italic font-normal leading-[18px]'>Hồ sơ ↗</p>
                </div>
            </div>
        </div>
    )
  
}

export default EmployeeCard;