import { useEffect, useState, useRef } from "react";
import HuyButton from "../../Button/Huy_Button";
import LuuButton from "../../Button/Luu_Button";
import axios from "axios";
import AddInfo from "./AddInfo";
import AddSpecialist from "./AddSpecialist";
import AddSchedule from "./AddSchedule";
import AddPatient from "./AddPatient";
import NotiPopup from "../Component/NotiPopup";


function EmployeeView({handleCloseView, handleCloseAdd, empId, handleAddDone}) {
    const [content, setContent] = useState('info');
    const infoButtonRef = useRef(null);
    const specialistButtonRef = useRef(null);
    const scheduleButtonRef = useRef(null);
    const patientButtonRef = useRef(null);
    const [showNotiPopup, setShowNotiPopup] = useState(false);
    const [dataDone, setDataDone] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("success");
    const [emp, setEmp] = useState({});

    // useEffect(() => {
    //     console.log("IM HERE ---------------");
    //     fetchData();
    // }, []);
    
    // const fetchData = async () => {
    //     try {
    //         const result = await fetch(`http://localhost:3000/employee?EmployeeID=${empId}`);
    //         const jsonData = await result.json();
    //         console.log("JSON DATA ------------------------");
    //         console.log(jsonData);
    //         setEmp(jsonData);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // TRYING TO USE AXIOS INSTEAD OF FETCH
   useEffect(() => {
    fetchData();
   },[]); 

   const fetchData = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/employee?EmployeeID=${empId}`);
        // console.log(result.data);
        setEmp(result.data);
    } catch (error) {
        console.log(error);
    }
   }

    // const [newEmpInfo, setNewEmpInfo] = useState({
    //     name: "abc",
    //     imgURL: null,
    //     lastName: null,
    //     firstName: null,
    //     dob: null,
    //     gender: null,
    //     ssn: null,
    //     phone: null,
    //     address: null,
    //     email: null,
    //     med: null,
    //     type: null,
    //     faculty: null,
    //     position: null,
    //     jobTitle: null,
    //     dateBegin: null,
    //     dateEnd: null,
    //     degree: []

    // });

    // useEffect(() => {
    //     if (dataDone) {
    //         fetch("/api/employees", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(newEmpInfo),
    //         })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log("Employee created:", data);
    //         })
    //         .catch((error) => console.error('Error creating employee:', error));
    //     }
    // }, [dataDone]);

    const handleOpenNotiPopup = () => {
        setShowNotiPopup(true);
    }

    
    const handleCloseNotiPopup = () => {
        setShowNotiPopup(false);
        handleAddDone(false);
    }

    const handleAlertClose = () => {
        handleAddDone(false);
        handleCloseAdd();
        handleCloseView();
    }


    // const handleSaveTest = () => {
    //     if (content === "info") {
    //         if (['lastName', 'firstName', 'dob', 'gender', 'ssn', 'phone', 'address'].every(field => newEmpInfo[field] !== null && newEmpInfo[field] !== "")) {
    //             setSubmitStatus("success");
    //             if (['type', 'faculty', 'position', 'jobTitle', 'dateBegin'].every(field => newEmpInfo[field] !== null && newEmpInfo[field] !== "")) {
    //                 setDataDone(true);
    //             }
    //             else {
    //                 setDataDone(false);
    //             }
    //         }
    //         else {
    //             setSubmitStatus("fail");
    //         }
            
    //     }
    //     if (content === "specialist") {
    //         if (['type', 'faculty', 'position', 'jobTitle', 'dateBegin'].every(field => newEmpInfo[field] !== null && newEmpInfo[field] !== "")) {
    //             setSubmitStatus("success");
    //             if (['lastName', 'firstName', 'dob', 'gender', 'ssn', 'phone', 'address'].every(field => newEmpInfo[field] !== null && newEmpInfo[field] !== "")) {
    //                 const filteredDegreeArray = newEmpInfo.degree.filter(deg => deg !== "");
    //                 setNewEmpInfo(prevState => ({
    //                 ...prevState,
    //                 degree: filteredDegreeArray
    //         }));
    //                 setDataDone(true);
    //             }
    //             else {
    //                 setDataDone(false);
    //             }
    //         }
    //         else {
    //             setSubmitStatus("fail");
    //         }
    //     }
    //     setSubmitStatus("success")
    //     handleOpenNotiPopup();
    //     console.log(newEmpInfo);
    // }

    // const handleChangeValue = (field, value) => {
    //     if (field === "degree") {
    //         const updatedDegree = newEmpInfo.degree;
    //         updatedDegree[parseInt(value[0])] = value.substr(1);
    //         setNewEmpInfo({ ...newEmpInfo, degree: updatedDegree });
    //     }
    //     else setNewEmpInfo({...newEmpInfo, [field]: value});
    // }

    // const handleRemoveDegree = (value) => {
    //     const updatedDegree = newEmpInfo.degree.filter(deg => deg !== value);
    //     setNewEmpInfo({ ...newEmpInfo, degree: updatedDegree });
    // }
    console.log(emp);
    return (
        <div className="w-full bg-[#EFF7FE] flex items-center flex-col h-full">
            {
                showNotiPopup &&
                <div className="fixed z-[1] left-[33%] top-[28%]">
                    <NotiPopup content = {submitStatus} page = {content} done = {dataDone} handleCloseNotiPopup={handleCloseNotiPopup}/>
                </div>
            }
            <div className="top-section mt-[8px] w-[1080px] px-[36px] py-[20px] flex items-center justify-between">
                <div className="content flex items-center">
                    <p className="text-[#032B91] text-[32px] font-bold leading-[48px]">{emp.Ho? emp.Ho + " " + emp.Ten : ""}</p>
                </div>
                <button className="w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[10px] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] hover:bg-transparent hover:border-[3px] hover:border-[#032B91] hover:border-solid"
                    onClick={handleAlertClose}>
                    <img src="/images/xbutton.png"/>
                </button>
            </div>
            <div className="table-container w-[1080px] h-fit rounded-[47px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)]">
                <div className="w-[1080px] h-[76px] bg-[#CDDBFE] rounded-t-[47px] flex justify-start px-[36px] items-center gap-[50px]">
                    <button className={` ${content === "info"? "bg-[#032B91] text-[#F9FBFF] font-semibold" : "text-[#032B91] font-bold"} w-[200px] h-[44px] text-2xl leading-9 px-5 py-1 rounded-[20px] `} id="info" onClick={() => setContent("info")} ref={infoButtonRef}>Thông tin</button>
                    <button className={` ${content === "schedule"? "bg-[#032B91] text-[#F9FBFF] font-semibold" : "text-[#032B91] font-bold"} w-[200px] h-[44px] text-2xl leading-9 px-5 py-1 rounded-[20px] `} id="schedule" onClick={() => setContent("schedule")} ref={scheduleButtonRef}>Lịch hẹn</button>
                    <button className={` ${content === "patient"? "bg-[#032B91] text-[#F9FBFF] font-semibold" : "text-[#032B91] font-bold"} w-[200px] h-[44px] text-2xl leading-9 px-5 py-1 rounded-[20px] `} id="patient" onClick={() => setContent("patient")} ref={patientButtonRef}>Bệnh nhân</button>
                </div>
                <div className="content">
                    {content === 'info' && <AddInfo emp = {emp}/>}
                    {content === 'schedule' && <AddSchedule emp = {emp}/>}
                    {content === 'patient' && <AddPatient DocID = {empId}/>}
                </div>
           </div>
        </div>
    )
}

export default EmployeeView;