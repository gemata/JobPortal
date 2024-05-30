import React, { useEffect, useState } from "react";

const EditWorkExperience = ({ userData, workExperienceDetail }) => {
  const [workExperience, setWorkExperience] = useState({
    companyName: "",
    jobTitle: "",
    country: "",
    city: "",
    jobType: "",
    currentlyWorkingHere: false,
    startDate: "",
    endDate: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Helper function to format date to yyyy-MM-dd
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (workExperienceDetail) {
      setWorkExperience({
        ...workExperienceDetail,
        startDate: formatDate(workExperienceDetail.startDate),
        endDate: formatDate(workExperienceDetail.endDate),
      });
    }
  }, [workExperienceDetail]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setWorkExperience({
      ...workExperience,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const requestBody = {
      ...workExperience,
      UserId: userData.id,
    };

    console.log(requestBody);

    try {
      const response = await fetch(
        `http://localhost:5000/api/workexperience/${workExperience.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.error("Error:", responseData.error);
        setErrorMessage(responseData.error);
      } else {
        setSuccessMessage("Work experience details saved successfully.");
        setWorkExperience({
          companyName: "",
          jobTitle: "",
          country: "",
          city: "",
          jobType: "",
          currentlyWorkingHere: false,
          startDate: "",
          endDate: "",
          description: "",
        });
        window.location.reload();
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setErrorMessage(
        "An error occurred while saving work experience details."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-4 bg-white rounded shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          value={workExperience.companyName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          value={workExperience.jobTitle}
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
          value={workExperience.country}
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
          value={workExperience.city}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Job Type</label>
        <input
          type="text"
          name="jobType"
          value={workExperience.jobType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Currently Working Here
        </label>
        <input
          type="checkbox"
          name="currentlyWorkingHere"
          checked={workExperience.currentlyWorkingHere}
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
          value={workExperience.startDate}
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
          value={workExperience.endDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required={!workExperience.currentlyWorkingHere}
          disabled={workExperience.currentlyWorkingHere}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={workExperience.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          rows="4"
        />
      </div>
      {errorMessage && <div className="text-red-600">{errorMessage}</div>}
      {successMessage && <div className="text-green-600">{successMessage}</div>}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-purple-500 text-white font-bold rounded"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditWorkExperience;
