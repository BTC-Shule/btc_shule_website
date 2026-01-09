"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogForm({ id }: { id?: string }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    title: "",
    author: "",
    category: "",
    coverImage: "",
    excerpt: "",
    contentHtml: "",
  });

  useEffect(() => {
    if (!id) return;
    fetch(`/api/admin/blogs/${id}`)
      .then((r) => r.json())
      .then(setData);
  }, [id]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const res = await fetch(
      id ? `/api/admin/blogs/${id}` : "/api/admin/blogs",
      {
        method: id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) router.push("/admin/blogs");
  }

  return (
    <form
      onSubmit={save}
      className="bg-white rounded-3xl shadow p-10 space-y-10 max-w-5xl"
    >
      {/* Meta */}
      <section className="grid sm:grid-cols-2 gap-6">
        <Input label="Title" value={data.title} onChange={(v) => setData({ ...data, title: v })} />
        <Input label="Author" value={data.author} onChange={(v) => setData({ ...data, author: v })} />
        <Input label="Category" value={data.category} onChange={(v) => setData({ ...data, category: v })} />
        <Input label="Cover Image URL" value={data.coverImage} onChange={(v) => setData({ ...data, coverImage: v })} />
      </section>

      {/* Excerpt */}
      <section>
        <Label>Excerpt</Label>
        <textarea
          className="w-full border rounded-xl p-4 h-32"
          value={data.excerpt}
          onChange={(e) => setData({ ...data, excerpt: e.target.value })}
        />
      </section>

      {/* Content */}
      <section>
        <Label>Blog Content (HTML)</Label>
        <textarea
          className="w-full border rounded-xl p-4 h-[420px] font-mono text-sm"
          placeholder="Paste full HTML content here"
          value={data.contentHtml}
          onChange={(e) => setData({ ...data, contentHtml: e.target.value })}
        />
      </section>

      <div className="flex justify-end">
        <button
          disabled={saving}
          className="bg-primary text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save Blog"}
        </button>
      </div>
    </form>
  );
}

/* ---------- Small helpers ---------- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-gray-600 mb-2">
      {children}
    </label>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        className="w-full border px-4 py-3 rounded-xl"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
