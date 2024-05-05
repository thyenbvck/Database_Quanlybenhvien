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
module.exports = {
    getEmployee,
    createNewEmployee
}