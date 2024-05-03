import {useState, useEffect} from 'react'
import React from 'react';

// import EmployeeAdd from './EmployeeAdd/EmployeeAdd';

import TableHome from "./Component/Table/Table";    //OK
// import EmployeeCard from './Component/EmployeeCard';//
import InfoTag from './Component/InfoTag';          //OK
import ListBar from './Component/ListBar/ListBar';
// import AddNew from './Component/AddNew/AddNew';


function HomeDisplay() {  
    const [checkedState, setCheckedState] = useState([]);
    const [listEmployeeStatus, setListEmployeeStatus] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [countChecked, setCountChecked] = useState(0);
    const [addNewEmp, setAddNewEmp] = useState(false);

    // const handleAddNewEmp = () => {
    //     setAddNewEmp(true); 
    //     console.log("work");
    // }

    // useEffect(() => {
    //     fetch("api/patients/list", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setListPatient_Info(data);
    //         setCheckedState(new Array(data.length).fill(false));
    //       })
    //       .catch((error) => console.error('Error fetching patient data:', error));
    //   }, []);

    if (!addNewEmp) {
        return (
            <div className="w-full h-full bg-[#EFF7FE] flex items-center flex-col">
                <div className='flex my-[40px] w-[1080px]'>
                        {/* <AddNew onClick={handleAddNewEmp}/> */}
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
                <div className='flex items-center w-[1080px] justify-between p-[10px] mt-[24px]'>
                    <div>
                        <p className='text-black text-lg font-medium leading-6'>Tổng số lượng: 238</p>
                    </div>
                    <ListBar/>
                </div>
            </div>
            
        )
    }
    else {
        return (
            <div className='w-full h-full bg-[#EFF7FE] flex items-center flex-col'>
                {/* <EmployeeAdd/> */}
            </div>
        )
    }
    
}

export default HomeDisplay;