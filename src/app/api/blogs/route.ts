import { NextResponse } from "next/server";
import { getPublishedBlogs } from "@/lib/blogs";

export async function GET() {
  return NextResponse.json(getPublishedBlogs());
}
