const express = require("express");
const dbOperation = require("../DBfile/dbOperation.js")
const Employee = require('../DBfile/Employee.js')
const getEmployee = async()=>{
  try{
  const allEmployee =await dbOperation.getEmployees()
  return allEmployee
  }catch(error){
    console.error("Error get employee:", error);
  }
}
const createNewEmployee = async (Data) =>{
    try{
        const {
            Ma_so_nhan_vien,
            Ho,
            Ten,
            Ngay_sinh,
            Gioi_tinh,
            CCCD,
            SDT,
            Ngay_ky_hop_dong,
            Luong,
            Dia_chi,
            Email,
          } = Data
      
          const newEmployee = new Employee(
            Ma_so_nhan_vien,
            Ho,
            Ten,
            Ngay_sinh,
            Gioi_tinh,
            CCCD,
            SDT,
            Ngay_ky_hop_dong,
            Luong,
            Dia_chi,
            Email,
          );
      
          await dbOperation.createEmployees(newEmployee);
        } catch (error) {
          console.error("Error creating employee:", error);
        }
}
const updateEmployee = async (id,Data) => {
  try {
    const {
      Ho,
      Ten,
      Ngay_sinh,
      Gioi_tinh,
      CCCD,
      SDT,
      Ngay_ky_hop_dong,
      Luong,
      Dia_chi,
      Email,
    } = Data;
    const updatedEmployee = new Employee(
      id,
      Ho,
      Ten,
      Ngay_sinh,
      Gioi_tinh,
      CCCD,
      SDT,
      Ngay_ky_hop_dong,
      Luong,
      Dia_chi,
      Email,
    );
    await dbOperation.updateEmployee(id,updatedEmployee);
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};
const deleteEmployee = async (Ma_so_nhan_vien) => {
  try {
    // Gọi hàm trong dbOperation để xóa một nhân viên khỏi cơ sở dữ liệu
    await dbOperation.deleteEmployee(Ma_so_nhan_vien);
  } catch (error) {
    console.error("Error deleting employee:", error);
  }
};
module.exports = {
    getEmployee,
    createNewEmployee,
    updateEmployee,
    deleteEmployee
}