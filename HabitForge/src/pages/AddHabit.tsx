import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";

import { useState } from "react";

const AddHabit = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // reset form data
    setFormData({ title: "", description: "", date: "" });
    closeForm();
  };

  return (
    <>
      <button
        className="bg-gray-200 text-white rounded-xl w-[100px] h-[50px] mx-10 shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
        onClick={openForm}
      >
        Add Button
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-gray-300 space-y-4 mx-auto p-8 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] shadow-lg"
          >
            {/* top */}
            <div className="flex w-full justify-between p-4">
              <h2 className="text-black text-lg">Add Habit</h2>
              <button
                type="button"
                onClick={closeForm}
                className="hover:opacity-90 transition-all"
              >
                <CloseIcon />
              </button>
            </div>
            <input
              name="title"
              type="text"
              placeholder="Add title here"
              className="w-full border-2 border-gray-400 rounded-lg transition-all"
              value={formData.title}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Add description here"
              className="w-full border-2 border-gray-400 rounded-lg transition-all h-1/2"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <input
              name="date"
              type="date"
              placeholder="Add date here"
              className="w-full border-2 border-gray-400 rounded-lg transition-all"
              value={formData.date}
              onChange={handleChange}
            />
            <button type="submit" className="border-2 border-red">
              Submit
            </button>

            <div></div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddHabit;
