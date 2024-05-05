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

app.post("/employee", async (req, res) => {
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
  const PatientID = req.query.id;
  try {
    if (PatientID) {
      const patient = await dbOperation.getHistory(PatientID);
      res.json(patient);
    } else {
      const patients = await dbOperation.getPatients();
      res.json(patients);
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/patient", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

app.get("/medicine", async (req, res) => {
  try {
    const medicines = await dbOperation.getMedicines();
    res.json(medicines);
  } catch (error) {
    console.log(error);
  }
});

<<<<<<< HEAD
app.get("/employee", async (req, res) => {
  const EmployeeID = req.query.EmployeeID;
  try {
    if (EmployeeID) {
      const employee = await dbOperation.getEmployeeByID(EmployeeID);
      res.json(employee);
    } else {
      const employees = await dbOperation.getEmployees();
      res.json(employees);
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/home", async (req, res) => {
  const month = req.query.month;
  try {
    if (month) {
      const mostWorks = await dbOperation.getMostWork(month);
      res.json(mostWorks);
    } else {
      const mostWorks = await dbOperation.getMostWork("01");
      res.json(mostWorks);
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/room", async (req, res) => {
  try {
    const rooms = await dbOperation.getRoom();
    res.json(rooms);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
