// app/admin/blogs/[id]/page.tsx
import BlogForm from "@/components/admin/BlogForm";

export default function EditBlog() {
  return (
    <>
      <h1 className="text-3xl font-bold text-primary mb-8">Edit Blog</h1>
      <BlogForm />
    </>
  );
}
