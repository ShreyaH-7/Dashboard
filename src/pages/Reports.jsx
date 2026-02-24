import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Charts from "../components/Charts";
import StatCard from "../components/StatCard";
import leadsData from "../data/leads";

function Reports() {
  const [leads] = useState(leadsData);
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

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">
            Reports & Analytics
          </h1>

          <div className="flex gap-6 flex-wrap mb-8">
            <StatCard title="Total Leads" value={totalLeads} />
            <StatCard title="New Leads" value={newLeads} />
            <StatCard title="Converted" value={convertedLeads} />
            <StatCard title="Revenue" value={`$${totalRevenue}`} />
          </div>
          <Charts leads={leads} />
        </div>
      </div>
    </div>
  );
}

export default Reports;