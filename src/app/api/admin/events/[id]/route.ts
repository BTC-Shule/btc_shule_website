import { NextResponse } from "next/server";
import { getEvent, updateEvent, deleteEvent } from "@/lib/events";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, { params }: Context) {
  const { id } = await params;
  const event = getEvent(id);
  if (!event) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(event);
}

export async function PUT(req: Request, { params }: Context) {
  const { id } = await params;
  const body = await req.json();
  const event = updateEvent(id, body);
  if (!event) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(event);
}

export async function DELETE(_: Request, { params }: Context) {
  const { id } = await params;
  deleteEvent(id);
  return NextResponse.json({ success: true });
}
