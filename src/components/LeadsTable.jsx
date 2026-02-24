function LeadsBoard({ leads }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Leads Overview</h2>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-3">Name</th>
            <th>Status</th>
            <th>Revenue</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b hover:bg-gray-50">
              <td className="py-3">{lead.name}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    lead.status === "New"
                      ? "bg-blue-100 text-blue-600"
                      : lead.status === "Converted"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {lead.status}
                </span>
              </td>

              <td>${lead.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadsBoard;