"use client";

import { useState, useEffect } from "react";
import { getTeamMembers, addTeamMember, deleteTeamMember } from "@/lib/api";
import { Trash2, UserPlus } from "lucide-react";

export default function AdminTeam() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("viewer");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchMembers = async () => {
    try {
      const res = await getTeamMembers();
      if (res.success) setMembers(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchMembers(); }, []);

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setSuccess("");
    try {
      const res = await addTeamMember({ email, password, role });
      if (res.success) {
        setSuccess("Member added successfully!");
        setEmail(""); setPassword("");
        fetchMembers();
      } else {
        setError(res.message || "Failed to add member");
      }
    } catch (err: any) {
      setError(err.message || "Server error");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await deleteTeamMember(id);
      if (res.success) fetchMembers();
    } catch { alert("Error deleting member"); }
  };

  const inputCls = "w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all";

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-black text-foreground tracking-tight mb-1">Team</h1>
        <p className="text-sm text-muted">Manage who has access to the admin portal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Add Member Form */}
        <div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <UserPlus className="w-4 h-4 text-blue-400" />
              </div>
              <h2 className="font-bold text-foreground">Add Member</h2>
            </div>
            {error && <div className="mb-4 p-3 bg-red-500/10 text-red-400 rounded-lg text-sm border border-red-500/20">{error}</div>}
            {success && <div className="mb-4 p-3 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm border border-emerald-500/20">{success}</div>}
            <form onSubmit={handleAddMember} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputCls} placeholder="member@vertex.com" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={inputCls} placeholder="••••••••" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Role</label>
                <select value={role} onChange={e => setRole(e.target.value)} className={inputCls}>
                  <option value="viewer">Viewer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button type="submit" className="w-full py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-colors">
                Create Account
              </button>
            </form>
          </div>
        </div>

        {/* Members List */}
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <h2 className="font-bold text-foreground">Current Members</h2>
            </div>
            {loading ? (
              <div className="p-12 text-center text-muted">
                <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-3" />
                Loading members...
              </div>
            ) : (
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/5 text-xs text-muted uppercase tracking-widest">
                    <th className="px-6 py-4 font-semibold">Email</th>
                    <th className="px-6 py-4 font-semibold">Role</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map(member => (
                    <tr key={member._id} className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors">
                      <td className="px-6 py-4 text-foreground">{member.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 text-xs rounded-full font-bold uppercase tracking-wider border ${member.role === 'admin' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-white/5 text-muted border-white/10'}`}>
                          {member.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button onClick={() => handleDelete(member._id)} className="p-2 text-muted hover:text-red-400 hover:bg-red-500/5 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {members.length === 0 && (
                    <tr><td colSpan={3} className="px-6 py-12 text-center text-muted">No members found.</td></tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
