import { useState } from 'react';
import React from 'react';

function EmployeeCard({isChecked, emp, handleCheck, handleView, empCheckId, filterType}) {
    
    return (
        <div className='w-[316px] h-[220px] my-[15px] mx-[15px] rounded-[30px] shadow-[0_4px_15px_0px_rgba(216,210,252,0.64)]'>
            <div className='image-section relative'>
                <div className='w-full absolute flex justify-between flex-1 p-6 items-center '>
                    <div>
                        <input type='checkbox' checked={emp.Ma_so_nhan_vien === empCheckId? isChecked : null} onChange={(e) => handleCheck(e.target.checked, emp.Ma_so_nhan_vien)}/>
                    </div>
                </div>
                <img className='' src="/images/DoctorImage.png" alt="EmployeeImage" />
            </div>
            <div className='content-section flex flex-col pt-2.5 justify-between'>
                <div className='row-container flex justify-between px-9'>
                    <p className='text-black text-sm not-italic font-medium leading-6'>{}</p>
                </div>
                <div className='row-container flex justify-between px-9'>
                    <p className='text-black text-sm not-italic font-medium leading-6'>{emp.Ho + " " + emp.Ten}</p>
                    <p className='text-[#0544E4] text-xs not-italic font-normal leading-[18px]' onClick={() => handleView(emp.Ma_so_nhan_vien)}>Hồ sơ ↗</p>
                </div>
            </div>
            <div className='content-section flex flex-col justify-between'>
                <div className='row-container flex justify-between px-9'>
                    <p className='text-black text-sm not-italic font-medium leading-6'>{emp.Ma_so_nhan_vien}</p>
                </div>
            </div>
        </div>
    )
  
}

export default EmployeeCard;