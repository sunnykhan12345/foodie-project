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
