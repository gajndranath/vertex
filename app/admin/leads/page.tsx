export default function LeadsPage() {
  const dummyLeads = [
    { id: 1, name: "John Doe", company: "Tesla", service: "Meshing", date: "2026-06-24", status: "new" },
    { id: 2, name: "Jane Smith", company: "Ford", service: "Model Build-up", date: "2026-06-23", status: "read" },
  ];

  return (
    <div className="py-10 container mx-auto px-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Manage Leads</h1>
      <div className="bg-card rounded shadow overflow-x-auto border border-muted/20">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/10 border-b border-muted/20">
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Company</th>
              <th className="p-4 font-semibold">Service</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyLeads.map((lead) => (
              <tr key={lead.id} className="border-b border-muted/20 hover:bg-muted/5 transition-colors">
                <td className="p-4">{lead.date}</td>
                <td className="p-4 font-medium">{lead.name}</td>
                <td className="p-4">{lead.company}</td>
                <td className="p-4">{lead.service}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${lead.status === 'new' ? 'bg-accent/20 text-accent' : 'bg-green-500/20 text-green-500'}`}>
                    {lead.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-sm text-accent hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
