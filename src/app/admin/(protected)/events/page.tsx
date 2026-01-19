/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function EventsTable() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin/events")
      .then((r) => r.json())
      .then(setEvents);
  }, []);

  async function remove(id: string) {
    if (!confirm("Delete this event?")) return;
    await fetch(`/api/admin/events/${id}`, { method: "DELETE" });
    setEvents((e) => e.filter((x) => x.id !== id));
  }

  return (
    <div className="bg-white rounded-3xl shadow overflow-hidden text-gray-600">
      <div className="p-6 flex justify-between">
        <h2 className="text-xl font-bold">Events</h2>
        <Link
          href="/admin/events/new"
          className="bg-primary text-white px-4 py-2 rounded-xl"
        >
          New Event
        </Link>
      </div>

      <table className="w-full">
        <thead className="bg-gray-50 text-sm">
          <tr>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e) => (
            <tr key={e.id} className="border-t">
              <td className="p-4 font-medium">{e.title}</td>
              <td className="p-4">{e.date}</td>
              <td className="p-4 text-right space-x-4">
                <Link href={`/admin/events/${e.id}`} className="text-primary">
                  Edit
                </Link>
                <button
                  onClick={() => remove(e.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
