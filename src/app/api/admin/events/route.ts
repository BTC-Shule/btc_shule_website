import { NextResponse } from "next/server";
import { getEvents, createEvent } from "@/lib/events";

export async function GET() {
  return NextResponse.json(getEvents());
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json(createEvent(body));
}
