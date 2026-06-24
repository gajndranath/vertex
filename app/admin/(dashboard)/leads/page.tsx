"use client";

import { useEffect, useState } from "react";
import { Inbox } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_URL || 'https://vertex-backeend.onrender.com/api';

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/contact`, { credentials: "include" })
      .then((r) => r.json())
      .then((res) => {
        if (res.success) setLeads(Array.isArray(res.data) ? res.data : []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-black text-foreground tracking-tight mb-1">Leads</h1>
        <p className="text-sm text-muted">All incoming contact form submissions.</p>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-muted">
            <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-3" />
            Loading leads...
          </div>
        ) : leads.length === 0 ? (
          <div className="p-12 text-center text-muted flex flex-col items-center gap-3">
            <Inbox className="w-10 h-10 opacity-30" />
            <p>No leads yet. They'll appear here once someone fills the contact form.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/5 text-xs text-muted uppercase tracking-widest">
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Name</th>
                  <th className="px-6 py-4 font-semibold">Company</th>
                  <th className="px-6 py-4 font-semibold">Email</th>
                  <th className="px-6 py-4 font-semibold">Service</th>
                  <th className="px-6 py-4 font-semibold">Message</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead: any) => (
                  <tr key={lead._id} className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors">
                    <td className="px-6 py-4 text-muted whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">{lead.name}</td>
                    <td className="px-6 py-4 text-muted whitespace-nowrap">{lead.company || "—"}</td>
                    <td className="px-6 py-4 text-blue-400 whitespace-nowrap">
                      <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {lead.service || "General"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted max-w-xs truncate">{lead.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
