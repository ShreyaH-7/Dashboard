import {Link} from 'react-router-dom';
function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-10">
        CRM Panel
      </h1>
      <nav className="flex flex-col gap-4">
  <Link to="/" className="px-4 py-2 rounded-lg hover:bg-gray-700">
    Dashboard
  </Link>

  <Link to="/leads" className="px-4 py-2 rounded-lg hover:bg-gray-700">
    Leads
  </Link>

  <Link to="/reports" className="px-4 py-2 rounded-lg hover:bg-gray-700">
    Reports
  </Link>

  <Link to="/settings" className="px-4 py-2 rounded-lg hover:bg-gray-700">
    Settings
  </Link>
</nav>

    </div>
  );
}

export default Sidebar;