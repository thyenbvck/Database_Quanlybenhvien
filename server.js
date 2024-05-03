const express = require("express");
const Employee = require("./DBfile/Employee");
const Room = require("./DBfile/Room")
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

app.post("/Room/Create", async (req, res) => {
  try {
    const {
      So_phong,
      Loai_phong,
      So_luong_benh_nhan_hien_tai,
    } = req.body;

    const newRoom = new Room(
      So_phong,
      Loai_phong,
      So_luong_benh_nhan_hien_tai,
    );

    await dbOperation.createRoom(newRoom);
    res.status(201).json({ message: "Room created successfully" });
  } catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

dbOperation.getEmployees();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

