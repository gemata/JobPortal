import React, { useEffect, useState } from "react";
import AddEducation from "./EducationCRUDs/AddEducation";
import Modal from "./EducationCRUDs/Modal";

const ProfileDetail = ({ userData }) => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="w-full rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="font-bold text-xl mb-2">Contact Information</div>
      <p className="text-gray-700 text-base">{contact.name}</p>
      <p className="text-gray-700 text-base">
        Email:{" "}
        <a href={`mailto:${contact.email}`} className="text-blue-500">
          {contact.email}
        </a>
      </p>
      <p className="text-gray-700 text-base">
        Phone:{" "}
        <a href={`tel:${contact.phone}`} className="text-blue-500">
          {contact.phone}
        </a>
      </p>

      <div className="mt-10 flex justify-between items-center">
        <div className="font-bold text-xl mb-2">Summary</div>
        <button className="text-purple-500">ADD</button>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <div className="font-bold text-xl mb-2">Links</div>
        <button className="text-purple-500">ADD</button>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <div className="font-bold text-xl mb-2">Skills</div>
        <button className="text-purple-500">ADD</button>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <div className="font-bold text-xl mb-2">Work Experience</div>
        <button className="text-purple-500">ADD</button>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <div className="font-bold text-xl mb-2">Education</div>
        <button className="text-purple-500" onClick={handleOpenModal}>
          ADD
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddEducation />
      </Modal>
    </div>
  );
};

export default ProfileDetail;
