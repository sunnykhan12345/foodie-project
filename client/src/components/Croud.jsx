import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Croud = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    BookingName: "",
    BookingTitle: "",
    Author: "",
    SellingPrice: "",
    PublishDate: "",
  });
  const [editId, setEditId] = useState(null); // Track which book we are editing
  const [loading, setLoading] = useState(false); // Loading state for form submission

  // SweetAlert2 toast configuration
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  // HANDLE INPUT CHANGE
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // FETCH BOOKS LIST
  const fetchBooks = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/book/booklists");
      setBooks(data.booklists);
    } catch (err) {
      console.error(err);
      Toast.fire({ icon: "error", title: "Failed to fetch books ❌" });
    }
  };

  useEffect(() => {
    fetchBooks(); // Fetch books when component mounts
  }, []);

  // SUBMIT FORM (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const payload = {
        ...formData,
        SellingPrice: Number(formData.SellingPrice),
        PublishDate: formData.PublishDate
          ? new Date(formData.PublishDate).getTime()
          : null,
      };

      if (editId) {
        // Update existing booking
        const { data } = await axios.put(
          `http://localhost:5000/book/booking/${editId}`,
          payload
        );
        if (data.success)
          Toast.fire({
            icon: "success",
            title: "Booking updated successfully ✅",
          });
        setEditId(null); // Reset edit mode
      } else {
        // Add new booking
        const { data } = await axios.post(
          "http://localhost:5000/book/add-book",
          payload
        );
        if (data.success)
          Toast.fire({
            icon: "success",
            title: "Booking added successfully ✅",
          });
      }

      // Reset form
      setFormData({
        BookingName: "",
        BookingTitle: "",
        Author: "",
        SellingPrice: "",
        PublishDate: "",
      });

      fetchBooks(); // Refresh list
    } catch (err) {
      console.error(err);
      Toast.fire({
        icon: "error",
        title: err?.response?.data?.message || "Something went wrong ❌",
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // DELETE BOOK WITH SWEETALERT2 CONFIRM
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axios.delete(
          `http://localhost:5000/book/booking/${id}`
        );
        if (data.success)
          Toast.fire({
            icon: "success",
            title: "Booking deleted successfully ✅",
          });
        fetchBooks();
      } catch (err) {
        console.error(err);
        Toast.fire({
          icon: "error",
          title: err?.response?.data?.message || "Something went wrong ❌",
        });
      }
    }
  };

  // PREFILL FORM FOR EDIT
  const handleEdit = (item) => {
    setFormData({
      BookingName: item.BookingName,
      BookingTitle: item.BookingTitle,
      Author: item.Author,
      SellingPrice: item.SellingPrice,
      PublishDate: item.PublishDate
        ? new Date(item.PublishDate).toISOString().split("T")[0]
        : "",
    });
    setEditId(item._id);
  };

  return (
    <section className="min-h-screen bg-[#fff4f1]">
      {/* NAVBAR */}
      <nav className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-2xl font-bold text-[#ff4d2d]">Booking App</h1>
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
              disabled={loading}
              className="!cursor-pointer px-10 py-3 bg-[#060047] text-white rounded-xl hover:opacity-90 disabled:opacity-50"
            >
              {loading
                ? "Saving..."
                : editId
                ? "Update Booking"
                : "Add Booking"}
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
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-500">
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
                    <td className="p-4 flex gap-2">
                      <button
                        className="cursor-pointer px-3 py-1 bg-[#060047] text-white rounded"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
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
