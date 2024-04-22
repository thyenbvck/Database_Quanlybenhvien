import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DisplayInfo.css";
import { getPatients } from "../../../DBfile/dbOperation";

const DisplayPatientInfo = () => {
  const [patients, setPatients] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:3000/Patient");
      setPatients(result.data.recordset);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  const fetchPatients = async () => {
    try {
      const patientsData = getPatients();
      setPatients(patientsData.recordset);
    } catch (error) {
      console.log("Something went wrong dude: ", error);
    }
  };

  const handleAddPatient = () => {
    Navigate("/Patient/Create");
  };
  const handleViewDetails = (userId) => {
    Navigate(`/Patient/${userId}`);
  };
  return (
    <div className="container">
      <h3>User Details</h3>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleAddPatient}>
          Thêm bệnh nhân
        </button>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Mã bệnh nhân</th>
            <th>CCCD</th>
            <th>Họ</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Email</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, i) => (
            <tr key={i}>
              <td>{patient.Ma_benh_nhan}</td>
              <td>{patient.CCCD}</td>
              <td>{patient.Ho}</td>
              <td>{patient.Ten}</td>
              <td>{patient.Dia_chi}</td>
              <td>{patient.Email}</td>
              <td>{patient.Gioi_tinh}</td>
              <td>{patient.Ngay_sinh}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayPatientInfo;
