// app/admin/blogs/new/page.tsx
import BlogForm from "@/components/admin/BlogForm";

export default function NewBlog() {
  return (
    <>
      <h1 className="text-3xl font-bold text-primary mb-8">Create Blog</h1>
      <BlogForm />
    </>
  );
}
