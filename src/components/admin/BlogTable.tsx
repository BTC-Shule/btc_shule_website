// components/admin/BlogTable.tsx
"use client";

const blogs = [
  {
    id: "circular-economy",
    title: "Exploring Kenya’s Bitcoin Circular Economies",
    author: "Belyi Nobel Kubwayo",
    date: "August 2025",
  },
];

export default function BlogTable() {
  return (
    <div className="bg-white rounded-3xl shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Author</th>
            <th className="p-4">Date</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="border-t">
              <td className="p-4 font-medium">{blog.title}</td>
              <td className="p-4">{blog.author}</td>
              <td className="p-4">{blog.date}</td>
              <td className="p-4 text-right space-x-3">
                <a
                  href={`/admin/blogs/${blog.id}`}
                  className="text-primary font-semibold"
                >
                  Edit
                </a>
                <button className="text-red-500 font-semibold">
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
