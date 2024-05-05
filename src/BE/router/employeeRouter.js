const express = require("express");
const employeeController = require('../controller/employeeController')
const employeeValidation = require('../validation/employeeValidation')
const employeeRouter = express.Router();
employeeRouter.route('/')
    .get(employeeController.getEmployee)
    .post(employeeValidation.createNew,employeeController.createNew)
module.exports = employeeRouter