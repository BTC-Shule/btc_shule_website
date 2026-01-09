"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      setError("Invalid username or password");
      setLoading(false);
      return;
    }

    router.replace("/admin/dashboard");
  }

  return (
    <main className="min-h-screen grid place-items-center bg-gray-50">
      <form
        onSubmit={login}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-extrabold text-primary text-center">
          BTC Shule Admin
        </h1>

        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">
            {error}
          </div>
        )}

        <input
          name="username"
          required
          placeholder="Username"
          className="w-full px-4 py-3 rounded-xl border text-gray-700 placeholder:text-gray-500"
        />

        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          className="w-full px-4 py-3 rounded-xl border text-gray-700 placeholder:text-gray-500"
        />

        <button
          disabled={loading}
          className="w-full bg-primary text-white py-3 rounded-xl font-semibold disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </main>
  );
}
