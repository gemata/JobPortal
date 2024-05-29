import React, { useEffect, useState } from "react";
import AddEducation from "./EducationCRUDs/AddEducation";
import EditEducation from "./EducationCRUDs/EditEducation";
import Modal from "./EducationCRUDs/Modal";
import DeleteEducation from "./EducationCRUDs/DeleteEducation";

const ProfileDetail = ({ userData }) => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [currentEducation, setCurrentEducation] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/educations/user/${userData.id}`)
      .then((response) => response.json())
      .then((data) => {
        setEducationList(data);
      })
      .catch((error) => console.error("Error fetching education list:", error));
  }, [userData]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenEditModal = (education) => {
    setCurrentEducation(education);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentEducation(null);
  };

  const handleOpenDeleteModal = (education) => {
    setCurrentEducation(education);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const addEducationDetail = (newEducation) => {
    setEducationList((prevList) => [...prevList, newEducation]);
    handleCloseModal();
  };

  const updateEducationDetail = (updatedEducation) => {
    setEducationList((prevList) =>
      prevList.map((edu) =>
        edu.id === updatedEducation.id ? updatedEducation : edu
      )
    );
    handleCloseEditModal();
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
      {educationList.length > 0 && (
        <div className="mt-4">
          {educationList.map((education, index) => (
            <div key={index} className="mt-4 p-4 border rounded">
              <div className="flex justify-between">
                <div className="font-bold">{education.schoolName}</div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => handleOpenEditModal(education)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#8d3f88"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenDeleteModal(education)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                {education.degreeType} - {education.degreeName}
              </div>
              <div className="text-gray-600">
                {formatDate(education.startDate)} -{" "}
                {formatDate(education.endDate) || "Current"}
              </div>
              <div className="text-gray-600">{education.location}</div>
            </div>
          ))}
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddEducation
          userData={userData}
          addEducationDetail={addEducationDetail}
        />
      </Modal>
      <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
        <EditEducation
          userData={userData}
          educationDetail={currentEducation}
          updateEducationDetail={updateEducationDetail}
        />
      </Modal>
      <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
        <DeleteEducation
          educationDetail={currentEducation}
          onClose={handleCloseDeleteModal}
        />
      </Modal>
    </div>
  );
};

export default ProfileDetail;
