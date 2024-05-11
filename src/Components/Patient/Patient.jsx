import { useState, useEffect } from "react"
import PatientView from "./PatientView/PatientView";
import TablePatient from "./Component/Table/Table";
import InfoTag from "./Component/InfoTag";
import ListBar from "./Component/ListBar/ListBar";

function PatientList() {
    const [viewPa, setViewPa] = useState(false);
    const [viewPaId, setViewPaId] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [patientData, setPatientData] = useState([]);

    useEffect(() => {
        if (viewPaId) 
            setViewPa(true);
    }, [viewPaId])

    const handlePage = (page) => {
        setPageNumber(page);
    }


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
    try {
        const result = await fetch("http://localhost:3000/patient");
        const jsonData = await result.json();
        setPatientData(jsonData);
    } catch (err) {
        console.log(err);
    }
    };

    if (!viewPa) {
        console.log(patientData);
        return (
            <div className="w-full h-full bg-[#EFF7FE] flex items-center flex-col">
                <div className='flex my-[40px] w-[1080px]'>
                        <InfoTag  
                            title="Bệnh nhân"
                            value={patientData.length}
                            source="/images/Patient_HeartRateMonitor.png"
                        ></InfoTag>
                </div>
                <div className="container w-[1080px] h-[850px] rounded-[47px] bg-[#ffffff] shadow-[0px_4px_15px_0px_rgba(216,210,252,0.64)] h-full">
                <div className="flex justify-between mx-10 mt-7 mb-5">
                    <div className="w-[250px] h-[44px] text-[#032B91] text-2xl font-bold leading-9 px-5 py-1 rounded-[20px] flex items-center">
                        Bệnh nhân
                    </div>
                    <div className="right-section gap-[16px] flex items-center content-end">    
                        <div className="w-[237px] h-[42px] flex shrink-0 items-center rounded-full bg-[#EFF7FE] px-[20px] py-[12px]">
                            <div className="font-sans text-[12px] font-normal leading-[18px] text-[#000]">Tìm kiếm</div>
                        </div>
                        <img src="/images/Patient_Sorted.png" alt="sorted" />
                        <img src="/images/Patient_filter.png" alt="filter" />
                    </div>
                </div>
                <TablePatient patient={patientData} pageNumber={pageNumber} setID = {(id) => setViewPaId(id)} >
                </TablePatient>
                </div>
                <div className='flex items-center w-[1080px] justify-between p-[10px] mt-[24px]'>
                    <div>
                        <p className='text-black text-lg font-medium leading-6'>Tổng số lượng: {patientData.length}</p>
                    </div>
                    <ListBar pageNumber={pageNumber} handlePage={handlePage}/>
                </div>
            </div>
        )
    }
    else {
        return (
            <PatientView patientId = {viewPaId} handleAlertClose={() => setViewPa(false)}/>
        )
    }
}


export default PatientList;