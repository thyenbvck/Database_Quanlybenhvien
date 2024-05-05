const config = require("./dbConfig"),
  sql = require("mssql/msnodesqlv8");

const getEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request().query("SELECT * FROM nhan_vien");
    return employees.recordset;
  } catch (error) {
    console.log(error);
  }
};

const getEmployeeByID = async (ID) => {
  try {
    const pool = await sql.connect(config);
    const employee = await pool
      .request()
      .query(`SELECT * FROM nhan_vien WHERE Ma_so_nhan_vien = '${ID}'`);
    return employee.recordset;
  } catch (error) {
    console.log(error);
  }
};

const createEmployees = async (Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .input("Ma_so_nhan_vien", Employee.Ma_so_nhan_vien)
      .input("CCCD", Employee.CCCD)
      .input("Ho", Employee.Ho)
      .input("Ten", Employee.Ten)
      .input("Gioi_tinh", Employee.Gioi_tinh)
      .input("Dia_chi", Employee.Dia_chi)
      .input("Email", Employee.Email)
      .input("Ngay_ky_hop_dong", Employee.Ngay_ky_hop_dong)
      .input("Luong", Employee.Luong)
      .input("Ngay_sinh", Employee.Ngay_sinh)
      .query(` INSERT INTO nhan_vien VALUES (
        @Ma_so_nhan_vien,
        @CCCD,
        @Ho,
        @Ten,
        @Gioi_tinh,
        @Dia_chi,
        @Email,
        @Ngay_ky_hop_dong,
        @Luong,
        @Ngay_sinh
      )`);
    return employees;
  } catch (error) {
    console.log(error);
  }
};

const createRoom = async (Room) => {
  try {
    let pool = await sql.connect(config);
    let rooms = await pool
      .request()
      .input("So_phong", Room.So_phong)
      .input("Loai_phong", Room.Loai_phong)
      .input("So_luong_benh_nhan_hien_tai", Room.So_luong_benh_nhan_hien_tai)
      .query(` INSERT INTO phong_benh VALUES (
        @So_phong,
        @Loai_phong,
        @So_luong_benh_nhan_hien_tai
      )`);
    return rooms;
  } catch (error) {
    console.log(error);
  }
};

const getPatients = async () => {
  try {
    const pool = await sql.connect(config);
    const patients = await pool.request().query("SELECT * FROM benh_nhan");
    return patients.recordset;
  } catch (error) {
    console.log(error);
  }
};

const getMedicines = async () => {
  try {
    const pool = await sql.connect(config);
    const medicines = await pool.request().query("SELECT * FROM thuoc");
    return medicines.recordset;
  } catch (error) {
    console.log(error);
  }
};

const getHistory = async (patientId) => {
  try {
    const pool = await sql.connect(config);
    const history = await pool
      .request()
      .query(`SELECT * FROM lich_su_kham_benh(${patientId})`);
    return history.recordset;
  } catch (error) {
    throw error;
  }
};

const getEmptySchedule = async (Ho, Ten, Ngay, Ca) => {
  try {
    const pool = await sql.connect(config);
    const scheduleList = await pool
      .request()
      .query(
        `SELECT * FROM Lich_trong(N'${Ho}', N'${Ten}', '${Ngay}', '${Ca}')`
      );
    return scheduleList.recordset;
  } catch (error) {
    console.log(error);
  }
};

const getMostWork = async (month) => {
  try {
    const pool = await sql.connect(config);
    const mostWorks = await pool
      .request()
      .query(
        `EXECUTE Proc_GetDoctorAppointmentsAndServices @AppointmentMonth = ${month}`
      );
    return mostWorks.recordset;
  } catch (error) {
    console.log(error);
  }
};

const getRoom = async () => {
  try {
    const pool = await sql.connect(config);
    const rooms = await pool.request().query(`SELECT * FROM phong_benh`);
    return rooms.recordset;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEmployees,
  createEmployees,
  createRoom,
  getPatients,
  getEmployeeByID,
  getMedicines,
  getEmptySchedule,
  getHistory,
  getMostWork,
  getRoom,
};
