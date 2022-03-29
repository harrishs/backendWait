const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    groupSize: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", ReservationSchema);
