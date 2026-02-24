
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Settings() {
  const [name, setName] = useState("Admin");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert("Settings Saved Successfully ");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Settings</h1>

          <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
            <div>
              <label className="block mb-2 font-medium">
                Profile Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 border rounded-lg w-80"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="font-medium">Dark Mode</label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="w-5 h-5"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="font-medium">
                Enable Notifications
              </label>
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="w-5 h-5"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">
                Change Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="p-3 border rounded-lg w-80"
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Save Changes
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;