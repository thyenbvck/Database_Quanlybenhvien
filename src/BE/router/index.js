const express = require("express");
const employeeRouter = require('./employeeRouter')
const Router = express.Router()
Router.route('/')
  .get(async (req, res) => {
    res.status(200).end('<h1>Hello World!</h1><hr>')
  })
Router.use('/employee', employeeRouter)
module.exports = Router