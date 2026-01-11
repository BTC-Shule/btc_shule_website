import BlogForm from "@/components/admin/BlogForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditBlog({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <h1 className="text-3xl font-bold text-primary mb-8">Edit Blog</h1>
      <BlogForm id={id} />
    </>
  );
}
