"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RichTextEditor from "./RichTextEditor";

type Status = "draft" | "published";

export default function BlogForm({ id }: { id?: string }) {
  const router = useRouter();

  const [saving, setSaving] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);

  const [data, setData] = useState({
    title: "",
    author: "",
    category: "",
    excerpt: "",
    coverImage: "",
    contentHtml: "",
    seoTitle: "",
    seoDescription: "",
    status: "draft" as Status,
  });

  /* ---------------- Load blog when editing ---------------- */

  useEffect(() => {
    if (!id) return;

    fetch(`/api/admin/blogs/${id}`)
      .then((r) => r.json())
      .then((blog) =>
        setData((prev) => ({
          ...prev,
          ...blog,
          seoTitle: blog.seoTitle ?? "",
          seoDescription: blog.seoDescription ?? "",
          category: blog.category ?? "",
          excerpt: blog.excerpt ?? "",
          coverImage: blog.coverImage ?? "",
          contentHtml: blog.contentHtml ?? "",
          status: blog.status ?? "draft",
        }))
      );
  }, [id]);

  /* ---------------- Cloudinary uploads ---------------- */

  async function uploadCoverImage(file: File) {
    setUploadingCover(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    setUploadingCover(false);

    if (json.url) {
      setData((d) => ({ ...d, coverImage: json.url }));
    }
  }

  async function uploadEditorImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    return json.url;
  }

  /* ---------------- Save ---------------- */

  async function save(e: React.FormEvent) {
    e.preventDefault();

    if (data.status === "published" && !data.contentHtml) {
      alert("Cannot publish an empty blog.");
      return;
    }

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
    setSaving(false);
  }

  /* ---------------- UI ---------------- */

  return (
    <form
      onSubmit={save}
      className="bg-white rounded-3xl shadow p-10 space-y-10 max-w-5xl mx-auto"
    >
      {/* ---------------- Meta ---------------- */}
      <section className="grid sm:grid-cols-2 gap-6">
        <Input
          label="Title"
          value={data.title}
          onChange={(v) => setData({ ...data, title: v })}
        />

        <Input
          label="Author"
          value={data.author}
          onChange={(v) => setData({ ...data, author: v })}
        />

        <Input
          label="Category"
          value={data.category}
          onChange={(v) => setData({ ...data, category: v })}
        />

        {/* Cover Image */}
        <section>
          <Label>Cover Image</Label>

          {data.coverImage && (
            <Image
              src={data.coverImage}
              alt="Cover preview"
              width={600}
              height={400}
              unoptimized
              className="mb-4 w-full max-w-sm rounded-xl border object-cover"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) uploadCoverImage(file);
            }}
            className="block w-full text-sm text-gray-600
              file:mr-4 file:py-3 file:px-8
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-primary/10 file:text-primary
              hover:file:bg-primary/20"
          />

          {uploadingCover && (
            <p className="text-sm text-gray-500 mt-2">Uploading cover image…</p>
          )}
        </section>
      </section>

      {/* ---------------- Excerpt ---------------- */}
      <section>
        <Label>Excerpt</Label>
        <textarea
          className="w-full border rounded-xl p-4 h-32 text-gray-700"
          value={data.excerpt}
          onChange={(e) => setData({ ...data, excerpt: e.target.value })}
        />
      </section>

      {/* ---------------- Content ---------------- */}
      <section>
        <Label>Blog Content</Label>
        <RichTextEditor
          value={data.contentHtml}
          uploadImage={uploadEditorImage}
          onChange={(html) => setData((d) => ({ ...d, contentHtml: html }))}
        />
      </section>

      {/* ---------------- Status ---------------- */}
      <section className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={data.status === "published"}
          onChange={(e) =>
            setData({
              ...data,
              status: e.target.checked ? "published" : "draft",
            })
          }
        />
        <span className="text-sm font-medium text-gray-700">
          Publish immediately
        </span>
      </section>

      {/* ---------------- SEO ---------------- */}
      <section className="grid sm:grid-cols-2 gap-6">
        <Input
          label="SEO Title"
          value={data.seoTitle}
          onChange={(v) => setData({ ...data, seoTitle: v })}
          placeholder="Recommended: ≤ 60 characters"
        />

        <div>
          <Label>SEO Description</Label>
          <textarea
            maxLength={160}
            className="w-full border rounded-xl p-4 h-24 text-gray-700"
            placeholder="Recommended: ≤ 160 characters"
            value={data.seoDescription}
            onChange={(e) =>
              setData({ ...data, seoDescription: e.target.value })
            }
          />
        </div>
      </section>

      {/* ---------------- Actions ---------------- */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          disabled={!id}
          onClick={() => window.open(`/admin/blogs/preview?id=${id}`, "_blank")}
          className="bg-secondary text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-60"
        >
          Preview
        </button>

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

/* ---------------- Helpers ---------------- */

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
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        className="w-full border px-4 py-3 rounded-xl text-gray-700"
        value={value ?? ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
