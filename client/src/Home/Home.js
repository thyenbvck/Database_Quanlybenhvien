import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Routes và Route từ react-router-dom
import DisplayInfo from '../Doctor/Display/DisplayInfo.js'
import PersonalInfoForm from '../Doctor/Create/CreateDoctor.js';

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="Patient">Bệnh Nhân</Link> {/* Sử dụng Link thay cho thẻ a */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Doctor">Bác sĩ</Link> {/* Sử dụng Link thay cho thẻ a */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Nope">Điều dưỡng</Link> {/* Sử dụng Link thay cho thẻ a */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Medicine">Thuốc</Link> {/* Sử dụng Link thay cho thẻ a */}
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path='/Doctor' element={<DisplayInfo />} />
                <Route path='/Doctor/create' element={<PersonalInfoForm />} />
            </Routes>
        </div>
    );
};

export default Home;
