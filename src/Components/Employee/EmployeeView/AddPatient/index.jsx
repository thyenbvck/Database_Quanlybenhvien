import { useState, useRef } from "react";
import "./style.css" 
import FormList from "./FormList";
import ListBar from "../../Component/ListBar/ListBar";

function AddPatient() {
    const [patientList, setPatientList] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);
    const [pageNumber, setPageNumber] = useState(0);

    const handlePage = (index) => {
        setPageNumber(index);
    }
    const handleOpen = () => {
        setShowPopup(true);
    }
    const handleClose = () => {
        setShowPopup(false);
    }
    const props = [
        {
            progess: '#000001',
            patient: 'Nguyen Van A',
            date: '30/04/2024',
            service: 'Kham benh'
        },
        {
            progess: '#000001',
            patient: 'Nguyen Van A',
            date: '30/04/2024',
            service: 'Kham benh'
        },
        {
            progess: '#000001',
            patient: 'Nguyen Van A',
            date: '30/04/2024',
            service: 'Kham benh'
        },
        {
            progess: '#000001',
            patient: 'Nguyen Van A',
            date: '30/04/2024',
            service: 'Kham benh'
        },
        {
            progess: '#000001',
            patient: 'Nguyen Van A',
            date: '30/04/2024',
            service: 'Kham benh'
        },
        {
            progess: '#000001',
            patient: 'Nguyen Van A',
            date: '30/04/2024',
            service: 'Kham benh'
        },
        {
            progess: '#000001',
            patient: 'Nguyen Van A',
            date: '30/04/2024',
            service: 'Kham benh'
        },
        {
            progess: '#000001',
            patient: 'Nguyen Van A',
            date: '30/04/2024',
            service: 'Kham benh'
        },
        {
            progess: '#000001',
            patient: 'Nguyen Van A',
            date: '30/04/2024',
            service: 'Kham benh'
        },
    ];

    return (
        <div className="table-conttainer w-full px-[60px] py-[40px] flex flex-col justify-between">        
            <div className="header flex justify-between items-center">
                <div className="content px-[8px]">
                    <p className="text-[#032B91] text-2xl font-semibold leading-9">Bệnh nhân</p>
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
                <FormList prop={['STT', 'Mã lần dịch vụ', 'Bệnh nhân', 'Ngày thực hiện', 'Dịch vụ']}/>
                <div className="list-content flex flex-col mt-[20px] h-full">
                    {!patientList && <p className="text-black text-[34px] not-italic font-medium leading-[48px] mt-[30px]">Chưa có dữ liệu nào</p>}
                    {patientList && 
                        <div className="w-full flex flex-col gap-[20px] h-full">
                            {props.slice(pageNumber*5, ((pageNumber+1) * 5)).map((uniPatient, index) => (
                                <div key={index} className="header-content flex justify-between w-full items-center pl-[70px] pr-[40px]">
                                    <p className="text-black font-normal leading-6">{index + 1}</p>
                                    {Object.keys(uniPatient).map((key) => (
                                        <p key={key} className="text-black font-normal leading-6">{uniPatient[key]}</p>
                                    ))}
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
                            <p className='text-black text-lg font-medium leading-6'>Tổng số lượng: {props.length}</p>
                        </div>
                        <ListBar inForm = {true} pageNumber={pageNumber} handlePage={handlePage}/>           
                    </div>
                }
            </div>
            
        </div>
    )
}

export default AddPatient;