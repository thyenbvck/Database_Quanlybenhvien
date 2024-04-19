import React, { useState } from 'react';
import axios from 'axios';
  
const PersonalInfoForm = () => {  
    const [userField, setUserField] = useState({
        name: "",
        email: "",
        password: ""
    });
  
    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        //console.log(userField);
  
    }
    const [loading,setLoading]=useState()
  
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const responce= await axios.post("http://localhost:3001/Doctor/create", userField);
            console.log(responce)
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    return (
        <form className="needs-validation" noValidate>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="ho">Họ</label>
              <input type="text" className="form-control" id="ho" placeholder="Họ" required />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="ten">Tên</label>
              <input type="text" className="form-control" id="ten" placeholder="Tên" required />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="ngaySinh">Ngày Sinh</label>
              <input type="date" className="form-control" id="ngaySinh" required />
              <div className="invalid-tooltip">Vui lòng nhập ngày sinh hợp lệ.</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="gioiTinh">Giới Tính</label>
              < select className="custom-select" input type="Gioitinh" id="gioiTinh" required>
                <option value="">Chọn...</option>
                <option>Nam</option>
                <option>Nữ</option>
                <option>Khác</option>
              </select>
              <div className="invalid-tooltip">Vui lòng chọn giới tính.</div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="diaChi">Địa Chỉ</label>
              <input type="text" className="form-control" id="diaChi" placeholder="Địa Chỉ" required />
              <div className="invalid-tooltip">Vui lòng nhập địa chỉ.</div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email" required />
              <div className="invalid-tooltip">Vui lòng nhập địa chỉ email hợp lệ.</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="ngayKiHopDong">Ngày Kí Hợp Đồng</label>
              <input type="date" className="form-control" id="ngayKiHopDong" required />
              <div className="invalid-tooltip">Vui lòng nhập ngày kí hợp đồng hợp lệ.</div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="luong">Lương</label>
              <input type="text" className="form-control" id="luong" placeholder="Lương" required />
              <div className="invalid-tooltip">Vui lòng nhập số tiền lương.</div>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
      );
    }      
export default PersonalInfoForm;