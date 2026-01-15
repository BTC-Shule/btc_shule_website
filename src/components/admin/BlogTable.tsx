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
      <table className="w-full border-collapse">
        <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
          <tr>
            <th className="px-6 py-4 text-left">Blog</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Featured</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((b) => (
            <tr key={b.id} className="border-t hover:bg-gray-50 transition">
              {/* Blog Title + Author */}
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-primary leading-snug">
                    {b.title}
                  </span>
                  <span className="text-sm text-gray-500 mt-1">
                    by {b.author}
                  </span>
                </div>
              </td>

              {/* Status */}
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${
                    b.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {b.status === "published" ? "Published" : "Draft"}
                </span>
              </td>

              {/* Featured */}
              <td className="px-6 py-4">
                {b.featured ? (
                  <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
                    Featured
                  </span>
                ) : (
                  <span className="text-xs text-gray-400">—</span>
                )}
              </td>

              {/* Actions */}
              <td className="px-6 py-4 text-right whitespace-nowrap">
                <div className="inline-flex items-center gap-4">
                  <a
                    href={`/admin/blogs/preview?id=${b.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary text-sm font-medium"
                  >
                    Preview
                  </a>

                  <Link
                    href={`/admin/blogs/${b.id}`}
                    className="text-primary text-sm font-semibold"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => remove(b.id)}
                    className="text-red-500 text-sm font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
