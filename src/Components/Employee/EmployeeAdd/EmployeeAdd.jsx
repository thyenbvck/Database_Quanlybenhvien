import { useEffect, useState, useRef } from "react";
import HuyButton from "../../Button/Huy_Button";
import LuuButton from "../../Button/Luu_Button";

import AddInfo from "./AddInfo";
import NotiPopup from "../Component/NotiPopup";


function EmployeeAdd({handleCloseAdd, handleAddDone}) {
    const [content, setContent] = useState('info');
    const infoButtonRef = useRef(null);
    const specialistButtonRef = useRef(null);
    const scheduleButtonRef = useRef(null);
    const patientButtonRef = useRef(null);
    const [showNotiPopup, setShowNotiPopup] = useState(false);
    const [dataDone, setDataDone] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("success");

    const [newEmpInfo, setNewEmpInfo] = useState({
        Ma_so_nhan_vien: "",
        CCCD: "",
        Ho: "",
        Ten: "",
        Ngay_sinh: "",
        Gioi_tinh: "",
        Email: "",
        SDT: "",
        Ngay_ky_hop_dong: "",
        Luong: "",
        Dia_chi: ""
    });

    useEffect(() => {
        if (dataDone) {
            fetch("/employee", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEmpInfo),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Employee created:", data);
            })
            .catch((error) => console.error('Error creating employee:', error));
        }
    }, [dataDone]);

    const handleOpenNotiPopup = () => {
        if (content === "schedule" || content === "patient") setSubmitStatus("alert");
        setShowNotiPopup(true);
    }

    
    const handleCloseNotiPopup = () => {
        setShowNotiPopup(false);
        handleCloseAdd();
    }

    const handleAlertClose = () => {
        if (["lastName", "firstName", "dob", "gender", "address", "ssn", "phone", "dateBegin", "salary", "email"].every(value => newEmpInfo[value] === null || newEmpInfo[value] === "")) {
            handleCloseAdd();
        }
        else {
            setSubmitStatus("warning");
            handleOpenNotiPopup();
        }
    }
 
    const handleSaveTest = () => {
        if (Object.values(newEmpInfo).every(value => value !== null && value !== "")) {
            setSubmitStatus("success");
            setDataDone(true);
            console.log("success");
        }
        else {
            setSubmitStatus("fail");
            setDataDone(false);
        }
        handleOpenNotiPopup();
        console.log(newEmpInfo);
    }
   
    const handleChangeValue = (field, value) => {
        if (field === "degree") {
            const updatedDegree = newEmpInfo.degree;
            updatedDegree[parseInt(value[0])] = value.substr(1);
            setNewEmpInfo({ ...newEmpInfo, degree: updatedDegree });
        }
        else setNewEmpInfo({...newEmpInfo, [field]: value});
    }

    const handleRemoveDegree = (value) => {
        const updatedDegree = newEmpInfo.degree.filter(deg => deg !== value);
        setNewEmpInfo({ ...newEmpInfo, degree: updatedDegree });
    }
    
    return (
        <div className="w-full bg-[#EFF7FE] flex items-center flex-col">
            {
                showNotiPopup &&
                <div className="fixed z-[1] text-justify-center top-[28%]">
                    <NotiPopup content = {submitStatus} page = {content} done = {dataDone} handleCloseNotiPopup={handleCloseNotiPopup} handleAddDone = {handleAddDone} handleCloseAdd = {handleCloseAdd}/>
                </div>
            }
            <div className="top-section mt-[8px] w-[1080px] px-[36px] py-[20px] flex items-center justify-between">
                <div className="content flex items-center">
                    <p className="text-[#032B91] text-[32px] font-bold leading-[48px]">Nhân viên mới</p>
                </div>
                <button className="w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[10px] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] hover:bg-transparent hover:border-[3px] hover:border-[#032B91] hover:border-solid"
                    onClick={handleAlertClose}>
                    <img src="/images/xbutton.png"/>
                </button>
            </div>
            <div className="table-container w-[1080px] h-fit rounded-[47px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)]">
                <div className="w-[1080px] h-[76px] bg-[#CDDBFE] rounded-t-[47px] flex justify-between px-[36px] items-center">
                    <button className={` ${content === "info"? "bg-[#032B91] text-[#F9FBFF] font-semibold" : "text-[#032B91] font-bold"} w-[200px] h-[44px] text-2xl leading-9 px-5 py-1 rounded-[20px] `} id="info" onClick={() => setContent("info")} ref={infoButtonRef}>Thông tin</button>
                </div>
                <div className="content">
                    {content === 'info' && <AddInfo formData = {newEmpInfo} handleChangeValue = {handleChangeValue}/>}
                </div>
           </div>
           <div className="footer-section w-[1080px] mt-[20px] pr-[36px] flex justify-end">
                <div className="pr-[18px]" onClick={handleAlertClose}>
                    <HuyButton/>
                </div>
                <div className="hover:cursor-pointer" onClick={handleSaveTest}>
                    <LuuButton/>
                </div>
           </div>
        </div>
    )
}

export default EmployeeAdd;