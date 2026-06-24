"use client";

import { useState, useEffect } from "react";
import { getTeamMembers, addTeamMember, deleteTeamMember } from "@/lib/api";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";

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
      if (res.success) {
        setMembers(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await addTeamMember({ email, password, role });
      if (res.success) {
        setSuccess("Member added successfully!");
        setEmail("");
        setPassword("");
        fetchMembers();
      } else {
        setError(res.message || "Failed to add member");
      }
    } catch (err: any) {
      setError(err.message || "Server error");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this member?")) return;
    try {
      const res = await deleteTeamMember(id);
      if (res.success) {
        fetchMembers();
      } else {
        alert(res.message || "Failed to delete");
      }
    } catch (err) {
      alert("Error deleting member");
    }
  };

  return (
    <div className="py-10 container mx-auto px-4 max-w-5xl">
      <div className="mb-8">
        <Link href="/admin" className="inline-flex items-center text-sm text-muted hover:text-foreground mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold">Team Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form to add new member */}
        <div className="md:col-span-1">
          <div className="bg-card p-6 rounded shadow border border-muted/20">
            <h2 className="text-xl font-bold mb-4">Add Member</h2>
            {error && <div className="mb-4 p-2 bg-red-500/10 text-red-500 rounded text-sm">{error}</div>}
            {success && <div className="mb-4 p-2 bg-green-500/10 text-green-500 rounded text-sm">{success}</div>}
            <form onSubmit={handleAddMember} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full p-2 border border-muted/20 rounded bg-background" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full p-2 border border-muted/20 rounded bg-background" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select 
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  className="w-full p-2 border border-muted/20 rounded bg-background"
                >
                  <option value="viewer">Viewer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-accent text-white p-2 rounded hover:bg-accent/90">
                Create Account
              </button>
            </form>
          </div>
        </div>

        {/* List of members */}
        <div className="md:col-span-2">
          <div className="bg-card rounded shadow border border-muted/20 overflow-hidden">
            <div className="p-4 border-b border-muted/20 bg-muted/5">
              <h2 className="text-lg font-bold">Current Members</h2>
            </div>
            {loading ? (
              <div className="p-8 text-center text-muted">Loading members...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-muted/20 text-sm text-muted">
                      <th className="p-4 font-semibold">Email</th>
                      <th className="p-4 font-semibold">Role</th>
                      <th className="p-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map(member => (
                      <tr key={member._id} className="border-b border-muted/10 hover:bg-muted/5">
                        <td className="p-4">{member.email}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 text-xs rounded-full font-bold uppercase tracking-wider ${member.role === 'admin' ? 'bg-blue-500/10 text-blue-500' : 'bg-gray-500/10 text-gray-500'}`}>
                            {member.role}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button 
                            onClick={() => handleDelete(member._id)}
                            className="p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
                            title="Delete Member"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {members.length === 0 && (
                      <tr>
                        <td colSpan={3} className="p-8 text-center text-muted">No members found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
