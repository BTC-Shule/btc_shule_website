import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlog } from "@/lib/blogs";

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
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-secondary-light font-semibold">
            Preview Mode
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-primary">
            {blog.title}
          </h1>

          <p className="mt-4 text-gray-500 italic">
            By <span className="text-secondary-light">{blog.author}</span>
          </p>
        </header>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-3xl mb-12">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-xl text-gray-600 leading-relaxed mb-12 italic">
            {blog.excerpt}
          </p>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
        />
      </article>
    </main>
  );
}
