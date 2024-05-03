import React, { useState } from "react";

const RoomInfoForm = () => {
  const [ roomField, setRoomField] = useState({
    So_phong: "",
    Loai_phong: "",
    So_luong_benh_nhan_hien_tai: 0,
  });

  const changeRoomFieldHandler = (e) => {
    setRoomField({
      ...roomField,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/Room/Create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(roomField),
      });
      if (response.ok) {
        console.log("Data successfully sent to server");
      } else {
        console.error("Failed to send data to server");
      }
    } catch (error) {
      console.error("Something Wrong: ", error);
    }
  };
  return (
    <form
      className="needs-validation"
      noValidate
      style={{ marginLeft: "80px" }}
      onSubmit={onSubmitChange}
    >
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="so_phong">Số phòng</label>
          <input
            type="text"
            className="form-control"
            id="so_phong"
            placeholder="#238"
            value={roomField.So_phong}
            onChange={changeRoomFieldHandler}
            name="So_phong"
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="gioiTinh">Loại phòng</label>
          <select
            className="custom-select"
            input
            type="Loaiphong"
            id="loaiPhong"
            value={roomField.Loai_phong}
            onChange={changeRoomFieldHandler}
            name="Loai_phong"
            required
          >
            <option value="">Chọn...</option>
            <option>2 người</option>
            <option>4 người</option>
            <option>6 người</option>
          </select>
          <div className="invalid-tooltip">Vui lòng chọn loại phòng.</div>
        </div>
      </div>
      <input className="btn btn-primary" type="submit"></input>
    </form>
  );
};

export default RoomInfoForm;
