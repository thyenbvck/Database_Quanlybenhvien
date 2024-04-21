import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DisplayInfo.css";
const DisplayPatientInfo = () => {
  const [userData, setUSerData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:3000/Patient");
      setUSerData(result.data.recordset);
    } catch (err) {
      console.log("somthing Wrong");
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
            <th>ID</th>
            <th>Fist Name</th>
            <th>Last Name</th>
            <th>Specialty.</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.Ma_so_nhan_vien} </td>
                <td>{user.Ho} </td>
                <td>{user.Ten} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayPatientInfo;
