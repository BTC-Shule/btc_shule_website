import { NextResponse } from "next/server";
import { getBlog, updateBlog, deleteBlog } from "@/lib/blogs";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: Request, { params }: Context) {
  const { id } = await params;

  const blog = getBlog(id);
  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}

export async function PUT(req: Request, { params }: Context) {
  const { id } = await params;
  const body = await req.json();

  const blog = updateBlog(id, body);
  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}

export async function DELETE(_: Request, { params }: Context) {
  const { id } = await params;

  deleteBlog(id);
  return NextResponse.json({ success: true });
}
