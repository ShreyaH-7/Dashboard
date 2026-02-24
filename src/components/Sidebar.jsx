function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-10">
        CRM Panel
      </h1>
      <nav className="flex flex-col gap-4">
        <button className="text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Dashboard
        </button>

        <button className="text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Leads
        </button>

        <button className="text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Reports
        </button>

        <button className="text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Settings
        </button>
      </nav>

    </div>
  );
}

export default Sidebar;