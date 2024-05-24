import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/solid";

function CheckoutSuccess() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center"
      style={{ backgroundColor: "#39224d" }}
    >
      <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-lg w-full">
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="h-24 w-24 text-green-500 mb-4" />
          <h2 className="text-green-700 text-4xl font-extrabold mb-4 text-center">
            Checkout Successful
          </h2>
          <p className="text-gray-700 text-lg mb-2 text-center">
            Your order is being processed. You can check the status of your
            order in your profile after approximately 10 minutes.
          </p>
          <p className="text-gray-700 text-lg mb-4 text-center">
            If you have any inquiries, please contact our support team at{" "}
            <strong className="text-blue-600">jobhorizonsite@gmail.com</strong>.
          </p>
          <Link
            to="http://localhost:3000/company/dashboard"
            className="mt-4 px-6 py-3 bg-purple-700 text-white text-lg font-semibold rounded-md hover:bg-purple-800 transition duration-300"
          >
            Go To Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
