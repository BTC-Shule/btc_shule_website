import { NextResponse } from "next/server";
import { getBlogs } from "@/lib/blogs";

export async function GET() {
  const count = getBlogs().length;
  return NextResponse.json({ count });
}
