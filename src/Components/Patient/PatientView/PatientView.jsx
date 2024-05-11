import { useState, useEffect } from "react";
import ViewRecord from "./ViewRecord";
import ViewMedicine from "./ViewMedicine";
function PatientView({patientId, handleAlertClose}) {
    const [content, setContent] = useState("record")
    const [emp, setEmp] = useState({});
    const [historyData, setHistoryData] = useState({});
    const [medicineData, setMedicineData] = useState({});

      useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        try {
            const result = await fetch(`http://localhost:3000/patient?id=${patientId}`);
            const jsonData = await result.json();
            console.log(jsonData);
            setHistoryData(jsonData.patient);
            setMedicineData(jsonData.medicine);

        } catch (error) {
            console.log(error);
        }
    }
    console.log("patient-----------------",historyData);
    console.log("mediccine-----------------",medicineData);

    
    return (
            <div className="w-full bg-[#EFF7FE] flex items-center flex-col h-full">
                {/* {
                    showNotiPopup &&
                    <div className="fixed z-[1] left-[33%] top-[28%]">
                        <NotiPopup content = {submitStatus} page = {content} done = {dataDone} handleCloseNotiPopup={handleCloseNotiPopup}/>
                    </div>
                } */}
                <div className="top-section mt-[8px] w-[1080px] px-[36px] py-[20px] flex items-center justify-between">
                    <div className="content flex items-center">
                        <p className="text-[#032B91] text-[32px] font-bold leading-[48px]"></p>
                    </div>
                    <button className="w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[10px] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] hover:bg-transparent hover:border-[3px] hover:border-[#032B91] hover:border-solid"
                        onClick={handleAlertClose}>
                        <img src="/images/xbutton.png"/>
                    </button>
                </div>
                <div className="table-container w-[1080px] h-fit rounded-[47px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)]">
                    <div className="w-[1080px] h-[76px] bg-[#CDDBFE] rounded-t-[47px] flex justify-start px-[36px] items-center gap-[50px]">
                        <button className={` ${content === "record"? "bg-[#032B91] text-[#F9FBFF] font-semibold" : "text-[#032B91] font-bold"} w-[200px] h-[44px] text-2xl leading-9 px-5 py-1 rounded-[20px] `} id="record" onClick={() => setContent("record")}>Lịch sử</button>
                        <button className={` ${content === "medicine"? "bg-[#032B91] text-[#F9FBFF] font-semibold" : "text-[#032B91] font-bold"} w-[200px] h-[44px] text-2xl leading-9 px-5 py-1 rounded-[20px] `} id="medicine" onClick={() => setContent("medicine")} >Đơn thuốc</button>
                    </div>
                    <div className="content">
                        {content === 'record' && <ViewRecord historyData={historyData}/>}
                        {content === 'medicine' && <ViewMedicine medicineData={medicineData}/>}
    
                    </div>
               </div>
            </div>
        )
}

export default PatientView;