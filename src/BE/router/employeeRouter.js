const express = require("express");
const employeeController = require('../controller/employeeController')
const employeeValidation = require('../validation/employeeValidation')
const employeeRouter = express.Router();
employeeRouter.route('/')
    .get(employeeController.getEmployee)
    .post(employeeValidation.createNew,employeeController.createNew)
employeeRouter.route('/:id')
    .put(employeeValidation.updatedEmployee,employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee)


module.exports = employeeRouter