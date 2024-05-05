const Joi = require('joi')

const createNew = async (req, res, next) => {
    const dataCorrection = Joi.object({
      Ma_so_nhan_vien: Joi.string().required(),
      Ho: Joi.string().required().min(3).max(256).trim().strict(),
      Ten: Joi.string().required().min(3).max(256).trim().strict(),
      ngaySinh: Joi.date().required(),
      gioiTinh:Joi.string().valid('Nam', 'Nữ').required(),
      CCCD:Joi.string().required(),
      SDT: Joi.string().required(),
      ngayKyHopDong:Joi.date().required(),
      Luong:Joi.string().required(),
      Email:Joi.string().required(),
      diaChi:Joi.string().required()  
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
    createNew
  }