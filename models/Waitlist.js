const mongoose = require("mongoose");

const WaitlistSchema = new mongoose.Schema(
  {
    restaurantId: { type: String, required: true },
    reservations: [{ reservationId: { type: String } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Waitlist", WaitlistSchema);
