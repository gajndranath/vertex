"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signupAdmin } from "@/lib/api";

export default function AdminSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await signupAdmin({ email, password });
      if (res.success) {
        // Automatically logged in via cookie from backend
        router.push("/admin");
      } else {
        setError(res.message || "Signup failed");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded shadow border border-muted/20">
        <h1 className="text-2xl font-bold text-center">Admin Signup</h1>
        {error && <div className="p-3 bg-red-500/10 text-red-500 rounded text-sm">{error}</div>}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border border-muted/20 rounded bg-background" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border border-muted/20 rounded bg-background" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="w-full bg-accent text-white p-2 rounded hover:bg-accent/90">
            Create Account
          </button>
        </form>
        <div className="text-center mt-4">
          <Link href="/admin/login" className="text-sm text-blue-500 hover:underline">
            Already have an account? Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
