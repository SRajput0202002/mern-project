const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (response.length === 0) {
      // Check if response array is empty
      return res.status(404).json({ msg: "No services found" });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.error(`services: ${error}`); // Log error
    res.status(500).json({ msg: "Internal server error" }); // Send internal server error response
  }
};

module.exports = services; // Export the services function
