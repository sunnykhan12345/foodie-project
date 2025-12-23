import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    BookingName: {
      type: String,
      required: true,
    },
    BookingTitle: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    SellingPrice: {
      type: Number,
      required: true,
    },
    PublishDate: {
      type: Number,
    
    },
  },
  { timestamps: true }
);

const booking = mongoose.model("books",bookingSchema)
export default booking