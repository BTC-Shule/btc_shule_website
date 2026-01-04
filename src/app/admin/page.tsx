// app/admin/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username === "admin" && password === "btcshule123") {
      localStorage.setItem("btcshule_admin", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-extrabold text-primary mb-6 text-center">
          BTC Shule Admin
        </h1>

        <input
          className="w-full mb-4 px-4 py-3 border rounded-xl"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full mb-6 px-4 py-3 border rounded-xl"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Login
        </button>
      </div>
    </main>
  );
}
