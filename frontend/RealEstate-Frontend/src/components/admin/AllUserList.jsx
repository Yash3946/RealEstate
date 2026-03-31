import React, { useEffect, useState } from "react";
import axios from "axios";

export const AllUserList = ({ role }) => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("/user/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    let data = res.data.data;

    if (role) {
      data = data.filter((u) => u.role === role);
    }

    setUsers(data);
  };

  // 🎨 ROLE COLOR
  const getRoleColor = (role) => {
    if (role === "admin") return "bg-purple-500";
    if (role === "owner") return "bg-green-500";
    if (role === "agent") return "bg-yellow-500";
    return "bg-blue-500";
  };

  // 🔥 CHANGE ROLE WITH CONFIRM
  const changeRole = async (id, newRole, oldRole) => {

    if (newRole === oldRole) return;

    const confirmChange = window.confirm(
      `Are you sure you want to change role from "${oldRole}" to "${newRole}"?`
    );

    if (!confirmChange) return;

    try {
      await axios.put(
        `/user/role/${id}`,
        { role: newRole },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      getUsers();

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, [role]);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">👥 Users Management</h1>

      <div className="grid grid-cols-2 gap-5">

        {users.map((u) => (
          <div
            key={u._id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition flex justify-between items-center"
          >

            {/* LEFT */}
            <div>
              <h2 className="font-semibold text-lg">
                {u.firstName} {u.lastName}
              </h2>

              <p className="text-gray-500 text-sm">{u.email}</p>

              <span className={`text-white text-xs px-2 py-1 rounded mt-2 inline-block ${getRoleColor(u.role)}`}>
                {u.role}
              </span>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-2 items-end">

              <select
                value={u.role}
                onChange={(e) => changeRole(u._id, e.target.value, u.role)}
                className="border px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="buyer">Buyer</option>
                <option value="owner">Owner</option>
                <option value="agent">Agent</option>
                <option value="admin">Admin</option>
              </select>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};