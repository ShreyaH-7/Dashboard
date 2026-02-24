import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import LeadsBoard from "../components/LeadsTable";
import Charts from "../components/Charts";
import leadsData from "../data/leads";

function Dashboard() {
  const [leads, setLeads] = useState(leadsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const totalLeads = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const convertedLeads = leads.filter(
    (lead) => lead.status === "Converted"
  ).length;

  const totalRevenue = leads.reduce(
    (sum, lead) => sum + lead.revenue,
    0
  );
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">
            CRM Dashboard
          </h1>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by name..."
              className="p-3 border rounded-lg w-72"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="p-3 border rounded-lg"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Converted">Converted</option>
            </select>
          </div>
          <div className="flex gap-6 flex-wrap mb-8">
            <StatCard title="Total Leads" value={totalLeads} />
            <StatCard title="New Leads" value={newLeads} />
            <StatCard title="Converted" value={convertedLeads} />
            <StatCard title="Revenue" value={`$${totalRevenue}`} />
          </div>
          <Charts leads={leads} />
          <LeadsBoard leads={filteredLeads} />

        </div>
      </div>
    </div>
  );
}

export default Dashboard;