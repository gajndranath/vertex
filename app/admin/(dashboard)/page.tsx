"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Inbox, FileText, Users, Activity, ArrowRight, TrendingUp } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

interface DashboardStats {
  totalLeads: number;
  totalBlogs: number;
  activeVisitors: number;
  totalMembers: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalLeads: 0,
    totalBlogs: 0,
    activeVisitors: 0,
    totalMembers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/analytics/dashboard`, { credentials: "include" })
      .then((r) => r.json())
      .then((res) => {
        if (res.success) setStats(res.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const statCards = [
    {
      label: "Total Leads",
      value: stats.totalLeads,
      icon: Inbox,
      color: "from-blue-500/20 to-blue-600/5",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/20",
      href: "/admin/leads",
    },
    {
      label: "Published Blogs",
      value: stats.totalBlogs,
      icon: FileText,
      color: "from-violet-500/20 to-violet-600/5",
      iconColor: "text-violet-400",
      borderColor: "border-violet-500/20",
      href: "/admin/blog",
    },
    {
      label: "Team Members",
      value: stats.totalMembers,
      icon: Users,
      color: "from-emerald-500/20 to-emerald-600/5",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/20",
      href: "/admin/team",
    },
    {
      label: "Active Visitors",
      value: stats.activeVisitors,
      icon: Activity,
      color: "from-orange-500/20 to-orange-600/5",
      iconColor: "text-orange-400",
      borderColor: "border-orange-500/20",
      href: "/admin/analytics",
    },
  ];

  const quickActions = [
    { label: "Manage Leads", desc: "View, filter & reply to incoming leads", href: "/admin/leads", icon: Inbox },
    { label: "Write Blog Post", desc: "Publish new technical insights", href: "/admin/blog", icon: FileText },
    { label: "Manage Team", desc: "Add or remove portal users", href: "/admin/team", icon: Users },
    { label: "View Analytics", desc: "Track sessions, events & traffic", href: "/admin/analytics", icon: TrendingUp },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-black text-foreground tracking-tight mb-1">
          Dashboard
        </h1>
        <p className="text-sm text-muted">Welcome back. Here's what's happening with Vertex today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        {statCards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className={`group relative p-6 rounded-2xl bg-gradient-to-br ${card.color} border ${card.borderColor} hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/[0.02] transition-opacity" />
            <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${card.iconColor}`}>
              <card.icon className="w-5 h-5" />
            </div>
            <p className="text-sm text-muted font-medium mb-1">{card.label}</p>
            {loading ? (
              <div className="h-9 w-16 bg-white/5 rounded-lg animate-pulse" />
            ) : (
              <p className="text-4xl font-black font-heading text-foreground">{card.value}</p>
            )}
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-bold font-heading text-foreground mb-5">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="group flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                <action.icon className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground text-sm">{action.label}</p>
                <p className="text-xs text-muted mt-0.5">{action.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
