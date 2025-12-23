import React, { useEffect, useState } from "react";
import axios from "axios";

const Croud = () => {
  const [open, setOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    BookingName: "",
    BookingTitle: "",
    Author: "",
    SellingPrice: "",
    PublishDate: "",
  });

  // HANDLE INPUT CHANGE
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // FETCH BOOKS LIST
  const fetchBooks = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/book/booklists");
      setBooks(data.booklists); // ✅ Only set the array
    } catch (err) {
      console.error(err);
      alert("Failed to fetch books");
    }
  };

  useEffect(() => {
    fetchBooks(); // Fetch on component mount
  }, []);

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        SellingPrice: Number(formData.SellingPrice),
        PublishDate: new Date(formData.PublishDate).getTime(),
      };

      const { data } = await axios.post(
        "http://localhost:5000/book/add-book",
        payload
      );

      if (data?.success) {
        alert("Book added successfully ✅");

        // Reset form
        setFormData({
          BookingName: "",
          BookingTitle: "",
          Author: "",
          SellingPrice: "",
          PublishDate: "",
        });

        fetchBooks(); // Refresh list after adding
      } else {
        alert(data?.message || "Failed to add book ❌");
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Something went wrong ❌");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-2xl font-bold text-[#ff4d2d]">Booking App</h1>
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            ☰
          </button>
        </div>
      </nav>

      {/* FORM */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6 bg-white p-6 rounded-xl shadow"
        >
          <input
            name="BookingName"
            value={formData.BookingName}
            onChange={handleFormChange}
            placeholder="Booking Name"
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="BookingTitle"
            value={formData.BookingTitle}
            onChange={handleFormChange}
            placeholder="Booking Title"
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="Author"
            value={formData.Author}
            onChange={handleFormChange}
            placeholder="Author"
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="SellingPrice"
            value={formData.SellingPrice}
            onChange={handleFormChange}
            placeholder="Selling Price"
            type="number"
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="PublishDate"
            value={formData.PublishDate}
            onChange={handleFormChange}
            type="date"
            className="border p-3 rounded-lg"
          />

          <div className="lg:col-span-5 text-right">
            <button
              type="submit"
              className="px-10 py-3 bg-[#ff4d2d] text-white rounded-xl hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* TABLE */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Author</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Publish Date</th>
              </tr>
            </thead>

            <tbody>
              {books.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No data found
                  </td>
                </tr>
              ) : (
                books.map((item) => (
                  <tr key={item._id} className="border-t">
                    <td className="p-4">{item.BookingName}</td>
                    <td className="p-4">{item.BookingTitle}</td>
                    <td className="p-4">{item.Author}</td>
                    <td className="p-4">${item.SellingPrice}</td>
                    <td className="p-4">
                      {item.PublishDate
                        ? new Date(item.PublishDate).toLocaleDateString()
                        : "-"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Croud;
