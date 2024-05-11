import {useState, useEffect} from 'react'
import React from 'react';

import TableHome from "./Component/Table/Table";   
import InfoTag from './Component/InfoTag'; 

function HomeDisplay() {  
    
    return (
        <div className="w-full h-full bg-[#EFF7FE] flex items-center flex-col">
            <div className='flex my-[40px] w-[1080px]'>
                <InfoTag 
                    title="Bệnh nhân"
                    value="238"
                    source="/images/image6.png"
                ></InfoTag>
                <InfoTag 
                    title="Nhân viên"
                    value="238"
                    source="/images/image6.png"
                ></InfoTag>
                <InfoTag 
                    title="Y tá"
                    value="238"
                    source="/images/image6.png"
                ></InfoTag>
                <InfoTag 
                    title="Bác sĩ"
                    value="238"
                    source="/images/image6.png"
                ></InfoTag>
            </div>
            <TableHome></TableHome>
        </div>
        
    )
}
    

export default HomeDisplay;