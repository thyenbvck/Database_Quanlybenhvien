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
module.exports = {
    createNew,
    getEmployee
}