const express = require("express");
const prescriptionController = require('../controller/prescriptionController')
const prescriptionValidation = require('../validation/prescriptionValidation')
const prescriptionRouter = express.Router();
prescriptionRouter.route('/:id')
    .put(prescriptionController.updatePrescription)


module.exports = prescriptionRouter