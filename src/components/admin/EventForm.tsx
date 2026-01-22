"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type EventFormData = {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
};

export default function EventForm({ id }: { id?: string }) {
  const router = useRouter();

  const [data, setData] = useState<EventFormData>({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    description: "",
  });

  /* ---------------- Load event when editing ---------------- */

  useEffect(() => {
    if (!id) return;

    fetch(`/api/admin/events/${id}`)
      .then((r) => r.json())
      .then((event) =>
        setData({
          title: event.title ?? "",
          date: event.date
            ? new Date(event.date).toISOString().slice(0, 10)
            : "",
          startTime: event.startTime ?? "",
          endTime: event.endTime ?? "",
          location: event.location ?? "",
          description: event.description ?? "",
        }),
      );
  }, [id]);

  /* ---------------- Save ---------------- */

  async function save(e: React.FormEvent) {
    e.preventDefault();

    await fetch(id ? `/api/admin/events/${id}` : "/api/admin/events", {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    router.push("/admin/events");
  }

  /* ---------------- UI ---------------- */

  return (
    <form onSubmit={save} className="space-y-6 max-w-xl mx-auto text-gray-600">
      {/* Title */}
      <input
        placeholder="Event title"
        className="w-full border p-3 rounded-xl"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
        required
      />

      {/* Date */}
      <input
        type="date"
        className="w-full border p-3 rounded-xl"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
        required
      />

      {/* Start Time */}
      <input
        type="time"
        className="w-full border p-3 rounded-xl"
        value={data.startTime}
        onChange={(e) => setData({ ...data, startTime: e.target.value })}
      />

      {/* End Time */}
      <input
        type="time"
        className="w-full border p-3 rounded-xl"
        value={data.endTime}
        onChange={(e) => setData({ ...data, endTime: e.target.value })}
      />

      {/* Location */}
      <input
        placeholder="Location (e.g. Online, Nairobi, Kigali)"
        className="w-full border p-3 rounded-xl"
        value={data.location}
        onChange={(e) => setData({ ...data, location: e.target.value })}
        required
      />

      {/* Description */}
      <textarea
        placeholder="Event description"
        className="w-full border p-3 rounded-xl h-32"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
        required
      />

      {/* Actions */}
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 rounded-xl border font-semibold hover:bg-secondary-light/10"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-light"
        >
          Save Event
        </button>
      </div>
    </form>
  );
}
