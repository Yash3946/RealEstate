import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminVisitRequests = () => {

  const [visits, setVisits] = useState([]);

  const getVisits = async () => {
    const res = await axios.get("/visit/visits");
    setVisits(res.data.data);
  };

  const updateStatus = async (id, status) => {

    const confirm = window.confirm(`Change status to ${status}?`);
    if (!confirm) return;

    await axios.put(`/visit/update/${id}`, { status });

    getVisits();
  };

  useEffect(() => {
    getVisits();
  }, []);

  const getColor = (status) => {
    if (status === "Approved") return "bg-green-500";
    if (status === "Rejected") return "bg-red-500";
    if (status === "Completed") return "bg-blue-500";
    return "bg-yellow-500";
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">📅 Visit Requests</h1>

      <div className="grid grid-cols-2 gap-5">

        {visits.map((v) => (
          <div key={v._id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg">

            {/* PROPERTY */}
            <h2 className="font-bold text-lg">
              {v.propertyId?.propertyTitle}
            </h2>

            {/* BUYER */}
            <p className="text-sm text-gray-500">
              Buyer: {v.buyerId?.firstName}
            </p>

            {/* OWNER */}
            <p className="text-sm text-gray-500">
              Owner: {v.ownerId?.firstName}
            </p>

            {/* DATE */}
            <p className="text-sm mt-1">
              📅 {new Date(v.visitDate).toDateString()}
            </p>

            {/* TIME */}
            <p className="text-sm">
              ⏰ {v.visitTime}
            </p>

            {/* STATUS */}
            <span className={`text-white text-xs px-2 py-1 rounded mt-2 inline-block ${getColor(v.status)}`}>
              {v.status}
            </span>

            {/* ACTION */}
            <div className="flex gap-2 mt-4">

              <button
                onClick={() => updateStatus(v._id, "Approved")}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
              >
                Approve
              </button>

              <button
                onClick={() => updateStatus(v._id, "Rejected")}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Reject
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default AdminVisitRequests;