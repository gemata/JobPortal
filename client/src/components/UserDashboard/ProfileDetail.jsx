// ContactCard.js
import React, { useEffect, useState } from "react";

const ProfileDetail = ({ userData }) => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

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
    </div>
  );
};

export default ProfileDetail;
