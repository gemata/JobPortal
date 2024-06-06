import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaPaperPlane } from "react-icons/fa";

const TestimonialForm = ({ userData }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    rating: 0,
    description: "",
    UserId: "",
  });

  useEffect(() => {
    if (userData.id) {
      setFormData({
        ...formData,
        UserId: userData.id,
      });
    }
  }, [userData]);

  const onStarClick = (nextValue) => {
    setFormData({
      ...formData,
      rating: nextValue,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Testimonial submitted successfully");
        setFormData({
          ...formData,
          rating: 0,
          description: "",
        });
      } else {
        console.error("Failed to submit testimonial");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" px-6 py-12 bg-white">
      <div className="bg-white max-w-[1200px] mx-auto p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4">Submit a Testimonial, It can be Seen by Everyone</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <ReactStars
              count={5}
              value={formData.rating}
              onChange={onStarClick}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Description"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          {successMessage && (
            <div className="bg-green-100 text-green-800 p-2 rounded-md">
              {successMessage}
            </div>
          )}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-jobportal-pink text-white px-4 py-2 rounded-md font-semibold hover:bg-fuchsia-700"
          >
            Submit Testimonial <FaPaperPlane className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialForm;
