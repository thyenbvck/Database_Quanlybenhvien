import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Routes và Route từ react-router-dom
import DisplayInfo from "../Employee/Display/DisplayInfo.js";
import PersonalInfoForm from "../Employee/Create/EmployeeCreate.js";

const Home = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ marginLeft: 18 }}
      >
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="Patient">
                Bệnh Nhân
              </Link>{" "}
              {/* Sử dụng Link thay cho thẻ a */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Employee">
                Nhân viên
              </Link>{" "}
              {/* Sử dụng Link thay cho thẻ a */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Nope">
                Điều dưỡng
              </Link>{" "}
              {/* Sử dụng Link thay cho thẻ a */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Medicine">
                Thuốc
              </Link>{" "}
              {/* Sử dụng Link thay cho thẻ a */}
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/Employee" element={<DisplayInfo />} />
        <Route path="/Employee/Create" element={<PersonalInfoForm />} />
      </Routes>
    </div>
  );
};

export default Home;
