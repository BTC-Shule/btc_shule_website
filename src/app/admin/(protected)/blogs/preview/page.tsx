import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlog, updateBlog } from "@/lib/blogs";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    id?: string;
  }>;
};

export default async function BlogPreview({ searchParams }: Props) {
  const { id } = await searchParams;

  if (!id) return notFound();

  const blog = getBlog(id);

  if (!blog) return notFound();

  return (
    <main className="min-h-screen bg-background py-16">
      {/* ACTION BAR */}
      <div className="flex justify-between items-center mb-10">
        <Link
          href="/admin/blogs"
          className="text-sm font-semibold text-primary px-4"
        >
          ← Back to blogs
        </Link>
        <div className="flex justify-between items-center">
          {blog.status === "draft" && (
            <form
              action={async () => {
                "use server";
                await updateBlog(blog.id, { status: "published" });
              }}
            >
              <button className="bg-primary text-white px-6 py-2 rounded-xl font-semibold">
                Publish
              </button>
            </form>
          )}
          {blog.status === "published" && !blog.featured && (
            <form
              action={async () => {
                "use server";
                await updateBlog(blog.id, { featured: true });
              }}
            >
              <button className="bg-purple-600 text-white px-6 py-2 rounded-xl font-semibold">
                Set as Featured
              </button>
            </form>
          )}
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-secondary-light font-semibold pb-4">
            Preview Mode
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            {blog.title}
          </h1>
          <p className="mt-4 text-gray-400 italic">
            By <span className="text-secondary-light">{blog.author}</span> ·{" "}
            {new Date(blog.updatedAt).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </header>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-3xl mb-12">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none text-gray-600 text-lg"
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
        />
      </article>
    </main>
  );
}
