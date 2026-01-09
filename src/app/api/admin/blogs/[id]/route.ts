import { NextResponse } from "next/server";
import { getBlog, updateBlog, deleteBlog } from "@/lib/blogs";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const blog = getBlog(params.id);
  if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(blog);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const blog = updateBlog(params.id, body);
  return NextResponse.json(blog);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  deleteBlog(params.id);
  return NextResponse.json({ success: true });
}
