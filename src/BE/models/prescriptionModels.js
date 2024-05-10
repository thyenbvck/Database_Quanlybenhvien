const express = require("express");
const dbOperation = require("../DBfile/dbOperation.js")
const updatePrescription = async (id,Data) => {
  try {
    const Medicine ={
      Ten,
      So_luong
    } = Data;
    await dbOperation.updatePrescription(id,Medicine);
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};
module.exports = {
    updatePrescription
}