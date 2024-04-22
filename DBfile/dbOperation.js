const config = require("./dbConfig"),
  sql = require("mssql/msnodesqlv8");

const getEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request().query("SELECT * FROM dbo.nhan_vien");
    console.log(employees);
    return employees;
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

const getPatients = async () => {
  try {
    let pool = await sql.connect(config);
    let patients = await pool.request().query("SELECT * FROM dbo.benh_nhan");
    console.log(patients);
    return patients;
  } catch (error) {
    console.log(error);
  }
};

const createPatients = async (Patient) => {
  try {
    let pool = await sql.connect(config);
    let patients = await pool
      .request()
      .input("Ma_benh_nhan", Patient.Ma_benh_nhan)
      .input("CCCD", Patient.CCCD)
      .input("Ho", Patient.Ho)
      .input("Ten", Patient.Ten)
      .input("Dia_chi", Patient.Dia_chi)
      .input("Email", Patient.Email)
      .input("Gioi_tinh", Patient.Gioi_tinh)
      .input("Ngay_sinh", Patient.Ngay_sinh)
      .query(` INSERT INTO benh_nhan VALUES (
        @Ma_benh_nhan,
        @CCCD,
        @Ho,
        @Ten,
        @Dia_chi,
        @Email,
        @Gioi_tinh,
        @Ngay_sinh
      )`);
    return patients;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getEmployees, createEmployees, getPatients, createPatients };
