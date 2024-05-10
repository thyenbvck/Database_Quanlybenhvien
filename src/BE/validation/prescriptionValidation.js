const Joi = require('joi')
  const updatedPrescription = async (req, res, next) => {
    const dataCorrection = Joi.object({
      Ten: Joi.string().required(),
      So_luong: Joi.number().integer().min(0).required() 
    })
    try {
      await dataCorrection.validateAsync(req.body,
        {
          abortEarly: false
        })
      next()
      // res.status(201).json("Tao thanh cong")
    } catch (error) {
    }
  }
  module.exports={
    updatedPrescription
  }