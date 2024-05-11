import { useState, useEffect, useRef } from "react";
import FormList from "./FormList";
import ListBar from "../../../Employee/Component/ListBar/ListBar";
import Popup from "./Popup";
function ViewRecord({historyData}) {
    const [patientList, setPatientList] = useState(1);
    const [pageNumber, setPageNumber] = useState(0);
    const [addProgress, setAddProgress] = useState(false);
    const [patient, setPatient] = useState();

    const handlePage = (index) => {
        setPageNumber(index);
    }
    const handleOpen = (pat) => {
        setAddProgress(true);
    }

    console.log(historyData);
    
    if (!historyData) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
    else {
        return (
            <div className="table-conttainer w-full px-[60px] py-[40px] flex flex-col justify-between"> 
            {
                addProgress &&
                <div className="fixed z-[1] left-[35%] top-[28%]">
                    <Popup handleClose={() => setAddProgress(false)} progress={patient}/>
                </div>
            }       
                <div className="header flex justify-between items-center">
                    <div className="content px-[8px] flex">
                        <p className="text-[#032B91] text-2xl font-semibold leading-9">Lịch sử dịch vụ</p>
                    </div>
                    <div className="right-header gap-[16px] flex items-center content-end">
                        <div className="w-[237px] h-[42px] flex shrink-0 items-center rounded-full bg-[#EFF7FE] px-[20px] py-[12px]">
                            <div className="font-sans text-[12px] font-normal leading-[18px] text-[#000]">Tìm kiếm</div>
                        </div>
                        <img src="/images/Patient_Sorted.png" alt="sorted" />
                        <img src="/images/Patient_filter.png" alt="filter" />
                    </div>
    
                </div>
                <div className="list my-[20px] h-[268px] ">
                    <FormList prop={['STT', 'Mã tiến trình', 'Ngày thực hiện', 'Dịch vụ', 'Bác sĩ', "Chi tiết"]}/>
                    <div className="list-content flex flex-col mt-[20px] h-full">
                        {!historyData && <p className="text-black text-[34px] not-italic font-medium leading-[48px] mt-[30px]">Chưa có dữ liệu nào</p>}
                        {historyData && 
                            <div className="w-full flex flex-col gap-[20px] h-full">
                                {historyData.slice(pageNumber*5, ((pageNumber+1) * 5)).map((uniPatient, index) => (
                                    <div key={index} className="header-content flex justify-between w-full items-center pl-[80px] pr-[60px]">
                                        <p className="text-black font-normal leading-6" >{index + 1}</p>
                                        <p className="text-black font-normal leading-6 pl-[60px]">{uniPatient["Ma_lan_su_dung_dich_vu"]}</p>
                                        <p className="text-black font-normal leading-6 pl-[80px]">{setDateFormat(uniPatient["Ngay"])}</p>
                                        <p className="text-black font-normal leading-6 pl-[80px]">{uniPatient["Ten_dich_vu"]}</p>
                                        <p className="text-black font-normal leading-6">{uniPatient["Ten_bac_si"]}</p>
                                        <p className="text-[#0544E4] font-normal leading-6" onClick = {() => setAddProgress(true)}>Chi tiết</p>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
    
                <div className="footer">
                    {patientList &&
                        <div className='flex items-center justify-between p-[10px]'>
                            <div>
                                <p className='text-black text-lg font-medium leading-6'>Tổng số lượng: {historyData.length}</p>
                            </div>
                            <ListBar inForm = {true} pageNumber={pageNumber} handlePage={handlePage}/>           
                        </div>
                    }
                </div>
                
            </div>
        )
    }

}

function setDateFormat(date) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US');
}

export default ViewRecord;
