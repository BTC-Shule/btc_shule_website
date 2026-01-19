/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EventForm({ id }: { id?: string }) {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (!id) return;
    fetch(`/api/admin/events/${id}`)
      .then((r) => r.json())
      .then(setData);
  }, [id]);

  async function save(e: React.FormEvent) {
    e.preventDefault();

    await fetch(id ? `/api/admin/events/${id}` : "/api/admin/events", {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    router.push("/admin/events");
  }

  return (
    <form onSubmit={save} className="space-y-6 max-w-xl mx-auto text-gray-600">
      {["title", "date", "time", "location"].map((f) => (
        <input
          key={f}
          placeholder={f}
          className="w-full border p-3 rounded-xl"
          value={(data as any)[f]}
          onChange={(e) =>
            setData({ ...data, [f]: e.target.value })
          }
        />
      ))}

      <textarea
        placeholder="Description"
        className="w-full border p-3 rounded-xl h-32"
        value={data.description}
        onChange={(e) =>
          setData({ ...data, description: e.target.value })
        }
      />

      <button className="bg-primary text-white px-6 py-3 rounded-xl">
        Save Event
      </button>
    </form>
  );
}
