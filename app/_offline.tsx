import React from "react";

export default function Offline() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">You are offline</h1>
      <p className="text-muted">Please check your internet connection and try again.</p>
    </div>
  );
}
