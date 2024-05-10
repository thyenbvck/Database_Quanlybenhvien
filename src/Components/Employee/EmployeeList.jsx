import {useState, useEffect} from 'react'
import React from 'react';

import EmployeeAdd from './EmployeeAdd/EmployeeAdd';
import TableEmployee from "./Component/TableEmployee";
import EmployeeCard from './Component/EmployeeCard';
import InfoTag from './Component/InfoTag';
import ListBar from './Component/ListBar/ListBar';
import AddNew from './Component/AddNew/AddNew';
import EmployeeView from './EmployeeView/EmployeeView';


function EmployeeList() {  
    const [listEmployee, setListEmployee] = useState([]);
    const [listDoctor, setListDoctor] = useState([]);
    const [listNurse, setListNurse] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    const [addNewEmp, setAddNewEmp] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [filterType, setFilterType] = useState("Tất cả")
    const [addDone, setAddDone] = useState(false);
    const [viewEmp, setViewEmp] = useState(false);
    const [viewEmpId, setViewEmpId] = useState();
    const [empCheckId, setEmpCheckId] = useState();
    const [isChecked, setIsChecked] = useState(false);
 
    const handleAddNewEmp = () => {
        setAddNewEmp(true); 
    }

    useEffect(() => {
        if (viewEmpId) {
            setViewEmp(true);
        }
    },[viewEmpId])


    useEffect(() => {
        fetchData();
      }, [addNewEmp, viewEmp, addDone]);
    
      const fetchData = async () => {
        try {
            const result = await fetch("http://localhost:3000/employee");
            const jsonData = await result.json();
            const doctor = jsonData.filter((employee) => employee.Ma_so_nhan_vien.startsWith("BS"));
            const nurse = jsonData.filter((employee) => employee.Ma_so_nhan_vien.startsWith("DD"));
            setListEmployee(jsonData);
            setListDoctor(doctor);
            setListNurse(nurse);
            setDisplayList(jsonData);
        } catch (err) {
          console.log(err);
        }
      };


    useEffect(() => {
        setPageNumber(0);
        setAddDone(false);
        if (filterType === "Tất cả") setDisplayList(listEmployee);
        else if (filterType === "Bác sĩ") setDisplayList(listDoctor);
        else if (filterType === "Điều dưỡng") setDisplayList(listNurse);
    },[filterType])


    const handleEmployeeCardCheckboxChange = (isChecked, empId) => {
        setEmpCheckId(empId);
        setIsChecked(isChecked);
    };

    const handlePage = (page) => {
        setPageNumber(page);
    }

    const handleFilterType = (type) => {
        setFilterType(type);
    }

    if (!addNewEmp) {
        if (!viewEmp) {
            return (
                <div className="w-full bg-[#EFF7FE] flex items-center flex-col">
                    <div className='flex my-[40px] w-[1080px]'>
                            <AddNew onClick={handleAddNewEmp}/>
                            <InfoTag 
                                title="Nhân viên"
                                value={listEmployee.length}
                                source="/images/EmployeeImage.png"
                            ></InfoTag>
                            <InfoTag 
                                title="Bác sĩ"
                                value={listDoctor.length}
                                source="/images/DoctorImage1.png"
                            ></InfoTag>
                            <InfoTag 
                                title="Điều dưỡng"
                                value={listNurse.length}
                                source="/images/NurseImage1.png"
                            ></InfoTag>
                    </div>
                    <TableEmployee isChecked={isChecked} listLen={displayList.length} filterType={filterType} handleFilterType={handleFilterType}>
                        <div className='flex flex-wrap w-[1080px] px-[21px]'>
                            {
                                displayList.slice(pageNumber*9, ((pageNumber+1) * 9)).map((emp, index) => 
                                    <EmployeeCard filterType = {filterType} key={index} emp = {emp} empCheckId = {empCheckId} isChecked={isChecked} handleCheck={handleEmployeeCardCheckboxChange} handleView = {(id) => setViewEmpId(id)}/>
                                )
                            }
                        </div>
                    </TableEmployee> 
                    <div className='flex items-center w-[1080px] justify-between p-[10px] mt-[24px]'>
                        <div>
                            <p className='text-black text-lg font-medium leading-6'>Tổng số lượng: {displayList.length}</p>
                        </div>
                        <ListBar pageNumber={pageNumber} handlePage={handlePage}/>
                    </div>
                </div>
            )
        }
        else {
            return (
                <EmployeeView handleCloseView={() => {setViewEmp(false); setViewEmpId(null);}} handleCloseAdd={() => setAddNewEmp(false)} empId = {viewEmpId} handleAddDone={(done) => setAddDone(done)}/>
            )
        }
    }
    else {
            return (
                <EmployeeAdd handleCloseAdd={() => setAddNewEmp(false)} handleAddDone = {(done) => setAddDone(done)}/>
            )
        
    }
    
}

export default EmployeeList;