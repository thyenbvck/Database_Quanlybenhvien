import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DisplayInfo.css";
const DisplayEmployeeInfo = () => {
  const [userData, setUSerData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:3000/Employee");
      setUSerData(result.data.recordset);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };
  const handleAddDoctor = () => {
    Navigate("/Employee/Create");
  };
  const handleViewDetails = (userId) => {
    Navigate(`/Employee/${userId}`);
  };
  return (
    <div className="container">
      <h3>User Details</h3>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleAddDoctor}>
          Thêm nhân viên
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
                <td>{user.Chuyen_khoa} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayEmployeeInfo;
