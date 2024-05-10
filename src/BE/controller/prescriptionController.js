const prescriptionModels=  require("../models/prescriptionModels");
    const updatePrescription = async (req, res, next) => {
      try {
        const newMedicine = await prescriptionModels.updatePrescription(req.params.id,req.body);
        res.status(201).json({ Result: 'Sua thành công' })
      } catch (e) {
      res.status(500).json({ error: "Internal server error" });
      }
  
}
module.exports = {
    updatePrescription
}