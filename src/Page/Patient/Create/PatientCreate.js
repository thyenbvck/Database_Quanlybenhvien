// import React, { useState } from "react";
// const PatientInfoForm = () => {
//   const [userField, setUserField] = useState({
//     Ma_benh_nhan: "",
//     CCCD: "",
//     Ho: "",
//     Ten: "",
//     Gioi_tinh: "",
//     Dia_chi: "",
//     Email: "",
//     Ngay_sinh: "",
//   });

//   const changeUserFieldHandler = (e) => {
//     setUserField({
//       ...userField,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmitChange = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/Patient/Create", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(userField),
//       });
//       if (response.ok) {
//         console.log("Data successfully sent to server");
//       } else {
//         console.error("Failed to send data to server");
//       }
//     } catch (error) {
//       console.error("Something Wrong: ", error);
//     }
//   };
//   return (
//     <form
//       className="needs-validation"
//       noValidate
//       style={{ marginLeft: "80px" }}
//       onSubmit={onSubmitChange}
//     >
//       <div className="form-row">
//         <div className="col-md-4 mb-3">
//           <label htmlFor="ma_so_nhan_vien">Mã bệnh nhân</label>
//           <input
//             type="text"
//             className="form-control"
//             id="ma_benh_nhan"
//             placeholder="Mã bệnh nhân"
//             value={userField.Ma_benh_nhan}
//             onChange={changeUserFieldHandler}
//             name="Ma_benh_nhan"
//             required
//           />
//         </div>
//         <div className="col-md-4 mb-3">
//           <label htmlFor="cccd" className="text-pink">CCCD</label>
//           <input
//             type="text"
//             className="form-control"
//             id="cccd"
//             placeholder="CCCD"
//             value={userField.CCCD}
//             onChange={changeUserFieldHandler}
//             name="CCCD"
//             required
//           />
//         </div>
//         <div className="col-md-4 mb-3">
//           <label htmlFor="ho">Họ</label>
//           <input
//             type="text"
//             className="form-control"
//             id="ho"
//             placeholder="Họ"
//             value={userField.Ho}
//             onChange={changeUserFieldHandler}
//             name="Ho"
//             required
//           />
//         </div>
//         <div className="col-md-4 mb-3">
//           <label htmlFor="ten">Tên</label>
//           <input
//             type="text"
//             className="form-control"
//             id="ten"
//             placeholder="Tên"
//             value={userField.Ten}
//             onChange={changeUserFieldHandler}
//             name="Ten"
//             required
//           />
//         </div>
//         <div className="col-md-4 mb-3">
//           <label htmlFor="gioiTinh">Giới Tính</label>
//           <select
//             className="custom-select"
//             input
//             type="Gioitinh"
//             id="gioiTinh"
//             value={userField.Gioi_tinh}
//             onChange={changeUserFieldHandler}
//             name="Gioi_tinh"
//             required
//           >
//             <option value="">Chọn...</option>
//             <option>Nam</option>
//             <option>Nữ</option>
//             <option>Khác</option>
//           </select>
//           <div className="invalid-tooltip">Vui lòng chọn giới tính.</div>
//         </div>
//         <div className="col-md-4 mb-3">
//           <label htmlFor="diaChi">Địa Chỉ</label>
//           <input
//             type="text"
//             className="form-control"
//             id="diaChi"
//             placeholder="Địa Chỉ"
//             value={userField.Dia_chi}
//             onChange={changeUserFieldHandler}
//             name="Dia_chi"
//             required
//           />
//           <div className="invalid-tooltip">Vui lòng nhập địa chỉ.</div>
//         </div>
//         <div className="col-md-4 mb-3">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Email"
//             value={userField.Email}
//             onChange={changeUserFieldHandler}
//             name="Email"
//             required
//           />
//           <div className="invalid-tooltip">
//             Vui lòng nhập địa chỉ email hợp lệ.
//           </div>
//         </div>
//         <div className="col-md-4 mb-3">
//           <label htmlFor="ngaySinh">Ngày Sinh</label>
//           <input
//             type="date"
//             className="form-control"
//             id="ngaySinh"
//             value={userField.Ngay_sinh}
//             onChange={changeUserFieldHandler}
//             name="Ngay_sinh"
//             required
//           />
//           <div className="invalid-tooltip">Vui lòng nhập ngày sinh hợp lệ.</div>
//         </div>
//       </div>
//       <input className="btn btn-primary" type="submit"></input>
//     </form>
//   );
// };
// export default PatientInfoForm;
