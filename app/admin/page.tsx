import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="py-10 container mx-auto px-4 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button className="text-sm bg-muted text-white px-4 py-2 rounded hover:bg-muted/90">Logout</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-card p-6 rounded shadow border border-muted/20">
          <h3 className="text-muted text-sm font-medium mb-2">Total Leads Today</h3>
          <p className="text-4xl font-bold text-accent">5</p>
        </div>
        <div className="bg-card p-6 rounded shadow border border-muted/20">
          <h3 className="text-muted text-sm font-medium mb-2">Active Visitors</h3>
          <p className="text-4xl font-bold">12</p>
        </div>
        <div className="bg-card p-6 rounded shadow border border-muted/20">
          <h3 className="text-muted text-sm font-medium mb-2">Published Blogs</h3>
          <p className="text-4xl font-bold">3</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card rounded shadow border border-muted/20 p-6">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li><Link href="/admin/leads" className="text-accent hover:underline">Manage Leads &rarr;</Link></li>
            <li><Link href="/admin/blog" className="text-accent hover:underline">Manage Blog Posts &rarr;</Link></li>
            <li><Link href="/admin/analytics" className="text-accent hover:underline">View Detailed Analytics &rarr;</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
