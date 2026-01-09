import { NextResponse } from "next/server";
import { getBlogs, createBlog } from "@/lib/blogs";

export async function GET() {
  return NextResponse.json(getBlogs());
}

export async function POST(req: Request) {
  const body = await req.json();
  const blog = createBlog(body);
  return NextResponse.json(blog);
}
