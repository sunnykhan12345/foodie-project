import booking from "../modules/BookingModel.js";

export const bookController = async (req, res) => {
  try {
    const body = req.body;
    if (
      !body.BookingName ||
      !body.BookingTitle ||
      !body.Author ||
      !body.SellingPrice
    ) {
      return res
        .status(200)
        .json({ message: "all fields are required", success: false });
    }
    const bookadd = await booking.insertOne(body);
    return res
      .status(201)
      .json({ message: "Booking Created Successfully!", bookadd });
    console.log(bookadd);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const booklistController = async (req, res) => {
  try {
    const booklists = await booking.find({});

    return res.status(200).json({
      message: "Bookings fetched successfully",
      success: true,
      totalBooking: booklists.length,
      booklists,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};

export const deleteBookingController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBooking = await booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({
        message: "Booking not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Booking deleted successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};
export const updatedBookingController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body; // Data to update

    // Update booking by ID
    const updatedBooking = await booking.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // returns the updated document
    );

    if (!updatedBooking) {
      return res.status(404).json({
        message: "Booking not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Booking updated successfully",
      success: true,
      booking: updatedBooking, // return updated booking
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};


