const express = require("express");
const Employee = require("./DBfile/Employee");
const Patient = require("./DBfile/Patient.js");
const dbOperation = require("./DBfile/dbOperation.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/Employee/Create", async (req, res) => {
  try {
    const {
      Ma_so_nhan_vien,
      CCCD,
      Ho,
      Ten,
      Gioi_tinh,
      Dia_chi,
      Email,
      Ngay_ky_hop_dong,
      Luong,
      Ngay_sinh,
    } = req.body;

    const newEmployee = new Employee(
      Ma_so_nhan_vien,
      CCCD,
      Ho,
      Ten,
      Gioi_tinh,
      Dia_chi,
      Email,
      Ngay_ky_hop_dong,
      Luong,
      Ngay_sinh
    );

    await dbOperation.createEmployees(newEmployee);
    res.status(201).json({ message: "Employee created successfully" });
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/Patient/Create", async (req, res) => {
  try {
    const {
      Ma_benh_nhan,
      CCCD,
      Ho,
      Ten,
      Dia_chi,
      Email,
      Gioi_tinh,
      Ngay_sinh,
    } = req.body;

    const newPatient = new Patient(
      Ma_benh_nhan,
      CCCD,
      Ho,
      Ten,
      Dia_chi,
      Email,
      Gioi_tinh,
      Ngay_sinh
    );
    await dbOperation.createPatients(newPatient);
    res.status(201).json({ message: "Patient created successfully" });
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// dbOperation.getPatients().then((res) => {
//   console.log(res.recordset);
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
