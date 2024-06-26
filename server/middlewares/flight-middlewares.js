const { ClientErrors } = require("../utils/error-codes");
const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.departureAirportId ||
    !req.body.arrivalAirtportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price ||
    !req.body.totalSeats
  ) {
    return res.status(ClientErrors.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      error: "Missing mandatory properties to create a flight",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
};
