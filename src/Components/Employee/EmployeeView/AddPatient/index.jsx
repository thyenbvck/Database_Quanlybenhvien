  import { useState, useRef, useEffect } from "react";
import "./style.css" 
import FormList from "./FormList";
import ListBar from "../../Component/ListBar/ListBar";

function AddPatient({ DocID }) {
    // const [patientList, setPatientList] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);
    const [pageNumber, setPageNumber] = useState(0);
    const [data, setData] = useState([]);
    const handlePage = (index) => {
        setPageNumber(index);
    }
    const handleOpen = () => {
        setShowPopup(true);
    }
    const handleClose = () => {
        setShowPopup(false);
    }
    var props = [
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

    const fetchData = async () => {
        try {
            const result = await fetch(`http://localhost:3000/employee/patient/${DocID}`);
            const jsonData = await result.json();
            setData(jsonData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
            {/* <div className="list my-[20px] h-[268px] ">
                <FormList prop={['STT', 'Mã lần dịch vụ', 'Bệnh nhân', 'Ngày thực hiện', 'Dịch vụ']}/>
                <div className="list-content flex flex-col mt-[20px] h-full">
                    {!patientList && <p className="text-black text-[34px] not-italic font-medium leading-[48px] mt-[30px]">Chưa có dữ liệu nào</p>}
                    {patientList && data &&
                        <div className="w-full flex flex-col gap-[20px] h-full">
                            {data.slice(pageNumber*5, ((pageNumber+1) * 5)).map((val, index) => (
                                // <div key={index} className="header-content flex justify-between w-full items-center pl-[70px] pr-[40px]">
                                //     <p className="text-black font-normal leading-6">{index + 1}</p>
                                //     {Object.keys(uniPatient).map((key) => (
                                //         <p key={key} className="text-black font-normal leading-6">{uniPatient[key]}</p>
                                //     ))}
                                // </div>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{val.Ma_so}</td>
                                    <td>{val.Ho} {val.Ten}</td>
                                    <td>{val.Ngay}</td>
                                    <td>{val.Ten_dich_vu}</td>
                                </tr>
                            ))}
                        </div>
                    }
                </div>
            </div> */}
            <div className="body">
                <div className="flex px-12 py-2 justify-between">
                    <table className="w-full justify-between">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã lần dịch vụ</th>
                            <th>Bệnh nhân</th>
                            <th>Ngày thực hiện</th>
                            <th>Dịch vụ</th>
                        </tr>
                        {data
                            .slice(pageNumber * 15, (pageNumber + 1) * 15)
                            .map((val, index) => {
                                let date = new Date(val.Ngay);
                                let formattedDate = date.toLocaleDateString('vi-VN');
                                return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{val.Ma_so}</td>
                                    <td>{val.Ho} {val.Ten}</td>
                                    <td>{formattedDate}</td>
                                    <td>{val.Ten_dich_vu}</td>
                                </tr>
                        )})}
                        </thead>
                    </table>
                </div>
            </div>
            
            <div className="footer">

                    <div className='flex items-center justify-between p-[10px]'>
                        <div>
                            <p className='text-black text-lg font-medium leading-6'>Tổng số lượng: {props.length}</p>
                        </div>
                        <ListBar inForm = {true} pageNumber={pageNumber} handlePage={handlePage}/>           
                    </div>
            </div>
            
        </div>
    )
}

export default AddPatient;