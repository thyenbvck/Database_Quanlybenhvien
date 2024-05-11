const config = require("./dbConfig"),
  sql = require("mssql/msnodesqlv8");

const getEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request().query("SELECT * FROM nhan_vien WHERE is_delete='0'");
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
      .query(`SELECT * FROM nhan_vien WHERE Ma_so_nhan_vien = '${ID}' AND is_delete = '0'`);
    return employee.recordset;
  } catch (error) {
    console.log(error);
  }
};

const getPatientByID = async (ID) => {
  try {
    const pool = await sql.connect(config);
    const patient = await pool
      .request()
      .query(`SELECT * FROM benh_nhan WHERE Ma_benh_nhan = '${ID}'`);
    return patient.recordset;
  } catch (error) {
    console.log(error);
  }
}

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
      .input("SĐT", Employee.SDT)
      .input("is_delete", 0)
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
        @Ngay_sinh,
        @SDT,
        @is_delete
      )`);
    return employees;
  } catch (error) {
    console.log(error);
  }
};

// const deleteEmployee = async (ID, error) => {
//   try {
//     console.log("JOKER");
//   } catch (error) {
//     const pool = await sql.connect(config);
//     await pool.request().query(``)
//   }
// }

const updateEmployeeSalary = async (ID, increase) => {
  try {
    const pool = await sql.connect(config);
    const exec = await pool.request().query(`
                                DECLARE @newSalary INT;
                                DECLARE @error_output_2 NVARCHAR(255);
                                EXEC update_luong_nhan_vien 
                                @Ma_so_nhan_vien = '${ID}',
                                @Muc_tang = ${increase},
                                @Luong_moi=@newSalary OUTPUT,
                                @Error = @error_output_2 OUTPUT;
                                PRINT @newSalary;
                                PRINT @error_output_2;`
                                );
    console.log("SUCCESS");
  } catch (error) {
    console.log(error);
  }
}


// const createRoom = async (Room) => {
//   try {
//     let pool = await sql.connect(config);
//     let rooms = await pool
//       .request()
//       .input("So_phong", Room.So_phong)
//       .input("Loai_phong", Room.Loai_phong)
//       .input("So_luong_benh_nhan_hien_tai", Room.So_luong_benh_nhan_hien_tai)
//       .query(` INSERT INTO phong_benh VALUES (
//         @So_phong,
//         @Loai_phong,
//         @So_luong_benh_nhan_hien_tai
//       )`);
//     return rooms;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getPatients = async () => {
//   try {
//     const pool = await sql.connect(config);
//     const patients = await pool.request().query("SELECT * FROM benh_nhan");
//     return patients.recordset;
//   } catch (error) {
//     console.log(error);
//   }
// };

const getPatients = async () => { //[GET] /patient
  try {
    const pool = await sql.connect(config);
    const patients = await pool.request().query("SELECT * FROM Lan_kham_gan_nhat()");
    console.log(patients);
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
      .query(`SELECT * FROM lich_su_kham_benh('${patientId}')`);
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

const getRoomByNum = async (num) => {
  try {
    const pool = await sql.connect(config);
    const room = await pool
      .request()
      .query(`SELECT * FROM phong_benh WHERE So_phong = '${num}'`);
    return room.recordset;
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

const getNearestList = async () => {
  try {
    const pool = await sql.connect(config);
    const lists = await pool
      .request()
      .query(`SELECT * FROM Lan_kham_gan_nhat()`);
    return lists.recordset;
  } catch (error) {
    console.log(error);
  }
};

// HOW TO REFORMAT THE DATE AND TIME 
// const date = new Date(user.Ngay_hen);
// const time = new Date(user.Gio_hen);
// const formatDate = date.toLocaleDateString();
// const formatTime = time.toLocaleTimeString([], {
//   hour12: true,
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   timeZone: "UTC",
// });

const getMedHistory = async (PatientID) => {
  try {
    const pool = await sql.connect(config);
    const medicines = await pool
      .request()
      .query(`SELECT * FROM lich_su_don_thuoc('${PatientID}')`);
    return medicines.recordset;
  } catch (error) {
    console.log(error);
  }
};

const updateLuuTru = async (
  Ma_lan_su_dung_dich_vu,
  Ngay_ket_thuc,
  So_phong
) => {
  try {
    const pool = await sql.connect(config);
    const DoiPhong = await pool
      .request()
      .input("So_phong", So_phong)
      .query(
        `EXEC Cap_nhat_phong_benh @So_phong = '${So_phong}', @Ma_so_dich_vu_luu_tru = '${Ma_lan_su_dung_dich_vu}'`
      );
    const DoiNgay = await pool
      .request()
      .input("Ngay_ket_thuc", Ngay_ket_thuc)
      .query(
        `UPDATE dich_vu_luu_tru SET Ngay_ket_thuc = '${Ngay_ket_thuc}' WHERE Ma_so = '${Ma_lan_su_dung_dich_vu}'`
      );
    return { DoiPhong, DoiNgay };
  } catch (error) {
    console.log(error);
  }
};

const getPatientByDocID = async (DocID) => {
  try {
    const pool = await sql.connect(config);
    const list = await pool
      .request()
      .query(`SELECT Ma_so, Ho, Ten, Ngay, Ten_dich_vu
              FROM lan_su_dung_dich_vu
              JOIN lan_di_benh_vien
              ON lan_su_dung_dich_vu.Ma_so_lan_di_benh_vien = lan_di_benh_vien.Ma_so_lan_di_benh_vien
              JOIN benh_nhan
              ON lan_di_benh_vien.Ma_benh_nhan = benh_nhan.Ma_benh_nhan
              JOIN loai_dich_vu
              ON lan_su_dung_dich_vu.Ma_loai_dich_vu = loai_dich_vu.Ma_loai_dich_vu
              WHERE lan_su_dung_dich_vu.Ma_so_nhan_vien = '${DocID}'`);
    return list.recordset;
  } catch (error) {
    console.log(error);
  }
};
/* update đơn thuốc */
const updatePrescription = async(id,Medicine)=>{
  try {
    let pool = await sql.connect(config);
    for (let i = 0; i < Medicine.length; i++) {
        const tenThuoc = Medicine[i].Ten;
        const soLuong = Medicine[i].So_luong;
        let result = await pool.request()
            .input("id", sql.NVarChar(100), id)
            .input("Ten_thuoc", sql.NVarChar(100), tenThuoc)
            .input("So_luong", sql.Int, soLuong)
            .query(`
            UPDATE don_thuoc_gom_thuoc
            SET So_luong = @So_luong
            WHERE Ma_don_thuoc = @id
            AND Ma_thuoc IN (
                SELECT t.Ma_thuoc
                FROM thuoc AS t
                WHERE t.Ten = @Ten_thuoc
            );
            `);
    }
  }catch (error) {
    console.log(error);
  }
}
module.exports = {
  getEmployees,
  createEmployees,
  getPatients,
  getEmployeeByID,
  getMedicines,
  getEmptySchedule,
  getHistory,
  getMostWork,
  getRoom,
  getRoomByNum,
  getNearestList,
  getMedHistory,
  updateLuuTru,
  getPatientByID,
  getPatientByDocID,
  updatePrescription,
  updateEmployeeSalary
};