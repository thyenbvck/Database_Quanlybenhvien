const express = require("express");
const Employee = require("./src/DBfile/Employee.js");
const Room = require("./src/DBfile/Room.js");
const dbOperation = require("./src/DBfile/dbOperation.js");
const cors = require("cors");

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/employee/create", async (req, res) => {
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

app.post("/room/create", async (req, res) => {
  try {
    const { So_phong, Loai_phong, So_luong_benh_nhan_hien_tai } = req.body;

    const newRoom = new Room(So_phong, Loai_phong, So_luong_benh_nhan_hien_tai);

    await dbOperation.createRoom(newRoom);
    res.status(201).json({ message: "Room created successfully" });
  } catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/patient", async (req, res) => {
  try {
    const patients = await dbOperation.getPatients();
    res.json(patients);
  } catch (error) {
    console.log(error);
  }
});

// dbOperation.getEmployees();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
