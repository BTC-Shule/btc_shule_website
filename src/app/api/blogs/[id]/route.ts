import { NextResponse } from "next/server";
import { getPublishedBlog } from "@/lib/blogs";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, { params }: Context) {
  const { id } = await params;
  const blog = getPublishedBlog(id);

  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
