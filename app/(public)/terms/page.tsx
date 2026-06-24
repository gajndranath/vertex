export default function Terms() {
  return (
    <div className="py-20 container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="mt-8 space-y-6 text-muted">
        <p>Please read these terms and conditions carefully before using Our Service.</p>
        <p>(Placeholder for actual Terms of Service content)</p>
      </div>
    </div>
  );
}
