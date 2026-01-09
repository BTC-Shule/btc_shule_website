// /app/api/admin/logout/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  (await cookies()).delete("btcshule_admin");
  return NextResponse.json({ success: true });
}
