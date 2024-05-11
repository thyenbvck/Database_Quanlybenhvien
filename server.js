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
      Ngay_sinh,
      Gioi_tinh,
      Email,
      SDT,
      Ngay_ky_hop_dong,
      Luong,
      Dia_chi,
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
    Ngay_sinh,
    SDT,
    0
    );

    await dbOperation.createEmployees(newEmployee);
    res.status(201).json({ message: "Employee created successfully" });
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/patient", async (req, res) => {
  const PatientID = req.query.id;
  console.log(PatientID);
  try {
    if (PatientID) {
      const patient = await dbOperation.getHistory(PatientID);
      const medicine = await dbOperation.getMedHistory(PatientID);
      console.log(patient);
      res.json({patient, medicine});
    } else {
      const patients = await dbOperation.getNearestList();
      res.json(patients);
    }
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

app.get("/room", async (req, res) => {
  try {
    const rooms = await dbOperation.getRoom();
    res.json(rooms);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async (req, res) => {
  const month = req.query.month;
  try {
    console.log("IM HERE");
    if (month) {
      const lol = await dbOperation.getMostWork(month);
      res.json(lol);
    }
  } catch (error) {
    console.log(error);
  }
});

// app.get("/employee", async (req, res) => {
//   try {
//     const employees = await dbOperation.getEmployees();
//     res.json(employees);
//     console.log(employees);
//   } catch (error) {
//     console.log(error);
//   }
// });

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

dbOperation.getEmployees();

// app.get("/", async (req, res) => {
//   try {
//     const employees = await dbOperation.getEmployees();
//     res.json(employees);
//   } catch (error) {
//     console.log(error);
//   }
// });

app.get("/employee/patient/:docID", async (req, res) => {
  try {
    const docID = req.params.docID;
    const list = await dbOperation.getPatientByDocID(docID);
    res.json(list);
  } catch (error) {
    console.log(error);
  }
});
// dbOperation.getEmployees();
app.put("/prescription/:id",async(req,res)=>{
  try{
    const id = req.params.id;
    const data = req.body;
    await dbOperation.updatePrescription(id,data);
  }catch(error){
    console.log(error);
  }
})


// dbOperation.updateEmployeeSalary('BS10001', 20);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
