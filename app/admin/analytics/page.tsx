export default function AnalyticsDashboard() {
  return (
    <div className="py-10 container mx-auto px-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-card p-6 rounded shadow border border-muted/20">
          <h3 className="text-muted text-sm font-medium mb-2">Total Pageviews</h3>
          <p className="text-4xl font-bold text-accent">1,245</p>
        </div>
        <div className="bg-card p-6 rounded shadow border border-muted/20">
          <h3 className="text-muted text-sm font-medium mb-2">Unique Visitors</h3>
          <p className="text-4xl font-bold">890</p>
        </div>
        <div className="bg-card p-6 rounded shadow border border-muted/20">
          <h3 className="text-muted text-sm font-medium mb-2">Avg Session Duration</h3>
          <p className="text-4xl font-bold">2m 14s</p>
        </div>
        <div className="bg-card p-6 rounded shadow border border-muted/20">
          <h3 className="text-muted text-sm font-medium mb-2">Bounce Rate</h3>
          <p className="text-4xl font-bold text-red-500">42%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card rounded shadow border border-muted/20 p-6 h-80 flex flex-col items-center justify-center text-muted">
          <p>Traffic Over Time Chart (Placeholder)</p>
          {/* Here we will integrate recharts later */}
        </div>
        <div className="bg-card rounded shadow border border-muted/20 p-6 h-80 flex flex-col items-center justify-center text-muted">
          <p>Top Pages Chart (Placeholder)</p>
        </div>
      </div>
    </div>
  );
}
