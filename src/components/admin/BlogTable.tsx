"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogTable() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/blogs")
      .then((r) => r.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  async function remove(id: string) {
    if (!confirm("This will permanently delete the blog. Continue?")) return;
    await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  }

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-8 text-gray-500">
        Loading blogs…
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center">
        <p className="text-lg font-semibold text-primary">No blogs yet</p>
        <p className="text-gray-500 mt-2">
          Create your first blog to get started.
        </p>
        <Link
          href="/admin/blogs/new"
          className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-xl font-semibold"
        >
          Create Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 text-sm text-gray-500">
          <tr>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Author</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((b) => (
            <tr key={b.id} className="border-t hover:bg-gray-50">
              <td className="p-4 font-medium text-primary">
                {b.title}
              </td>
              <td className="p-4 text-gray-600">{b.author}</td>
              <td className="p-4 text-right space-x-4">
                <Link
                  href={`/admin/blogs/${b.id}`}
                  className="text-primary font-semibold"
                >
                  Edit
                </Link>
                <button
                  onClick={() => remove(b.id)}
                  className="text-red-500 font-semibold"
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
