// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./DisplayInfo.css";
// function DisplayPatientInfo() {
//   const [userData, setUSerData] = useState([]);
//   const Navigate = useNavigate();
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const result = await fetch("http://localhost:3000/patient");
//       const jsonData = await result.json();
//       setUSerData(jsonData);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const handleAddPatient = () => {
//     Navigate("/Patient/Create");
//   };
//   const handleViewDetails = (userId) => {
//     Navigate(`/Patient/${userId}`);
//   };
//   return (
//     <div className="container">
//       <h3>User Details</h3>
//       <div className="mb-3">
//         <button className="btn btn-primary" onClick={handleAddPatient}>
//           Thêm bệnh nhân
//         </button>
//       </div>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Mã bệnh nhân</th>
//             <th>Họ tên</th>
//             <th>SĐT</th>
//           </tr>
//         </thead>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="32"
//           height="32"
//           viewBox="0 0 32 32"
//           fill="none"
//         >
//           <circle cx="16" cy="16" r="16" fill="#EFF7FE" />
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M15 7C14.4477 7 14 7.44772 14 8V14H8C7.44772 14 7 14.4477 7 15V17C7 17.5523 7.44772 18 8 18H14V24C14 24.5523 14.4477 25 15 25H17C17.5523 25 18 24.5523 18 24V18H24C24.5523 18 25 17.5523 25 17V15C25 14.4477 24.5523 14 24 14H18V8C18 7.44772 17.5523 7 17 7H15Z"
//             fill="#032B91"
//           />
//         </svg>
//         <tbody>
//           {userData.map((user, i) => {
//             return (
//               <tr key={i}>
//                 <td>{user.Ma_benh_nhan} </td>
//                 <td>
//                   {user.Ho} + {user.Ten}
//                 </td>
//                 <td>{user.So_dien_thoai} </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <button className="bg-pink">Test</button>
//     </div>
//   );
// }

// export default DisplayPatientInfo;
