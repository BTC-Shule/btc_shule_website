// components/admin/BlogForm.tsx
"use client";

export default function BlogForm() {
  return (
    <form className="bg-white rounded-3xl shadow p-8 space-y-6 max-w-3xl">
      <input className="w-full border px-4 py-3 rounded-xl" placeholder="Title" />
      <input className="w-full border px-4 py-3 rounded-xl" placeholder="Author" />
      <input className="w-full border px-4 py-3 rounded-xl" placeholder="Category" />
      <input className="w-full border px-4 py-3 rounded-xl" placeholder="Cover Image URL" />

      <textarea
        className="w-full border px-4 py-3 rounded-xl h-48"
        placeholder="Excerpt"
      />

      <textarea
        className="w-full border px-4 py-3 rounded-xl h-72"
        placeholder="Blog Content (Markdown / JSX later)"
      />

      <button className="bg-primary text-white px-8 py-3 rounded-xl font-semibold">
        Save Blog
      </button>
    </form>
  );
}
