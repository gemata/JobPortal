import React, { useState } from "react";

const AddEducation = () => {
  const [education, setEducation] = useState({
    schoolName: "",
    degreeType: "",
    degreeName: "",
    country: "",
    city: "",
    currentlyStudyingHere: false,
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEducation({
      ...education,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education details:", education);
    // Add logic to submit the form data to your server
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-4 bg-white rounded shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          School Name
        </label>
        <input
          type="text"
          name="schoolName"
          value={education.schoolName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Degree Type
        </label>
        <input
          type="text"
          name="degreeType"
          value={education.degreeType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Degree Name
        </label>
        <input
          type="text"
          name="degreeName"
          value={education.degreeName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Country</label>
        <input
          type="text"
          name="country"
          value={education.country}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">City</label>
        <input
          type="text"
          name="city"
          value={education.city}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Currently Studying Here
        </label>
        <input
          type="checkbox"
          name="currentlyStudyingHere"
          checked={education.currentlyStudyingHere}
          onChange={handleChange}
          className="mr-2 leading-tight"
        />
        <span className="text-gray-700">Yes</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={education.startDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">End Date</label>
        <input
          type="date"
          name="endDate"
          value={education.endDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
          disabled={education.currentlyStudyingHere}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={education.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-purple-500 text-white font-bold rounded"
      >
        Save Changes
      </button>
    </form>
  );
};

export default AddEducation;
