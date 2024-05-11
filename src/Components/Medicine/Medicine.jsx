import { useState, useEffect } from "react";
import React from "react";

import TableHome from "./Component/Table/Table";
import InfoTag from "./Component/InfoTag";
import ListBar from "./Component/ListBar/ListBar";

function MedicineDisplay() {
  const [pageNumber, setPageNumber] = useState(0);

  const handlePage = (page) => {
    setPageNumber(page);
}
  const [medicinData, setMedicineData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const result = await fetch("http://localhost:3000/medicine");
      const jsonData = await result.json();
      setMedicineData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full bg-[#EFF7FE] flex items-center flex-col">
      <div className="flex my-[40px] w-[1080px]">
        {/* <AddNew onClick={handleAddNewEmp}/> */}
        <InfoTag
          title="Thuốc"
          value={medicinData.length}
          source="/images/Medicineimage.png"
        ></InfoTag>
      </div>
      <TableHome medi={medicinData} pageNumber={pageNumber}/>
      <div className="flex items-center w-[1080px] justify-between p-[10px] mt-[24px]">
        <div>
          <p className="text-black text-lg font-medium leading-6">
            Tổng số lượng: {medicinData.length}
          </p>
        </div>
        <ListBar pageNumber={pageNumber} handlePage={handlePage}/>
      </div>
    </div>
  );
}

export default MedicineDisplay;
