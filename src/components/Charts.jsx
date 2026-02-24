import {PieChart,Pie,Cell,Tooltip,ResponsiveContainer,
} from "recharts";

function Charts({ leads }) {
  const newCount = leads.filter((l) => l.status === "New").length;
  const convertedCount = leads.filter(
    (l) => l.status === "Converted"
  ).length;
  const contactedCount = leads.filter(
    (l) => l.status === "Contacted"
  ).length;

  const data = [
    { name: "New", value: newCount },
    { name: "Converted", value: convertedCount },
    { name: "Contacted", value: contactedCount },
  ];

  const COLORS = ["#3b82f6", "#22c55e", "#eab308"];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Leads Status Chart</h2>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;