import { useState, useEffect } from "react";
import axios from "axios";

export default function Owner() {

  const [data, setData] = useState({
    propertyTitle: "",
    propertyDescription: "",
    propertyType: "House",
    listingType: "Sale",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    furnishing: "Unfurnished",
    parking: false
  });

  const [files, setFiles] = useState([]);
  const [properties, setProperties] = useState([]);

  const token = localStorage.getItem("token");

  // ================= GET OWNER PROPERTIES =================
  const getProperties = async () => {
    try {
      const res = await axios.get("http://localhost:3000/prop/my", {
        headers: {
          Authorization: `Bearer ${token}`, // 🔥 FIX
        },
      });

      setProperties(res.data.data);

    } catch (err) {
      console.log(err);
    }
  };

  // ================= PAGE LOAD =================
  useEffect(() => {
    getProperties();
  }, []);

  // ================= ADD PROPERTY =================
  const addProperty = async () => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    for (let i = 0; i < files.length; i++) {
      formData.append("propertyImages", files[i]);
    }

    try {
      await axios.post("http://localhost:3000/prop/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Property Added ✅");

      // reset form
      setData({
        propertyTitle: "",
        propertyDescription: "",
        propertyType: "House",
        listingType: "Sale",
        price: "",
        area: "",
        bedrooms: "",
        bathrooms: "",
        furnishing: "Unfurnished",
        parking: false
      });

      setFiles([]);

      getProperties();

    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  // ================= DELETE PROPERTY =================
  const deleteProperty = async (id) => {

    if (!window.confirm("Are you sure to delete? ❗")) return;

    try {
      await axios.delete(`http://localhost:3000/prop/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // 🔥 FIX
        },
      });

      alert("Property Deleted ❌");

      getProperties();

    } catch (err) {
      console.log(err);
      alert("Error deleting ❌");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h2 className="text-3xl font-bold mb-6">🏠 Owner Dashboard</h2>

      {/* ================= FORM ================= */}
      <div className="bg-white p-5 rounded-xl shadow w-96">

        <input
          placeholder="Title"
          value={data.propertyTitle}
          onChange={(e) => setData({ ...data, propertyTitle: e.target.value })}
          className="border p-2 w-full mb-2"
        />

        <textarea
          placeholder="Description"
          value={data.propertyDescription}
          onChange={(e) => setData({ ...data, propertyDescription: e.target.value })}
          className="border p-2 w-full mb-2"
        />

        <select
          value={data.propertyType}
          onChange={(e) => setData({ ...data, propertyType: e.target.value })}
          className="border p-2 w-full mb-2"
        >
          <option>House</option>
          <option>Apartment</option>
          <option>Land</option>
          <option>Commercial</option>
        </select>

        <select
          value={data.listingType}
          onChange={(e) => setData({ ...data, listingType: e.target.value })}
          className="border p-2 w-full mb-2"
        >
          <option>Sale</option>
          <option>Rent</option>
        </select>

        <input
          placeholder="Price"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Area"
          value={data.area}
          onChange={(e) => setData({ ...data, area: e.target.value })}
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Bedrooms"
          value={data.bedrooms}
          onChange={(e) => setData({ ...data, bedrooms: e.target.value })}
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Bathrooms"
          value={data.bathrooms}
          onChange={(e) => setData({ ...data, bathrooms: e.target.value })}
          className="border p-2 w-full mb-2"
        />

        <select
          value={data.furnishing}
          onChange={(e) => setData({ ...data, furnishing: e.target.value })}
          className="border p-2 w-full mb-2"
        >
          <option>Furnished</option>
          <option>Semi Furnished</option>
          <option>Unfurnished</option>
        </select>

        {/* FILE INPUT */}
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className="mb-3"
        />

        <button
          onClick={addProperty}
          className="bg-blue-500 hover:bg-blue-600 text-white w-full p-2 rounded"
        >
          Add Property
        </button>
      </div>

      {/* ================= PROPERTY LIST ================= */}
      <h3 className="mt-8 text-xl font-bold">Your Properties</h3>

      <div className="grid grid-cols-3 gap-4 mt-4">

        {properties.map((p) => (
          <div key={p._id} className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition">

            <img
              src={p.propertyImages?.[0] || "https://via.placeholder.com/300"} // 🔥 FIX
              className="h-40 w-full object-cover rounded"
              alt=""
            />

            <h4 className="font-semibold mt-2">{p.propertyTitle}</h4>
            <p className="text-green-600 font-bold">₹ {p.price}</p>

            <button
              onClick={() => deleteProperty(p._id)}
              className="bg-red-500 hover:bg-red-600 text-white w-full mt-2 p-2 rounded"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}