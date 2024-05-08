const employeeModel=  require("../models/employeeModel");
const getEmployee = async (req,res,next) =>{
  try{
  const allEmployee =  await employeeModel.getEmployee()
  res.json(allEmployee)
  }catch(e){
    res.json({error:"Error"})
  }
}
const createNew = async (req, res, next) => {
    try {
      const newEmployee = await employeeModel.createNewEmployee(req.body);
      res.status(201).json({ Result: 'Đã tạo thành công' })
    } catch (e) {
    res.status(500).json({ error: "Internal server error" });
    }
  }
    const updateEmployee = async (req, res, next) => {
      try {
        const newEmployee = await employeeModel.updateEmployee(req.params.id,req.body);
        res.status(201).json({ Result: 'Sua thành công' })
      } catch (e) {
      res.status(500).json({ error: "Internal server error" });
      }
  
}
const deleteEmployee = async (req, res, next) => {
  try {
    const newEmployee = await employeeModel.deleteEmployee(req.params.id);
    res.status(201).json({ Result: 'Sua thành công' })
  } catch (e) {
  res.status(500).json({ error: "Internal server error" });
  }
}
module.exports = {
    createNew,
    getEmployee,
    updateEmployee,
    deleteEmployee
}